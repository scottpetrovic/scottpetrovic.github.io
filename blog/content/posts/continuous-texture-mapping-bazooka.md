---
title: "Continuous Texture Mapping & Bazooka"
date: "2010-07-07"
featured_image: "./images/game-programming-gems-8.jpg"
categories: 
  - "art"
  - "computer"
  - "game"
  - "illustration"
  - "interaction-design"
  - "unity3d"
---

After doing the planetary gravity post, I started looking back at my models and remembered a great article I read about [UV texture tips](http://www.gamasutra.com/view/feature/2071/uv_mapping_tips_and_tricks.php "UV Texture Mapping tricks") from Gamasutra. It talks about continuous mapping where you reduce the seams in the mesh and group together larger parts. I updated my character model with a more detailed mesh along with changing the texture map. It is easier to see what parts are being textured with the new layout. I could have optimized the space a little better, but meh...next time.

![non-continuous vs Continuous Map](./images/uv-continuousMap.jpg "uv-continuousMap")

## Bazooka

I created a bazooka model and am using the detonator framework for the missile explosions. I am still tweaking the actual gameplay mechanics - so I am not ready to post it yet. Here is the bazooka model for it so far.

**Use mouse buttons and drag to rotate and zoom in and out of model.**

[Bazooka Unity3D File](/unity3d/bazooka.unity3d)

## Working on

![Game Programming Gems 8](./images/game-programming-gems-8.jpg "game-programming-gems-8")

After I finish getting the bazooka to function right, I think I am going to learn more about animating bones and shaders. My character doesn't really move his torso at all with the mouse, so the firing functionality seems a little stiff. I think studying the headlook controller system in the Unity resources will help that out. I also recently bought [video game programming gems 8](http://www.amazon.com/gp/product/B003F8S7EU/ref=s9_simh_gw_p351_i1?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-2&pf_rd_r=101XAQ75Y7YP5TK17696&pf_rd_t=101&pf_rd_p=470938631&pf_rd_i=507846 "Video Programming  Gems 8"), which has things I might try to incorporate later as well.
