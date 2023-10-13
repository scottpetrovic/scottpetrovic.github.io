---
title: "Unity3D: Planetary Gravity, Daylight System w/source"
date: "2010-06-29"
categories: 
  - "computer"
  - "game"
  - "unity3d"
---

Having characters or other movable objects walk and jump around a plane or flat surface is relatively easy. You can just add a character controller component to the object and you are off and running. There are plenty of scripts and resources to do motion on a flat plane. Creating a physics system that's based off non-planar movement is a little bit more complicated.

To put a preface on this article, this solution is not "true" planetary gravity. Most of this code was pulled from the [locomotion system demo](http://unity3d.com/support/resources/unity-extensions/locomotion-ik "Unity3d Locomotion system") from the Unity website, so I can't take credit for figuring out these concepts. I will just be including the parts with how the gravity works along with an explanation. Take a look at the project

[World Gravity Unity3D File](/unity3d/world-gravity.unity3d)

[World Gravity Source Code](/unity3dworld-gravity.zip)

## Planar gravity vs. Non-planar gravity

Most of the default gravity in Unity uses the transform.up vector to determine which way is up. This is usually aligned to be parallel to the positive y world space. When the up direction gets changed using planetary gravity, all of your other axises get shifted in relation to what is right and forward.

Turning your player right will influence the "up" or y part of your character. The up direction can be rotated around all three axises now - as opposed to one. The "x" rotation will change the pitch of it,  and the "z" rotation will change the roll. Rotating by "y" is rotating around its own axis, so the direction of gravity doesn't wouldn't change - but the character might turn left or right.

## Determining Gravity Direction

    RaycastHit hit;

        desiredUp = Vector3.zero;
        for (int i=0; i<8; i++) {
            Vector3 rayStart =
                transform.position
                    + transform.up
                    + Quaternion.AngleAxis(360 \* i / 8.0f, transform.up)
                        \* (transform.right \* 0.5f)
                    + desiredVelocity\*0.2f;

            Debug.DrawRay(rayStart, transform.up \* -5, Color.red);
           // Debug.Log(Physics.Raycast(rayStart, transform.up\*-48, out hit, 3.0f, groundLayers));
            if ( Physics.Raycast(rayStart, transform.up\*-5, out hit, 10.0f, groundLayers.value) ) {

                desiredUp += hit.normal;
               	}
    }

This is a snippet from the project files. If you look at the loop, it iterates 8 times. One of the main reasons that it loops is that it creates a ray each iteration. There are 8 rays that shoot down that make a circle around the character. You can see this in the editor window - Debug.DrayRay does that.  These rays will hit a surface on the collider and store its normal (or up direction). The variable desiredVelocity makes the Rays move based on the characters velocity. This helps from players getting stuck if the terrain has a drastic shift.

There is nothing in the code that looks at the mass of the object or calculate where the center of the planet it is. It only goes by what is below the player. This means that if you are going down a steep hill, your player won't "fall" down it. In fact, you can walk up walls and ceilings with this implementation. Nothing is stopping you! Changing the Layermasks can help you filter what you want to use as gravity direction (groundLayers in code above).

## 3D Camera

Most of this code was ganked from the locomotion system with a few tweaks to make it work with my setup.

        //posFollow.Update(Vector3 targetPositionNew, float deltaTime)
        transform.position = posFollow.Update(
            character.transform.position + horizontal\*Mathf.Abs(positionVector.z) + vertical\*positionVector.y,
            Time.deltaTime\*12
        );

        horizontal = lastVelocityDir;
        Vector3 look = lookFollow.Update(character.transform.position + horizontal\*lookVector.z - vertical\*lookVector.y, Time.deltaTime);

        //creates a cross product to stabilize the right vector on camera
        Vector3 crossX = Vector3.Cross(transform.forward, -character.transform.up);
        transform.right = crossX;

        transform.rotation = Quaternion.FromToRotation(transform.forward, look-transform.position) \* transform.rotation;

This is a snippet from the Camera script. It is calculating where the camera needs to be in relation to the world and the player.

_posFollow.Update(Vector3 targetPositionNew, float deltaTime)_ is a function in the locomotion system - Util.cs. It is all part of the "SmoothFollower" class that does a lot of the animation and prediction of the players position and rotation. The code for it is at the bottom of the Util.cs class. I haven't studied it that thoroughly, so not sure exactly what is going on.

_lookFollow.Update()_ are updating the rotation while _posFollow.Update()_ is updating the position of the camera.

The part near the end with _Vector3.cross()_ is taking the Cross Product

Vector3 crossX = Vector3.Cross(transform.forward, -character.transform.up);
 transform.right = crossX;

If you don't know what a Cross Product is in linear algebra, it is where you give it two different vectors and it will give you a perpendicular vector coming out of it. If you have two vectors, they are in one plane. Think of a normal coming out of that plane. That is what the Cross product gives you.

The reason that it is binded to the camera's right, or x, axis is because of how the character rotates. This stabilizes the camera to the ground orientation.

## Daylight System

This is a script I made that takes advantage of a blended skybox shader that I found on the Unity3d wiki.

    public class DaylightTime : MonoBehaviour
    {
        //15 degrees is equal to an hour of time. multiply by time to slow down rotation amount
        float timeChange = 15.0f \* 0.03f;
        public Material skyBoxMat;

        private GameObject character;
        private GameObject sunlight;

        private float materialBlendValue = 0.5f;

        void Start()
        {
            character = GameObject.Find("Player");
            sunlight = GameObject.Find("sunlight");

        }

        // Update is called once per frame
        void Update()
        {

            transform.Rotate(0, timeChange \* Time.deltaTime, 0);

            //determine skybox texture depending on player's position
            float materialAngleDifference = Vector3.Angle(character.transform.up, -sunlight.transform.forward);
            //Debug.Log(materialAngleDifference);

            // float materialBlendValue = materialAngleDifference / 180.0f;

            if (materialAngleDifference < 65)         {             materialBlendValue = Mathf.Lerp(materialBlendValue, 1.0f, Time.deltaTime \* 0.5f);             skyBoxMat.SetFloat("\_Blend", materialBlendValue);             Debug.Log(materialAngleDifference);         }         else if (materialAngleDifference >= 110)
            {
                materialBlendValue = Mathf.Lerp(materialBlendValue, 0.0f, Time.deltaTime \* 0.5f);
                skyBoxMat.SetFloat("\_Blend", materialBlendValue);
            }
            else
            {
                //materialBlendValue = materialAngleDifference / 180.0f;
                materialBlendValue = Mathf.Lerp(materialBlendValue, 0.5f, Time.deltaTime \* 0.5f);
                skyBoxMat.SetFloat("\_Blend", materialBlendValue);
            }

       }
    }

The _timeChange_ value calculates the amount of time it takes for the sun(directional light) to make a full revolution around the planet. I parented the sunlight and moonlight so they would be rotating at the same time. No chance for an eclipse with this setup!

The second part is dynamically changing the skybox material based on the character's position relative to the sun. The two skyboxes assigned are for night and day. The shader has a slider that allows a clamped value (0-1) between the two textures. If it is something like .65, it will blend them together.

Notice how the if statements by the "materialAngleDifference" aren't very clear. I designed it so that if you are within a 60 degree radius of the extreme values (0 and 1), it will automatically transition to the full value.

I did this because it is almost impossible for the sky to look fully day or night when there is a tiny region where it is actually 1, or 0. The part below sets the values for the shader.

    skyBoxMat.SetFloat("\_Blend", materialBlendValue);

An important note that the above code targets the material itself. There is no reference to the actual skybox object. If you go into the shader, you will see something called "\_Blend". That is the slider property. Materials in Unity have shader functionality that you can use to affect how things look. This is one way to manipulate those properties.
