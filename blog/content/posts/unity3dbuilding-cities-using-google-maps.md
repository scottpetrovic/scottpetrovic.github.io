---
title: "Unity3d:Building Cities using Google Maps"
date: "2010-09-17"
categories: 
  - "art"
  - "computer"
  - "game"
  - "unity3d"
---

I was stumped for a while trying to figure out the best way to make sure everything was in proportion and to scale. Creating models individually seemed very scary since I had to pay a lot more attention to units of measurement every time I created anything. A better way I am finding is to create the whole city in a 3d scene and export the whole thing out. What I am doing for as a base right now is taking a snapshot of a Google maps view. I just import the image as a texture and use it as a reference to model on top of.

![](./images/building-cities.jpg "building-cities")

To accomplish this, it is just a matter of going into top view where you can create all of the geometry based off the topography. I didn't model the roads for now, they are just part of the ground terrain. It is hard to see it in this picture, but the city sidewalks are part of the city block. This does a good job zoning the city and seeing where things go. I worked pretty small in Blender, so I just scaled it in Unity3d at 60 times. It got really big and everything seems good and in proportion.

With simple geometry like this, the combine children script works really great for reducing the draw calls (improving the frame rate). I also read that it works best if you share the same texture with everything you are combining. If you have different textures on different models, the combine children can't combine the different models. The draw calls went from about 60 to 9! I can now slowly start making the level bigger and more detailed until my frame rate drops enough. I won't forget about adding characters, gameplay, and collisions though first.

To make the buildings fast, you can just make one. Do a lot of duplicating and adjusting vertices. Make sure to place the buildings inside the edge of each city block. I adjusted the height of the individual buildings after I got the basic shape in place. You want a  little room for the sidewalk when placing the buildings. Google Maps doesn't account for this.  Here is the beginning of the city that I created in Unity3D. No collisions, so you can walk through the buildings. Sorry about the bad controls. I just threw some default scripts on a camera.

[Unity3D Walk through file](/unity3d/buildings-walkthrough.unity3d)


## Controls
- **Mouse: Look Around**
- **Arrow Keys: Move around**
- **Spacebar: Jump**

## Next

I have been working on the gameplay of running and flying around with the character. I also created a little wrapper script for the input to smooth out the input axis controls. I always thought it was annoying how direction keys are always 0 or 1. It makes smooth motion always a hassle with a keyboard. Once I get the flying and throwing bombs part pretty much figured out, I will probably start modeling and animating the character.

While I am on the subject of modeling, I have gone back to Blender 2.48a for now. The new version of Blender is good with certain things like the model data, but Unity doesn't like how it exports animations. Animations get all messed up when I export to FBX. Maybe it is something I am doing wrong.
