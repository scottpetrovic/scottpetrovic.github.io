---
title: "Unity 2.5 (Blender lessons): Part Two"
date: "2009-07-11"
featured_image: "./images/maka_blender_model.jpg"
categories: 
  - "life"
---

![maka_blender_model](./images/maka_blender_model.jpg "maka_blender_model")

I have been fervently working with Unity 2.5 for Windows, or more precisely Blender 2.48b. Eventually you can't use all of the preset models and animations that Unity gives you, so I wanted to make my own and import it into Unity . This is no simple feat if you haven't done it before. My 3d package of choice right now is [Blender](http://www.blender.org/) since it is free and I have a [book](http://www.amazon.com/Essential-Blender-Guide-Creation-Source/dp/1593271662/ref=sr_1_3?ie=UTF8&s=books&qid=1247315838&sr=8-3) on it. I will go back and do some fine tuning with detail later, but I think I have the technical parts down good enough to try and import the model into Unity.

I ran into a lot of challenges just getting to the point I have with modeling, rigging, and skinning.

## Some important tips that I have learned thus far (using Blender 2.48b)

- When you bring models into Unity, it has to triangulate all of the faces if they are quads, so be prepared to have an increased polycount when you import it.
- Unity natively supports Blender files, so you don't have to export anything in different formats like FBX.
- When using armatures, don't use envelopes to dictate how meshes are skinned. It will not register in Unity and your model will be missing or messed up. ( Use vertex groups/painting).
- Unity will only import one action. When animating, put all of your animations into one action and let Unity know when frames are which animation
- if you start modeling from a box, do all of your stetching or scaling in "edit mode", NOT "object mode"
- And most importantly, make sure you do your modeling/rigging/skinning before you install the Unity trial, or you will run out of the 30 days way too fast (like I did).

I was struggling with importing with the right vertex groups when Unity expired, so I am at a stand still until I get a copy. I will have to put some money into the "Indie" version and really spend a lot more time with this to import properly and get it functional. There are a lot of good articles and forum posts about using the two packages together. Here is one good overview about the [Unity and Blender pipeline](http://forum.unity3d.com/viewtopic.php?p=160212). When I get everything working, I will put all my working files here in case anyone would be interested in learning from it.

Do you think that this technology could really influence the ways websites are built? I am seeing this technology to be like Flash, but being able to use 3d much more efficiently. I could easily see this spill into e-commerce sites where they show products much better as well as creating more engaging and fun websites to interact with.
