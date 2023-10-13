---
title: "UML, Google Code, Game Progress"
date: "2010-09-26"
categories: 
  - "computer"
  - "game"
  - "unity3d"
---

I have been starting to work on the game and it is getting to the point where I need to really start to outline the class structure for all of the code. I downloaded a free copy of [OpenModelSphere](http://www.modelsphere.org/) where I could do some UML work. I have never used the program before, but it only took about a half an hour to figure out how to do most of the things I need. Here is a preliminary diagram of the game structure. Click on it to see it at its full size.

![UML Statechart Diagram](/images/UML-Statechart-Diagram-227x300.jpg "UML Statechart Diagram")

I am debating on whether I should integrate the sound calls from inside other scripts, or have another section in the diagram which would handle everything. I don't have all of this coded yet, but it should be a good start to how I want to break communication throughout the system. I am sure it will get more complicated and change when I start working on the areas more.

## Project on Google Code

This game is going to be a lot bigger than the last one that I made, so I want to be sure that my server doesn't crash for any reason. I set up a Google Code project and will update the files as I am working on it. I have never used SVN that much, so I am going to try and do my coding changes and commits to the google code repository. A few interesting things I found out about Google code:

- you can track your visitors if you have Google Analytics (cool!)
- You have up to 2 GBs of space.
- You can't rename your project once you create it

Here is a link to the [project](http://code.google.com/p/unity3d-witchtraining/).

Anytime I make changes or add different things, I will probably just reference the link to make it easier.

## Next

I have been working on the game itself. It is pretty raw and scattered everywhere, so I might work on it some more before I release anything yet. I will play around with SVN, so maybe it will be sooner than later depending on how that works. So far, I mostly have a placeholder model in there walking, running, jumping, and flying! I put in a camera transition when you change from ground controls to flying. That took me a little time to figure out.

He is also shooting out a bomb when you press the "throw bomb" button. The distance and power of it changes depending on how long you hold down the button. I think that is cool. :) Each level has a timer, so I put on a timer for the GUI that slowly counts up. That will be used as part of the scoring system.

My city/world environment needs some serious attention. I will probably spend a while building up the detail as well as adding the character to see everything together. I will have a close eye on the  FPS to make sure it doesn't plummet at any time.
