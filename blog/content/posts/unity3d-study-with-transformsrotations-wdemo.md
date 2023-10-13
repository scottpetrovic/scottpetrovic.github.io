---
title: "Unity3d: Study with transforms,rotations w/demo"
date: "2009-11-09"
featured_image: "/images/Unity3d_OSD1.gif"
categories: 
  - "computer"
  - "game"
  - "unity3d"
---

Trying to understand what is going on when things are moving, rotating, and scaling seems like it would be easy - but when there are local and global spaces, Euler angles and Quaternions, different forms of interpolation, conceptually it starts to get confusing for me.

I thought the best way to learn more about how these things interact is having a little application that will show properties dynamically changing as objects move and rotate.

![Unity3d_movement_demo_](/images/Unity3d_OSD1.gif "Unity3d_movement_demo_")

I am monitoring two different objects, Box and BoxChild(very creative, I know). Box child is nested inside of the bigger box, so properties work a little differently with that.

Click on the picture to the left and it will open up another window withthe unity file.

One of the first things that is noticable  is that when you click the "lerp" animation button, the individual position elements (position.x, position,y, position.z) have a  lot of numbers. The position method itself only shows one floating point, rounding numbers up.

Another important thing to see is how the local position changes for the BoxChild after it is detached and an animation is played. Local position is based off the position of the parent. If it has no parent, as is the case with Box, it gets the normal transform.position.

## Rotation

Rotations in Unity are based off the Quaternion when in the transform area.  The  fields for it are (x, y, z, w).  The first 3 dimensions are tied to their axis, but the 4th dimension is an identity dimension, which helps with doing math with rotations. The property below, Euler angles, is what people are more familiar with.

Getting back to the Quaternions, notice how when you rotate the object, all of the values go between -1 and +1. These are normalized values. Normalized vectors are used for finding directions and magnitude, as opposed to just a point - which what position monitors.

Since Box is just rotating around the y-axis, you only see that y value change with the first 3 components. If you follow the box rotating, you will see that it actually takes 720 degrees to return back to its starting position. I read a good wikipedia article on [visually explaining it](http://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). Realizing quaternions  takes two revolutions to go back to its starting point is a good thing to remember when dealing with it.

## Set up files and source

Here are the [source files](/unity3d/vectorClass.rar) for the demo. I have some additional comments in the code on how things are put together or work. A couple notes is that I tried to make the buttons decoupled from the actual button functions. It probably isn't the most perfect code, but it works, so mehhh..

Has anybody seen other examples that help learn the API with examples and working files such as this? I really haven't seen much out there with visual feedback on what is going on. Are there many other blogs out there that are doing the types of thing? I see a lot of "my first Unity project" post where they post some project, but there is little explanation, code or description.
