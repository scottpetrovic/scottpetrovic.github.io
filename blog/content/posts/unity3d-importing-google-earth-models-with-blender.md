---
title: "Unity3d: Importing Google 3D/Earth models with Blender"
date: "2010-01-31"
categories: 
  - "computer"
  - "game"
  - "unity3d"
---

I have been working on my game and was at the stage where I needed some models. I was searching around and found out Google has a large library of FREE models via their Google 3D Warehouse branch.This article will go through how I got it to work along with hints and trouble spots. I went through a lot of articles and plugin pages, but they ended up only being partly helpful. Hopefully this updated article will help explain the process better.

## Software Requirements

1. [Blender 2.49b](http://www.blender.org/download/get-blender/)
2. [Google Sketchup 7](http://sketchup.google.com/)
3. Unity Indie or higher
4. [Python 2.6.x](http://www.python.org/download/) (for Blender)

Configuring Python 2.6.x for me gave me a little problem. I had Blender 2.48a installed previously, but the COLLADA importer in Blender didn't work with Google Sketchup 7, so upgrading Blender  solved the problem. If you have problems getting Blender to recognize Python, you can try to read about [environment variables](http://www.blender.org/forum/viewtopic.php?t=11938) and getting them set up.  That helped me.

## Getting the model and exporting for Blender

Start up Google Sketchup and to **File > 3d Warehouse > Get Models**.

This will open up a new window where you can browse the [3d Google database](http://sketchup.google.com/3dwarehouse/) for all kinds of models. They have buildings, objects, and other stuff. I haven't spent that long looking at everything, but it is a pretty impressive amount of models.

![02](./images/02.jpg "02")

Peruse around and find a file that you want to import. I found a car model that I would like to use for this article. It will ask you if you want to import it directly into Sketchup.

I opted to download the file and use it as is, in case anything messes up during the export and I have to go back. Once you open it up, you might notice that your model might have a pretty high poly count. That is ok, we can take care of that in Blender later.

Before we can export anything, we need to "prep" the model to export. The main concern is something that Google Sketchup uses called "components". These are groups of model data that are repeated like instances in Unity3d. Because of the way Google uses them, it will mess up Blender when it imports.

The best way to delete them all is going into _Window > Outliner_ where it will show you different "components" that Google has. If you don't have any components in outline view - great! That means you can skip this part.  If you do, select all of the parts and right click.  One of the options will be "explode". That button will remove the components and take out any crazy stuff it does. Some components have multiple nesting of components, so you might have to do it multiple times to get them all off. You can also check to see if you have any components left by going to the model and selecting everything with _Ctrl + A_. If anything is in a box, that means it needs to be exploded more.

## Exporting to Blender

![03](./images/03.gif "03")

I don't know if you have to do this, butI have better luck when I have done this step.  Go to _File > Save As_ and for save as type do "Sketchup version 5". It is OK to save over the existing file if you want. Next click _File > Export > 3d Model_. Change the export type to COLLADA (dae) in the settings. To the right of that drop down list, there will be an options panel. Click it and make sure it looks like the above  left image.

After it is done exporting, start Blender and delete all the objects on stage by pressing _a_ then _Ctrl + x_ to delete everything in the scene.

Go to _File > Import > Collada 1.4._ There are two version of COLLADA that you can import, so make sure to select the right one. where you will get a dialog like the one similar to the image to the above right. Select the file and hit "Import and Close".  If you haven't worked with Blender much and Unity, here are a couple quick points to keep in mind:

- Don't scale object in object mode. Click the object, switch to edit mode, select everything, and scale it that way. Unity3d doesn't pick up scaling done at the object level.
- if the model is really big and you have a hard time seeing it, increase the draw distance by going to the 3d view toolbar and click View > View Properties. Change the " Clip End" property up until you are happy. Architectural buildings have this problem pretty bad.

## Unity prep work in Blender

You have the model in Blender, but it might be way too big or it has too high of a poly count. Scaling it in edit mode takes care of the scaling problem. If the object has a lot of different parts, make sure to join everything ( select everything and press _Ctrl + j_) before scaling to keep it all together.

If the model has a really high poly count, you can use the Modifer [Decimate](http://wiki.blender.org/index.php/Doc:Manual/Modifiers/Mesh/Decimate) to decrease the count. The car model I used had 200,000+ polygons, and I decimated it to 20,000. That is still too high for Unity objects, but I just wanted to reduce it enough so Unity could import it.

Make sure to save the blend file (Unity natively can import blend files) and drag the model along with the textures folder if needed. The texture folder was spit out when you exported the object from Google Sketchup. You can use those to link up textures if need be.

![06](./images/06.jpg "06")

I didn't spend the time in Blender to seperate the objects for texturing, so it all has to be red for now.

From there, you can just go between Blender, and photoshop and tweak and model data or textures. I hope this was helpful and you can use some Google models in your projects!

## Next

I was starting to write a post about game architecture and how to organize game components, and I got side-tracked by the 3d Google Warehouse. I am a still a novice at Unity and game development, so game architecture is something I have been struggling with. I have the game "completed", so I am going to explain the flow and organization of scripts and components along with a diagram and source code.
