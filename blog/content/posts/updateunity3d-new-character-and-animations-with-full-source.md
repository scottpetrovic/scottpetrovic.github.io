---
title: "Unity3D: new character and animations with full source"
date: "2009-08-24"
featured_image: "./images/unity3d_gameCharacter.jpg"
categories: 
  - "art"
  - "computer"
  - "game"
  - "unity3d"
tags: 
  - "3d-modeling"
  - "character"
  - "design"
  - "unity3d"
---

![unity3d gameCharacter](./images/unity3d_gameCharacter.jpg "unity3d_gameCharacter")

So I have a cool idea for a character, and the ability to do some neat things like have different degrees of running, flamethrowers, etc. - but my box man was making me unmotivated. I decided to design and model a new character (again) and import him in.

I decided it would be best to follow along the same line as my last idea and use a lot of the 3d platform code to get me going. I saw they also re-released their [First Person Shooter tutorial](http://unity3d.com/support/resources/tutorials/fpstutorial), so I need to look at that for a lot of things. I added more animations and have more smooth transitions between different actions with my character. A blob shadow underneath him as well.  I decided to have the camera follow behind the character - scripts courtesy of the 3d platform tutorial of course. I don't need to reinvent the wheel!

I did create a little script for the smoke behind him when running.

## Controls

- **Move** - W,A,S,D
- **Jump** - spacebar
- **Run** - left shift

## Blender lessons learned

When doing the UV unwrap, it saves a lot more space if you can take mirrored parts and overlap them in the texture map.

Animations blend into each other, so you don't have to start animations at any neutral point.

When animating, find a good base for your character to run, jump, and land on. I use the xy plane to keep everything aligned. Use the side view and scrub through animations to check.

Texture paint the UV maps in Blender first, then you can export it and make it look better in photoshop.

I am not sure if Blender can export the mesh edges with your UV map, so I take a screenshot and overlay it over my psd file for fine tuning (see source files for reference)

## Unity Lessons Learned

Always re-import your model in Unity any time you have animation changes.

Unity is extremely precise in things like velocity and position. Make sure to see values in console if anything isn't changing at the right time.

The console is your window for what is going on. Shrink the main unity window down a little and put the console on the side. Unity tends to want to hide the console more than I would like.

Don't add a collider or rigid body component to an object that has a character controller on it.

## Free Source and Models

It would be great if you give me credit if you use my model at all, but this is the internet - so I've said enough. I zipped up the entire project. Since Unity has a custom FBX importer, I have the .blend files in the models folder.  For the texture, you can go into the materials folder where I have a psd file that has the UVunwrap. You can then save it as a targa file over the other one. Unity will update it automagically.

[Unity3d Project files](/unity3d/LearningAboutCharacters.rar)

## Working on next

![flame_broom](./images/flame_broom.jpg "flame_broom")

I saw a cartoon a while ago and thought this concept would be pretty cool. I want my character to have a flamethrower, but it would also serve as a flying device like a witch's broom. You could turn it over and shoot it down where it would propel you up. I will see how hard this is. I might have to implement mouse controls depending on how hard it is to handle.

Super kudos points if anyone can tell what cartoon this is.
