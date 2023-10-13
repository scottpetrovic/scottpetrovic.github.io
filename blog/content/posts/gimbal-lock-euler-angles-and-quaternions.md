---
title: "Gimbal Lock, Euler Angles, and Quaternions"
date: "2010-05-31"
categories: 
  - "computer"
  - "game"
---

![Mr. Gimbal Lock](./images/mrGimbalLock.gif "Mr. Gimbal Lock")

I have been reading a 3d Math book and have been trying to learn some 3d concepts and how they operate. It talks a lot about the pros and cons of using different models of angular displacement such as Euler angles and Quaternions.

This topic isn't very visually exciting, so I created my rendition of "Mr. Gimbal Lock" to the left. You now have a visual reference for the upcoming sinister snake-like creature it is! :) Keep reading to find out.

While Euler angles are more intuitive using degrees, they present a few different issues. Firstly, there are instances when the angles are different, but the object looks identical. For example 360 degrees is the same as 0 degrees. This issue is called _aliasing_. By seeing the final orientation, it is difficult to tell what exactly happened with the rotation.

Another interesting scenario is how rotations affect each other. For my rotations on the y axis, any change along the x or z axis will affect the other axises automatically. This is concept known as _gimbal lock_. Maybe an example will help!

Looking at the example, it looks as though they been transformed the exact same amount. Taking a peek at the code shows that they have different rotations. Code is using C#.

[all of the project source files](/unity3d/gimballock.rar)


    using UnityEngine;
    using System.Collections;

    public class GimbalLock : MonoBehaviour {

    private Quaternion newDirection;

    void Start () {

        newDirection = new Quaternion();
        newDirection  = Quaternion.Euler(-90, 45, 0);

    }

    void Update () {

        transform.rotation = Quaternion.Lerp(transform.rotation, newDirection, Time.deltaTime);

        }

    }

This is one of two scripts that are used for rotating the object. The other script is identical except for a different rotation.

This one uses: **newDirection = Quaternion.Euler(-90, 45, 0);**

the other uses: **newDirection = Quaternion.Euler(-90, 0, 45);**

Why do they do the exact same thing? Euler angles and gimbal lock are the root of this phenomenon. He does look pretty sinister in the picture at the beginning!

Because Euler angles are imprecise when it comes to rotations, Unity opts to store rotation information for the object using Quaternions instead. Quaternions are pretty complicated to understand, so a good definition is outside of the scope of this post.

One good thing about Quaternions is that they have a better way of handling unique angles. Technically, they do have a slight aliasing problem at values such as (0,0,0, 1) and (0,0,0, -1).

The example blocks look identical because Unity  converts Euler space to Quaternion space at assignment :

    newDirection  = Quaternion.Euler(-90, 45, 0);

_newDirection_ is a Quaternion value, so Unity converts any Euler angles to make sure there are no problems before anything gets rotated. The angles are different in Eulers, but Quaternions "fix" the value so there is only one unique rotation amount for that orientation. That is why they both read the same rotation amount.

## Final Comments

What is the best book/blog/forums to learn about 3d math topics? The 3D Math Primer book is pretty good, but some of the crazy matrix math and quaternion math is a little over my head at the moment.

I don't like hunting around for project files on other sites, so I will try to make sure I have a big button for anything that has acquiring source code.

How is my rendition of Mr. Gimbal Lock?
