---
title: "Unity3d: Approach to learning game design featuring \"Kill5\" playable game"
date: "2010-02-22"
featured_image: "./images/unity3d_cooperation.jpg"
categories: 
  - "game"
  - "unity3d"
---

![unity3d_cooperation](./images/unity3d_cooperation.jpg "unity3d_cooperation")

With games being so complex, it is intimidating to know where to start when it comes to putting together a game. Even after reading game architecture resources, it still feels like you don't know the best way to delve in and make something cool. Since I have started learning Unity, I am forming my own view on learning the whole process if you are new to the whole game development thing. I am still a beginner, so if something in this post isn't perfectly right, don't get mad at me - let me know so I can learn!

After reading the post, it might appear discouraging at how much you have to know to even get started, but the payoff and gratification of your growth and knowledge makes it worth the effort.

## Step 1: In the beginning

Download Unity3d and figure out if you want to code in Unityscript or C#. If you don't know, I would probably just go with UnityScript for now. Learn about different components and the API with the game engine. You can't learn how to create a game if you don't know the individual components. Learn game concepts like collision detection, animating models, events, etc. This took me about 4-5 months worth of free time to get the basics down. If you don't have a job or have the luxury of a summer vacation, you can probably do it faster. If you want to do 3d modeling like I do, it would probably be best to learn Blender. It is free and works pretty well with Unity.

Resources that helped me:

- [Unity Essentials book](http://www.packtpub.com/unity-game-development-essentials/book)
- [Unity3d turorials](http://unity3d.com/support/resources/tutorials/)
- [scripting reference](http://unity3d.com/support/documentation/ScriptReference/index.html)
- [Forum](http://forum.unity3d.com/)
- [Infinte Unity3d reddit](http://www.reddit.com/r/Unity3D/)

These sources are excellent at understanding individual game parts. After completing them, though, you will still be confused as to how to build a game. The tutorials build games, but there are other concepts they don't teach you when they go through the tutorials. Namely - game architecture

## Step 2: The Gameplan

Take that knowledge and **visualize** what you want your game to do . Flesh out how the game will progress from start to finish in your mind. Include menus, levels, key points in the game, boss fights, GUI screens, and logic. Act like you are playing the finished game. Don't worry about HOW to do everything yet - just concern yourself with the whole experience. Spend a long time playing your game in your head. The longer you play it, the better you can make it!

After you visualize the game - write down all of the different parts and things you have in your mind. You really need a game plan before you start coding and doing anything else.

Since the heart of the game is the actual gameplay, I would start on that first. Things like menus, cutscenes, health & damage, and stories are important, but they really just help structure gameplay.  If it is an action game, make a character and figure out how to get him to run around and attack. If it is a driving game, build a car with physics and nice controls.

Use code that you have seen in other tutorials or forums to piece together how to make things work. Think about WHY they work and how you can customize them to suit your game.  At this point, you will start to realize that you need many scripts and game objects to put everything together - even with the simplest of things.

## Step 3: Gluing it together with OOP

Learn more about Object Oriented programming(OOP) principles and design patterns. This is a very important skill to keep your game code seperated while keeping everything communicating in the best fashion. Without this knowledge, you will have a mess of code and scripts and things will get overwhelming very fast. Before doing any more coding, learn these concepts and read these articles. Learn as much as you can about the object oriented principles. There are all kinds of philosophies with OOP design,  so at least have a good grasp on the basics.

[Organizing Object References](http://www.unityessentials.com/blog/articles/references.html)

[Object-Oriented Principles](http://www.codeproject.com/KB/architecture/OOP_Concepts_and_manymore.aspx)

Object-oriented design is a very conceptual subject, so it will take a little while to understand it. You will get frustrated, feel stupid, and lose hope sometimes. With time and practice these concepts will start to make sense and give you confidence in managing larger amounts of code. I am still early in my learning in this.

Look how other examples like the Unity3D FPS tutorial and 3rd person tutorials accomplish this. See how they separate  different areas and think why that it was separated. Is this the best way to do it? Can you improve on it? Really start to think about why code is where it is.

## A little later

Coming up soon is a little game architecture tutorial/explanation of my logic for a small game I created. The point of the game is to kill 5 enemies before you get killed (how original). It has a start menu, GUI screens for health and enemies remaining, along with a gameover screen when you win or lose.  My next post will explain the classes, file organization, communication between objects, and other ways to glue everything together. I will try to include my whole process from start to finish. It might turn into 2 posts depending on how it goes. Here it is so far. I will probably do a little tweaking and clean up the code before I give out the source and all of the files.

[Unity3D file](/unity3d/kill5.unity3d)

**move - W, A, S, D (or arrow keys) run - left shift jump - spacebar attack - right shift**

tips: get behind him if you can to attack, sometimes he won't face you if you do it right. get away when you kill him. He has a "last stand", so he attacks while he is falling and dying sometimes.

Good luck! - FYI, Whether you win or lose, it is the same Game Over screen.
