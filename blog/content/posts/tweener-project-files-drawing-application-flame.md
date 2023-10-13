---
title: "Tweener project files & drawing application \"Flame\""
date: "2010-03-18"
featured_image: "./images/flame_sketch.jpg"
categories: 
  - "art"
  - "game"
  - "illustration"
  - "interaction-design"
  - "unity3d"
tags: 
  - "3d-web-player"
  - "design"
  - "illustration"
  - "unity3d"
---

I was thinking it wouldn't be that hard to animate things in Unity3d, but the more I got into it, there are no intuitive ways to do it. Many of ways shown end up taking the current game time and using that for the basis of time. Doing an animations in flash was always easier, Just tell an object to do something over a period of time and -PUFF- it works. Maybe the folks at Unity could create a more intuitive way for animating in the future releases.

The Tweener scripts on the Unity forum was done a little while ago, so I had to tweak the scripts for them to work properly. There are a couple of warnings that Unity gives off since a few scripts use inheritance, but it still works since it is built with C#. Trying to use composition to change it was getting messy, so I decided to live with the warnings. I broke out the scripts into multiple classes so it is easier to digest what is going on. One thing I learned about OOP design is that the smaller your classes are, the more portable and reusable they will be.

I don't need to provide a demo of something moving, but you can see how I set up the Tweener classes to make it work. If you want to use it in a project, you can just copy the whole tweener folder  over. You don't need to attach any scripts to any game objects. Just call the UnityTween class like in the scene file below.

    using UnityEngine;
    using System.Collections;
    
    public class CameraMove : MonoBehaviour
    {

    public GameObject mainCam;
    private Transform targetTransform;
    private Vector3 targetRotate;

    //need to instantiate TweenCall
    //it is static so you only need to create one variable
    private TweenCall TweenCall;

    void Awake()
    {

        //current transformation
        mainCam.transform.position = new Vector3(0.0f, 3.0f, -3.0f);
        mainCam.transform.rotation = Quaternion.LookRotation( new Vector3(-19.0f, 0.0f,0.0f));

        //target tramsformation
        targetRotate = new Vector3(17.7f,181.0f,0.0f );

        targetTransform = new GameObject().transform;
        targetTransform.position = new Vector3(0.05f, 1.4f, 0.6f);

        //actual calling changing position and rotation. Can also change alpha
        TweenCall.Tween(mainCam, "position", targetTransform.position, 2.0f, 0.0f, Ease.EaseOutElastic);
        TweenCall.Tween(mainCam, "rotation", targetRotate, 2.0f, 0.0f, Ease.EaseOutElastic);

    }

    } //end class

This is the main script file that does everything. You assign the main camera via the inspector. The code defines points to transition and does the transition when the script starts. You can see all of the source below how to implement it.

## Flame Drawing

![flame_sketch](./images/flame_sketch.jpg "flame_sketch")

Coolest program I have seen in a while for drawing smoke/flame things. Not Unity related, but awesome none the less. I think I will try to integrate this with some paintings I try to do in the future. It is built with a programming language called _processing_ that is built on Java.  It takes a while to get use to what looks good. Loose and fast seems to give better results than tight and slow strokes. [Make something magical](http://www.escapemotions.com/experiments/flame/index.html#top) with it. (needs Java installed to work)

## Currently Learning: U3dObject

U3dObject is a framework that makes it easier to communicate between Flash and Unity3D. There are many classes and a debugging tool in the framework for testing and implementing. There were a few posts in the Unity forum about this being trouble, but the company that is providing it has some really great things that they have produced with it - so I have faith in it. Check out the [Aquiris portfolio](http://www.aquiris.com.br/pt/games/). One of the creators/representatives also has a good [presentation](http://unity3d.com/support/resources/unite-presentations/integrating-flash-and-unity-content) you can download from the Unity site on Flash and Unity integration. You can find the framework hosted on [Google code](http://code.google.com/p/aquiris-u3dobject/). A big reason for this integration framework is how well you can create GUIs in Flash. Creating GUIs in Flash and sending data to Unity is faster and easier than creating complex graphics and animation with Unity GUIs.

I watched the video on the Unity site and thought that the technology they were using was a pretty good idea. There is almost no documentation for the thing, so I thought I would spend some time with it. I downloaded the source and went through it for a day. I want to create a simple example with it using basic communication. One problem that I ran into quick was that the src had a few problems. One, it is missing some import files from the as3corelib, which means the Interface file won't work. Another complied movie clip file is missing, so that doesn't work. I am getting it to work though through some google searching and tinkering. My sample will be a little more stripped down with some good documentation. I will go over the structure and the two interfaces that are needed for communication. More to come later.

Has anyone tried the Flame application. Wow! Super cool huh?
