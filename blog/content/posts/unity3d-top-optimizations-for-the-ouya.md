---
title: "Unity3D: Top Optimizations for the Ouya"
date: "2013-09-13"
featured_image: "/images/ouya.jpg"
categories: 
  - "game"
  - "life"
  - "unity3d"
---

[![ouya](/images/ouya.jpg)]

The Ouya needs some love if you want it to purr for you. It doesn't give you any slack when it comes to performance on this little $100 box. I have been developing a game for a few months and recently started testing it for the Ouya. The game is an open world sandbox, so optimization is at the forefront of my mind. I didn't originally think Ouya was going to be able to handle it.  There have been a lot "aha" moments along the way with improving the frames per second. Here is my top optimizations you can do now to get more frames per second.

1. Particle System
2. Projectors
3. Quality Settings
4. Mobile Shaders
5. Screen Resolution
6. Textures
7. Frames per Second

 

##  Particle Systems

Reduce the particle amount and increase the opacity and size to compensate. Particle systems are expensive. Keep a close eye on the amount of particle systems you have going on. They can drag you down really fast if you don't put some thought into them.

## Projectors (ie Blob Shadows)

Don't use them. Period. use a decal or ray cast a plane on a surface instead. I had one blob shadow on my character with the usual set up pointing down at the ground. Removing it automatically increased my FPS by 10. I was blown away by how expensive it was.

Here is a small script I wrote to project a plane at the ground. I saw this idea (and most of this code) in a forum, so I went with it. I modified the example I saw slightly (too lazy to find out where the original link was).

    using UnityEngine;
    using System.Collections;
    
    public class DecalShadow : MonoBehaviour 
    {		
        GameObject player;
        MeshRenderer meshRenderer;
    
        void Start () 
        {
            player = GameObject.FindGameObjectWithTag("Player");		
            meshRenderer = gameObject.GetComponent<MeshRenderer>();		
        }
    
        void Update () 
        {
            RaycastHit hit;
    
            // cast ray down, if it hits within 5 meters, position decal, 
            // otherwise hide it
            if ( Physics.Raycast(player.transform.position, player.transform.up, out hit, 5.0f) )
            {
                meshRenderer.enabled = true;
    
                // bring up slightly to avoid z-fighting	
                transform.position = new Vector3( transform.position.x, hit.point.y+0.01f, transform.position.z);
            }
            else
            {
                meshRenderer.enabled = false;
            }
        }
    }

## Project Settings > Quality

This is also a big one. Unity gives you a warning about it but it is a good idea to make sure the Pixel light count is set to 1. Also turn off anti-aliasing. Don't even bother with trying shadows. Ouya will slap you across the face and tell you "don't even think about it".

## Mobile Shaders

At first I thought something was the matter with the mobile shaders on Ouya, because they always seemed to interpret light differently than regular shaders. I don't think this was a huge performance increase, but it might be doing other good stuffI don't know about.

## Screen Resolution

I have seen this a lot on the forums, so I might as well include it. It does improve your frame rate quite a bit. If you use the other optimizations and you are still hurting, you can pull this out. Reducing the resolution obviously looks worse, so I think it is best to save this for last if you need to change it. Here is [the documentation](http://docs.unity3d.com/Documentation/ScriptReference/Screen.SetResolution.html) on it.

## Use Textures Creatively

The one thing I don't like about a lot of the 3D games on the Ouya right now is that most of them have a huge file size. Even though the games have a free version, having to download hundreds of MB makes it harder for people to download something impulsively ( especially if you are unknown such as a small developer like me). For my buildings, using smaller textures and tiling them can be really effective in certain situations. For a lot of the buildings in my game, I have a 128x128 texture with one window. Scaling and creative UV mapping can do the rest. It isn't AAA quality, but the hard drive space it saves adds to the value.

## Monitoring Frames per Second

I read quite a bit about how Unity calculates its frames per second in game. You have the Stats button by your Game view, as well as [FPS script](http://wiki.unity3d.com/index.php?title=FramesPerSecond) that can do something similar. I am pretty sold right now that the FPS script is a more accurate representation of what your FPS truly is. Use that and keep it on the screen at all times. That has helped me find specific bottlenecks such as the projector issues.

##  Conclusion

Hopefully you can employ some of these tips if you haven't been before. Any other words of wisdom out there for developing for the OUYA platform.
