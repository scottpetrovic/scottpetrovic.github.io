---
title: "Unity3D: \"Kill5\" Game Architecture w/Source"
date: "2010-03-04"
categories: 
  - "computer"
  - "game"
  - "unity3d"
---

[Kill 5 Unity3D File](/unity3d/kill5.unity3d)


## Controls:

- Move - W, A, S, D (or arrow keys) 
- Run - left shift 
- jump - spacebar 
- attack - right shift**

[Kill 5 Source code](/unity3d/GameArchitectureKill5.rar)

I tried to keep the game simplistic so explaining the structure would be easier. Before I talk too much, take note that I am still early in my game programming life, so how I organized it is the way I do it. There might be better ways out there, but I am not seasoned enough to really understand different approaches to it. I am a beginner - and this is how a beginner like me tries to tackle learning about this.

## First step : Organization

How will it be best to separate the areas of the game? I like to think of it as objects and "sub objects". In programming, all classes are considered objects, but if you have a lot of functionality for each part, you will have to be breaking it apart even further. I thought it would be good to start off with one player, one enemy (which re-spawns), GUIs, and a game manager.

I made these into folders and wanted to try to keep each area contained. The game itself isn't very complicated right now, but if I want to expand and really add more complexity and length to the game, keeping all scripts and objects in one folder is just going to be a mess.

You can see a basic object structure where I try to keep everything separated. If I want to change something related to the enemy, I can go into that folder and know all of the main enemy scripts will be contained in there. I also know there will be scripts and features that I have not created yet, so it will be easier to know what needs to be updated and referenced if I can keep them all together.

![Folder structure in my solution explorer (VS2008)](/images/folder-structure.gif "folder-structure")

When trying to build a game for the first time, there will be areas of the game that you really didn't think about. Things like managing cameras, game optimization scripts, or shaders will pop up. You have to make a decision if it is complicated enough to need its own area or folder. One of the important parts to learning about architecture is learning by doing. Sure, you will mess up and have to re-factor or move things, but that is part of learning how to manage things.

To make something like an enemy respawn, it is important to note that you need to make a prefab that has EVERYTHING that an enemy needs to function. That is one reason why I think it is important to keep everything contained about the enemy inside the enemy. If you need another one, you can just instantiate the prefab and it will know what to do. No extra linking or external communication needed for it to work or function.

After looking through different tutorials, they all have different ways to do things, different languages they want to use, and special scripts that others don't have. Different programmers seem to all have their own style for organization. Some of it might be good, and other parts might be bad habits. Keep that in mind as you read and analyze other game organizations and do what makes the most sense and is the best for you.  Since I am still early in my development, I am always paranoid about how I do things in this regard.

## Object Communication (public and private)

I like to think of object communication in two different aspects - internal and external. For the enemy to function properly, it needs AI, animation logic, health information, attacking logic, and so on. All of these things are different, yet are part of the enemy. Like the human body, we have different organs and muscles that do different things. We can still exist without certain parts, but our functionality is hindered in some way.

Since scripts are really "components" in Unity, putting all the enemy functioning scripts inside of an Enemy Game Object seems to make logical sense. Anything it needs to say to each other is just a component away.

For this game, I made the "Info" script the manager of the character. It stores all of its data like health and so on. It is good to have a hub in a bunch of internal objects - so if something external needs to look at it, it only needs to really look at one area to see what it needs to know. External objects only need to know about things it can see like if the object is alive, if it is moving, or maybe if it is about to attack. All of the internal workings of an object should be a private matter.

When you communicate with external objects, things are usually received and sent by public methods that any class can get to. This is sometimes known as "exposing" variables in a class.

## Game Manager

When I was building the gameplay with my character running around and the enemy attacking, there was no place that manages if the player is dead, if the game is over, or how many kills I got. I created a game manager that would oversee basic game functions that determine where the progression of things pan out.  If you go into the "Game Manager" script in the files, it contains a "game loop" inside the update function. This mostly updates the state of the game to see if an enemy is dead, you are dead, or if it is game over. The game loop will constantly be going until the game is over.

I am too lazy to change it at this point, but it probably would have been better to remove the enemy instantiation from this script and move it to an external script. It works like it is, yes, but I feel it muddies up the role of what a game manager should do. Having a script do things that the script name doesn't mention is not good programming practice. If someone saw this for the first time and was going through it, they probably would look at all of the enemy scripts to see where it is instantiated. After looking through the scripts and not finding anything, they would have to be brave and sift through all of the other scripts. They would find it eventually after much looking and swearing. Not good.

## Miscellaneous things learned

Using the GameObject.Find() or other variations take a lot of CPU cycles if it is in the Update() function. If at all possible, declare the variable at the top of the class and assign it only once in the Start() or Awake() functions. If you can make it public and assign a model via the inspector, it is better as well.

If your accessing internal components on the same game object, use GetComponent<>() . External objects that have no relationship with the existing script and components is best to use GameObject.Find().  Again, try to set the variables only once if possible in the Start() of Awake() functions.

Spend a lot of time planning and doing pseudo-code before trying to build and implement things. Diving in and starting to program will usually lead to confusion and frustration if you are trying to do anything complex.

While you are coding and building the game, always be thinking about the class's role and what it should be doing. If it starts to be too big and broad, think about separating it out to a different class to make it more readable.

You can use more than the Unity forum to learn how to do game programming. Many programming concepts and principles are discussed in more depth with other sources. Any website with object oriented design, design patterns, and game architecture can be useful.

Test often when you are building. Do some code and test it. It is easier to pinpoint problems when you test in short intervals.

Visual Studio C# 2008 Express Edition saved my life when it came to fixing problems in and outside classes. The intellisense feature really helps when you are trying to learn the API and calling outside variables or methods.

One thing I should have done from an optimization standpoint is use a lightmap for my main light. The only time there should be lights in the scene is if they are dynamic or somehow procedurally generated or manipulated. This game is pretty small, so it isn't that big of a deal.

## Next

I am not sure what I am going to do next. I started looking into SmartFoxServer Pro and doing things with networking, but I don't think I am knowledgeable enough in the basics to start doing that yet. Doing some programmatic camera movement right now is sparking my interest, so maybe I will go that route. Unity just released a [third person shooter demo](http://unity3d.com/gallery/live-demos/index.html#3rd-person-shooter), and looking at the code squashed any intelligence I thought I had with programming.  Whatever I do, I will be sure to share my learning along with models and code I create.
