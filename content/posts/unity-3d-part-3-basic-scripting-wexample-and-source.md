---
title: "Unity 3D: Part 3 - basic scripting w/example and source"
date: "2009-07-25"
categories: 
  - "computer"
  - "game"
  - "interaction-design"
  - "unity3d"
tags: 
  - "unity3d"
---

I buckled down and bought a copy of Unity3d last week. They recently came out with version 2.5.1 which has significant stability fixes that I was a little worried about before. I can say after working with it for about 30 hours, it hasn't crashed on me even once (Unity 2.5 crashed about once a hour).

The model I creating in the last part had to be scrapped since it had some problems with how I modeled it (scaling in Object Mode is a bad idea). Instead of spending a lot of time modeling again, I created a simple box man model and created a few animations just to get it working right. It imported alright and the animations work fine with it.

I added the default" FPS Walker" script to the model and was disappointed with the results. It moves, but it can't rotate with the movement. The animations aren't linked to the movement either, so nothing was getting animated - just my box man hovering along the ground.

### Where to find scripting references

I went through the [scripting tutorial](http://unity3d.com/support/documentation/Manual/Tutorials.html) they had, but it didn't really get into much depth with the things I wanted to do with the animation - it is a good read though for a newb like me.

there are no books on Unity that I know of, so all I looked at the [tutorials](http://unity3d.com/support/resources/tutorials/), [scripting overview](http://unity3d.com/support/documentation/ScriptReference/index.html), and the [reference manual](http://unity3d.com/support/documentation/Components/index.html).

Unity also has an offline appendix of its components as well that you can get to. I usually select a keyword in the script editor and hit F1. It will bring up the component and give a little explanation. Big help sometimes.

Coding is how you get everything to work, so it seemed the best way to progress was the [3d platform tutorial](http://unity3d.com/support/resources/tutorials/3d-platform-game). It says it is a tutorial, but it is really more like a small book. With over 120 pages, I am finding out that there is a lot more than what appears at the surface. I got through about 60% of the tutorial, then I found a great reference on [character animation](http://unity3d.com/support/documentation/Manual/Character-Animation.html) and I changed course (I am more interested in that right now anyway). After reading that, I got excited and went back to the 3D platform tutorial to steal and analyze some code.

### "Borrowing" Unity tutorial code

95% of the code in the 3d Platform tutorial is already done before you start, so the tutorial is a matter of explaining broad concepts and linking game objects with scripts. The default scripts that come with Unity really can't do that much, but using scripts from the Unity tutorials as a base can get you quite a bit farther.

So I just grabbed some of the movement scripts from the tutorial and changed them a little bit (looking at the scripting references constantly). There is a lot of extra scripting for things I didn't implement like wall jumping, but I decided against deleting it for now. Here is a little demo of box man idling, walking, running, and jumping on a plane. I also attached my source unity project along with the .blend file for the model/animation. Hope this helps on the journey to Unity mastery!

Go box man! Go! Don't fall off the edge!

## Controls

- **Move** - W,A,S,D
- **Jump** - spacebar **Run** - left shift

[all of the project source files](/unity3d/player_link.rar)

FYI - [Wordpress plugin to show unity files](http://unity3d.com/support/resources/assets/unity-wordpress-blog-plugin)

## Conclusion 

Now that I am more familiar with the workflow of the entire process, I can focus more on functionality and the "cooler" things.

I want to add some Additive animations so the character can punch and kick while he is running and walking. Maybe some particle trails when he runs. If I get those things figured out fast enough, I will start modeling and animating a higher res character that looks cooler. Does anyone think this is helpful?
