---
title: "Unity3d: Understanding Radars"
date: "2011-05-24"
featured_image: "/images/radar-diagram.jpg"
categories: 
  - "life"
---

Radars come in all different shapes and sizes. Some are square, some are circles. Other have the player moving around on the radar, while other ones have them statically looking in one direction. Even with all of these different forms, the structure is relatively the same. In this post I am going to write about creating a radar and the considerations that are needed. This isn't a tutorial, but more of a mid level explanation with some code.

## Structure of a Radar

Understanding the structure of how radars are made is the first step in the process. Instead of giving a long-winded explanation, it is better to show a diagram explaining how things are set up.

![Radar diagram setup - Unity 3D](/images/radar-diagram.jpg "radar-diagram")

I didn't spend a lot of time drawing this, but you get the idea.  If you would zoom out of your scene in Unity3d or any other engine, it would look like the picture above. Your radar information is below the entire level. That way, you don't have to worry about culling it or using special logic to hide it from your main camera.  The orthographic (ortho) camera needs to be that way since it will display the map accurately. Distance has a negative effect on textures, so making it an orthographic camera will help that.

One of the real stars of this whole set up is the "plane with shader" level. This allows you to create masks and use different shapes for your radar. We will call it the radar occluder from now.  The radar occluder  is actually a mesh that has a hole cut out in it. Apply that shader to the radar occluder mesh and watch everything disappear where the mesh is at.

The radar camera will only see what is through the hole now. The plane will "not draw" everything that is on it or below it. This allows it to act as a mask. The shader on the Unity3d bootcamp demo is called "transparent/Alpha\_Cancel".

Here is the code for the shader if you are interested (taken from the Unity3d bootcamp demo)

    Shader "Transparent/Alpha\_Cancel" {

    Properties {
        \_Color ("Main Color", Color) = (1,1,1,1)
        \_SpecColor ("Spec Color", Color) = (1,1,1,0)
        \_Emission ("Emissive Color", Color) = (0,0,0,0)
        \_Shininess ("Shininess", Range (0.1, 1)) = 0.7
        \_MainTex ("Base (RGB) Trans (A)", 2D) = "white" {}
    }

    SubShader {
        //Tags {"Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent"}
        LOD 100

        Alphatest Less 0.9
        ZWrite On
        Blend SrcAlpha OneMinusSrcAlpha
        ColorMask RGB

        // Non-lightmapped
        Pass {
            Tags { "LightMode" = "Vertex" }
                Material {
                Diffuse \[\_Color\]
                Ambient \[\_Color\]
                Shininess \[\_Shininess\]
                Specular \[\_SpecColor\]
                Emission \[\_Emission\]
            }

            Lighting On
            SeparateSpecular On
            SetTexture \[\_MainTex\] {
                Combine texture \* primary DOUBLE, texture \* primary
            } 

        }

    // Lightmapped
    Pass {
        Tags { "LightMode" = "VertexLM" }

        BindChannels {
            Bind "Vertex", vertex
            Bind "normal", normal
            Bind "texcoord1", texcoord0 // lightmap uses 2nd uv
            Bind "texcoord", texcoord1 // main uses 1st uv
        }

        SetTexture \[unity\_Lightmap\] {
            matrix \[unity\_LightmapMatrix\]
            constantColor \[\_Color\]
            combine texture \* constant
        }

        SetTexture \[\_MainTex\] {
            combine texture \* previous DOUBLE, texture \* primary
        }

        }

    }

    }

You can spend time sifting through the shader, but you don't need to understand it to make it work. With knowing the basic layering effect of how radars work, it is simple to add "decorative layers". If you leave the radar camera all by itself, it will just be a circle with no border. Boring... Adding additional planes with textures in between the radar camera will allow you to add borders and character indicators. You could animate and make them spin around or throw out particle effects when the player would get hurt. Use your imagination!

## Movement

In order for the radar to have much significance, it needs to move when the player moves. This is as simple as creating a script that will reference the player. You can use this to move the radar in the same direction as the player is going. If you don't want a texture map the size of your entire world, you can create one that is 1/4 the size and move the radar camera at 1/4 the speed as the player. That way they will still match up.

**NOTE:** Make sure that the radar occluder is a child of the radar camera. When you rig up the camera to follow the character's position, the radar occluder needs to follow it exactly.

Here is a simple script I wrote that will operate the radar

    using UnityEngine;

    using System.Collections;

    public class RadarCamera : MonoBehaviour

    {

        //reference to the main character
        public Transform player;

        //reference to an indicator graphic that shows the player's field of view
        public Transform FOVGUI;

        private Quaternion forwardDirection;

        // Update will position camera along same 2d plane as main player
        //this will allow the camera to follow the player exactly
        void Update()

        {

            //get reference to current player.
            forwardDirection = player.transform.rotation;

            this.transform.position = new Vector3(player.position.x, this.transform.position.y, player.position.z);

            //only need to transform in one direction
            FOVGUI.transform.rotation = new Quaternion(forwardDirection.x, forwardDirection.y, forwardDirection.z, forwardDirection.w);

        }

    }

If you read the comments in the script, you can pretty much tell what is going on. The script inspector in Unity is used to link about the character controller object to the player variable. The FOVGUI is a 3d plane that has a texture on it.  The _this.transform.position_ is the position of the radar. This script would be attached to the radar camera. It moves and rotates as the player does. This isn't an all-inclusive solution, but can get you pretty close.
