---
title: "Witch Training: Gameplay and Character"
date: "2010-10-24"
categories: 
  - "game"
  - "unity3d"
---

I have been spending some time reading the new Unity book, but managed to squeeze some time in with my game. I have been spending some time making revisions, adding content, and learning how to use SVN better. I am still not sure exactly what I REALLY need in my project when I am doing the version control, so I know I have more files included than I actually need.

Below is my progress so far. The project is on google code, so you can download it if you really want to get an early glimpse of it.

Source code - http://code.google.com/p/unity3d-witchtraining/downloads/list

[Unity3d binary file](/unity3d/witchtraining-october2010.unity3d)


## Controls

- **walk/move when flying** - arrow keys 
- **jump** \- spacebar 
- **flight mode** - hit space bar again when in air 
- **elevate**(while flying) - w 
- **descend**(while flying) - s 
- **throw bomb** - f (you can hold it down to give it more power. use while on the ground or flying!) 
- **run/fly faster modifer** - left shift

The controls might be a little crazy right now. I need to do some more tweaking and talk to some people before I figure out what the best control scheme is for this.

Some things that I am doing with this.

## City

I still need to do a lot of work on the city, but am at a point where I think the game mechanics and character need the most work. So far, I modeled a little city, with a vast desert surrounding it. For the sake of speed and testing, I made a script that adds box colliders to all of the buildings and city blocks. It is only about 75% accurate since a lot of the buildings aren't perfect rectangles, but it is close enough for now. The buildings are textureless, which I am debating about in terms of what I want to do.

## Character

I spent a while modeling and animating a new character. I am still working on the game mechanics, but it is going in the right direction. I have also been reading about animating joints like elbows and knees. They always deform crazy when I bend them, so this model does a better job with that. I also added in contraints to all of the bones in Blender, so it is much easier to animate with different poses.  I am struggling to make his hair into spring joints, so all of the bones in his hair don't do anything right now. I have a base texture on him, but need to go back and add a lot of detail and polish. Ahhh...so much work left.

## Next

I want to work more on the movement. The character doesn't transition very well when changing speeds, so that needs to be updated. The bomb needs a better model, trail renderer, and explosion. Once I get the character tweaked to my liking, I will spend time on the GUIs and maybe make a logo. The first level of the game is where my next  challenge will be. I still need to add a map, better timer, and scoring system.
