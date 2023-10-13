---
title: "Quaternions & Unity3d Book Released!"
date: "2009-10-08"
featured_image: "/images/1223384_happy_girafes.jpg"
categories: 
  - "computer"
  - "game"
  - "life"
  - "unity3d"
---

![1223384_happy_girafes](/images/1223384_happy_girafes.jpg "1223384_happy_girafes")

I have spent the past month learning and becoming frustrated with the concept of Quaternions. I thought it would be cooler to have some type of planetary gravity for my level where my character could fly to his heart's content around a sphere.

**A LOT** harder than I thought!

Planetary gravity - fairly simple with some help.  [forum post](http://forum.unity3d.com/viewtopic.php?p=77324&sid=f0e7b04be39a3170cec62a0ea4177481) [unity wiki script](http://www.unifycommunity.com/wiki/index.php?title=Gravity)

Once gravity is set up, objects will fall toward the center of the world. This is good for some things like balls and cubes, but characters don't know which way their feet should be pointing when their feet run around a faceted sphere. The only thing to fix this is changing the rotation.

## Research on Quaternions

I found a great article helping to [understading quaternions](http://www.unitytutorials.com/document/280/understanding-quaternions-in-unity-3d) and its uses with Unity 3D.

I don't really like reading a lot about history, but reading [wikipedia's article on Quaternions](http://en.wikipedia.org/wiki/Quaternion) explains the different dimensions of Quaternions and why they are needed.

I also set up a scene in Unity and logged the values (i.e. Debug.Log(transform.rotation) ) of the quaternion vectors. Unity uses the quaternion class for rotations, so just move your character around and study the values as they shift. Use my files from an old [sample](/posts/updateunity3d-new-character-and-animations-with-full-source/) if  you don't have anything.

Honestly, I still don't really understand it that well. It will probably take some more digestion time for it to really sink in. I will keep at it though.

I am getting a little burned out with rotations right now, so I order Will Goldstone's new book: [Unity Game Development Essentials](http://www.packtpub.com/unity-game-development-essentials/book). It is over 300 pages and I heard some pretty good reviews on it.

I will give a review on it when I read about half of it. I can't wait to get my hands on it.

How have you figured out how quaternions work? Is there a good book or other way to study its behavior? I would love any feedback
