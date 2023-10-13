---
title: "Unity3D and Mecanim: The Good, the Bad, and the Strange"
date: "2013-03-03"
categories: 
  - "game"
  - "unity3d"
---

I have spent the better part of the past two month using Unity 4 and building a game with the new Mecanim animation system. With the [video tutorial](http://video.unity3d.com/video/7362044/unity-40-mecanim-animation-tutorial) and material out there, it seems like a great next step for managing animations in Unity. This post outlines some of my experiences and solutions to make the Mecanim system work with non-trivial situations.

### Creating a Good Setup for Mecanim

When starting with any new system or concept, I think it is best to start from scratch. Eliminate all other variables and concentrate on the new functionality or API.  For my journey, that begins inside of my 3d modeling package of choice - Blender.

Creating models and armatures that play well with Mecanim is a pre-requisite. To begin, I studied the Mecanim project in Unity and see how they create, place, and name all of the bones. While all of the bones are required to have a successful setup, I tried to create a rig that has all of the potentials bones ( i.e. eyes, mouth, finger joints).

An important point when rigging is making sure everything is on a 2D plane. You can easily check this by going into the top view of your animation package and  making sure everything is flat.

I didn't thoroughly test it, but naming the bones the same as the Unity mecanim character helps. This is particularly helpful when rigging the hand all of its joints. If you are interested in the rigging algorithm and how it is calculated, I highly recommend the [Auto-Setup of a Humanoid](http://blogs.unity3d.com/2013/02/07/automatic-setup-of-a-humanoid/) article by Rune Johanson. This guy is crazy smart.

One point that helps auto-setup work is having either bones be perfectly straight up/down, or perfectly left/right. Having the trapezius area or fingers at 45 degree angles can mess up the calculations. A good way to test is to configure the rig and move bones around.

![](./images/t-pose-setup.jpg "t-pose-setup")

It is easy to move the bones around until you get the rotation correct. You can see in the image above that the rotation is not correct for the left shoulder. Using the rotate tool in Unity, you can see exactly what needs to be done to the armature to put it in the correct T-Pose. Unity does come with an option to automatically fix the pose, but I think it is better to start it off correctly. It is good to have a model that imports perfectly into Unity to streamline the process.

### Animation Baking Sweetness ( Pun intended!)

A very important part of Mecanim that hasn't had much explanation is the animation settings in the Import area. You can get to this area by going to the import settings and clicking the Animation button.

Selecting an animation from the clips will present options on how you want Unity to handle the animations. For my purpose, I am creating the motion inside of my 3d modeling tool. Unity will use the character translations and move the game object based off of it. This type of motion is considered "Root Motion".

![](./images/mecanim-animation-baking.jpg "mecanim-animation-baking")

Each Root Transform feature has  "Bake int Pose" checkbox. This checkbox tells Unity how it should handle animation changes to movement and rotation. If it is unchecked, it means Unity will use the data and update the transform of the game object inside of Unity. If checked, Unity will not update the game object's transform.

For example, I could have a character animation that skips and bounces up and down. In this case I would NOT want Unity to update the transform when the character is going up and down. Doing this will make a camera follow script bounce up and down as well since it follows a gameobject's transform.  This would get annoying very quickly.

To avoid this we can bake the root transform position (Y). You can see it in the image above. This will tell Unity to ignore any Y axis changes to the position for the game object it is attached to. The transform will stay grounded now and the camera bouncing will disappear

For running/walking animations, it is good to bake the Root Transform Rotation. With Mecanim, the root position is around the hips. Hips move left to right when running, so the camera will be swinging around the character if you don't bake the rotation in.

### Animation Events

With the first iteration of the Mecanim system, there is a very limited API on what you can access and control. You can change the animation speed for all animations, (animator.speed), but you cannot target a specific animation and update its speed. Making the API more robust is in the [roadmap](http://blogs.unity3d.com/2012/12/07/whats-next-on-mecanim-roadmap/), but for now you have to make due.

A troubling area for me was creating animation events at different points. Since there is no options right now in Mecanim, I was contemplating going back to the old system. Instead, I decided to create a script that will handle animation timing similar to animation events would. The basic setup is like the following:

    using UnityEngine;
    using System.Collections;
    
    public class FireBallAttack : MonoBehaviour
    {
    
        public GameObject fireballPrefab;
    
        private Animator animator;
        private float attackAnimationLength = 4.1f;
        private float attackDelay = 2.2f;
    
        public void Setup ()
        {
            animator = GetComponent();
    
            animator.SetBool("Attack", true);
            animator.SetLayerWeight(0, 0); //normal animation layer
            animator.SetLayerWeight(1, 0); //additive animation layer
            animator.SetLayerWeight(2, 1); //override animation layer
    
            StartCoroutine("attack");
            StartCoroutine("cleanup");
    }
    
    public IEnumerator attack()
    {	
    
        yield return new WaitForSeconds(attackDelay);
    
        poweringUp.particleSystem.Stop();		

        Vector3 fireballPosition = transform.position + (transform.forward\*2) + (transform.up\*2);

        GameObject \_tempFireball = (GameObject)Instantiate (fireball, fireballPosition, Quaternion.Euler(transform.forward  ));
        \_tempFireball.GetComponent().moveDirection = transform.forward \* 15.0f;

    }

    public IEnumerator cleanup()
    {
        yield return new WaitForSeconds(attackAnimationLength);		

        //return to normal layer
        animator.SetLayerWeight(0, 1);
        animator.SetLayerWeight(1, 0);
        animator.SetLayerWeight(2, 0);
        animator.SetBool("Attack", false);	

        }
    }

Without going line by line, here is a breakdown on what the code is doing:

1. Setup() - will be called externally when you want the animation to start. 
2. Start co-routines attack() and cleanup() to start doing the work
3. Attack() - This is in an IEnumerator so it can use the yield statement. you can do your logic here with instantiating or doing other effects. This attack doesn't start until 2.2 seconds, so it waits to run the code until the appropriate time. 
4. Cleanup() - Attacking is done when the animation is complete. Destroy any miscellaneous objects you don't want and set the layer weights back to what they were before. 

 

I don't believe you can access the animation clip's length from the API, so I manually code how long the animation is. Hopefully this property can be accessed in the future releases.

This is more or less the framework I am using for the game I am working on. I will do some posts about my progress in the coming weeks. Because I have multiple attacks, I am actually using an interface and have a controller layer that manages which attack is playing.

In the script above, you will notice that I was changing the  "Attack" bool to true/false at the beginning and end of the script. This helps other scripts determine whether an attack is in progress or not. You don't want to  start doing a crazy attack while in the middle of a jump. The SetBool() is accessible from the Animator class, so anything should be able to reference it if needed.

### The Road Less Traveled

Mecanim is a great feature in Unity that really helps manage sophisticated animation logic. It still has a ways before it reaches its potential, but I do think that it will get significantly better in the coming releases. Hopefully now you have a better idea of some of Mecanim's strengths and weakness - as well as how to overcome them.
