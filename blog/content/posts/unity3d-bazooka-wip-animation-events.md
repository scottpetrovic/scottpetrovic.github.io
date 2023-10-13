---
title: "Unity3D: Bazooka WIP, Animation Events"
date: "2010-07-14"
categories: 
  - "computer"
  - "game"
  - "interaction-design"
  - "unity3d"
---

[Bazooka Explosion Unity3D File](/unity3d/bazooka-explosion.unity3d)

## Controls

- **W,A,S,D** - Move 
- **1** - Arm Bazooka 
- **0** - Put away bazooka  
- **spacebar** \- jump 
- **Left Mouse button** - Fire bazooka (must be walking or stopped) 
- **Left Shift button** - Walk

The bazooka addition to my character is coming along, but it still needs work. One of the things that I am starting to notice is that characters get complicated when there are different types of animations getting stacked on each other. I originally was trying to keep all of my animations in one script for the character, but when I started using a head look controller script, I am starting to feel like I am losing control of which animations will be in control. Simply blending in and out isn't the panacea of animation states. How does it know what is more important?   Adding an additional script for bazooka aiming will further complicate matters. I will continue studying vigilantly and report back any groundbreaking discoveries. On other notes...

## Head Look Controller Modification

The head look controller does a great job making your character look at an object. The problem I was having was when the target goes into an arbitrary point in space that isn't in the ground. Looking up into the sky has no colliders or objects, so the character had no where to focus on. What I ended up doing was creating a hidden collider in front of the character that would only work with the mouse cursor. The mouse can collide with the "sky" collider as well as the ground in the world. See image below.

![Ray casting onto a target collider](./images/sky-cursor.jpg "sky-cursor")

The blue line coming from the right is a ray that is being drawn from the camera. This is used to find out where the target is at. The only that is used in the end is the collision point on the green box collider.  This can also be used as a good way to limit the distance that your character can "lock on" to outside enemies. The missile ignores the collider with the **Physics.ignoreCollider()**, so nothing else will affect it.

## Animation Events

Animation events are functions that get fired when an animation is partly done. One example is a bazooka firing. The missile doesn't come out until about 3/4 through the animation. How do you program that? Animation Events! Most of the tutorials and explanations online tell you to do this with the animation window, but their solution to fixing locked models was not good (copying it and doing other repetitive tasks).

    void Start()
    {
        AnimationEvent bazookaEvent = new AnimationEvent();
        bazookaEvent.functionName = "bazookaFireEvent";
        bazookaEvent.time = 0.4f;
        animation.GetClip("bazookaFire").AddEvent(bazookaEvent);
    }

I declared an **AnimationEvent** class and set a property called "bazookaFireEvent". This function will fire when the animation event goes off. The "time" property is the time that it gets fired off. Honestly, I had to tinker with this, since if I put a value over one, the function never fired. If anyone understands this property, let me know! The last call **animation.GetClip()** simply assigns the function and parameters to the existing animation I already made.

    public void bazookaFireEvent()
    {
        Vector3 MissilePos = GameObject.Find("BazookaBarrel").transform.position;
        Vector3 MissileRot = GameObject.Find("BazookaBarrel").transform.forward;

        Instantiate(bazookaMissile, MissilePos, Quaternion.LookRotation(MissileRot));
    }

I put this function outside of everything in the Weapon.cs file. This is what is called when the animation event happens at 0.4f time. It creates a position and rotation Vector that point to "BazookaBarrel" - an empty gameobject that is at the tip of the bazooka. It finally instantiates the prefab that does the firing.

[World Gravity ZIP Project File](/unity3d/world-gravity2.zip)

## Next

After I figure out how to do the aiming with the bazooka, there needs to be stuff to blow up! I have created some monster sketches that will work. I want to play around more with hinge joints for armor and ragdoll effects when the monsters die. I don't think it will be that hard...or so the famous saying goes.
