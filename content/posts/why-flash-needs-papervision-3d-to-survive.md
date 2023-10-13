---
title: "Why Flash needs Papervision 3D to survive"
date: "2009-02-26"
categories: 
  - "life"
  - "web-analytics"
---

[Augmented Reality Effect](http://blog.papervision3d.org/)

[Spaceship](http://www.carlosulloa.com/demos/spaceship/) (use mouse to rotate around)

[Strongest Truck](http://www.strongesttruck.com/)( micro-game for Volvo)

[Little Big Planet](http://mysackboy.littlebigplanet.com/) (PS3 game that uses UI elements)

As the examples show, I think that 3d has a great place in the internet world.  I think it will eventually spill over into the retail world with companies showing their products in 3D that can be rotated and altered.

Th biggest obstacles right now to better adoption is processing power, [anti-aliasing](http://en.wikipedia.org/wiki/Anti-aliasing), and implementation. The aliasing problem is large and my biggest pet peeve on the models.  I know anti-aliasing takes more computer resources, but the crispness and sexiness of it will really make the technology more appealing across more industries.

Flash is starting to get some heavy competition with other technologies that do similar things without needing a plugin. Even looking at my portfolio site, I am realizing that I need to redesign it so it isn't so flash heavy. It is bad for usability, accessibility, and search engines.

## Competition

![jquery_logo](/images/jquery_logo.jpg "jquery_logo")

Google has been working with Adobe to help the indexing, but I don't think that is good enough. Things like jQuery, AJAX, and ASP.net can do flash-like functionality without too much code. Using Flash is being less and less necessary for doing many things on the web. The main areas where Flash shines and nothing else can really compete very well is:

- 3D
- Streaming Video
- video games

Streaming video and games have seen widespread adoption by now, but 3d is an area that is still fairly bleeding edge and has just about no competition. Its market potential is huge.

If I was Adobe, I would invest heavily into the 3d channel and really create a powerful solution to deploying 3d content on the web. Flash CS4 introduces the z-coordinate for the first time, but it has many shortcomings that still make it unusable - especially by not having any [z-sorting](http://www.nascom.be/adobe/flashplayer10tests/FP10TestRunner.html) (see "cube test" to see problem) by default.

**Papervision's complexity**

![logopapervision3d](/images/logopapervision3d.gif "logopapervision3d")

The framework has been around for a little while, but it is still evolving at a fast pace. It is coming out with new revisions about twice a month. The revisions are hosted on [Google Code](http://code.google.com/p/papervision3d/). Anything that uses [SVN](http://en.wikipedia.org/wiki/Subversion_(software)) is going to change fast, so it is terribly difficult to update tutorials and documentation. Even while I try to learn simple things using tutorials, I am finding that classes get moved or functions take on different parameters than the tutorial explains.  Browsing through Amazon, I only found [one book](http://www.amazon.com/s/ref=nb_ss_gw_0_7?url=search-alias%3Daps&field-keywords=papervision&sprefix=papervi) about it that isn't out.

Setting it up and running it takes some know how on the back end. A lot of Flash designers aren't very good with working entirely with Document classes, interfaces, and packages. It is just about 100% programming right now, and everything else is knowing how to model in 3d apps like 3DSMax, Maya, or Blender (my choice).

## Conclusion

I can see in a period of five or six years Adobe creating its own 3d engine and ability to import and manipulate models. Everything will be more visual, and more user-friendly. This will translate into a "boom" of 3d content that will eventually mature in a a few more years once people understand its purpose. I will be continuing to learn Papervision as well as "de-flash" my portfolio site with more jQuery and PHP.
