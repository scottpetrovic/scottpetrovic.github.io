---
title: "FontJazz text replacement for web"
date: "2009-06-02"
featured_image: "./images/fontjazz.png"
categories: 
  - "computer"
  - "web-design"
---

![fontjazz](./images/fontjazz.png "fontjazz")

I stumbled upon [FontJazz](http://fontjazz.com/) this week, a lightweight javascript engine that replaces text with custom fonts. There are other text replacement technologies, most notably sIFR ands CSS3 embed fonts, but they are sometimes slow or aren't fully supported.

FontJazz uses straight images and javascript, so it has very good support in almost all cases.

To get it to work, you go to the site and upload your font where it makes a map of the different letters. It creates an image map that specifies where each letter is at. You download a few files and painlessly get it working in no time. When the javascript needs to translate anything, it references the table to pick up font information. It is very accessible and quick on any newer browsers.

## Problem with fonts being displayed

It is only in Beta, so there is a problem with some fonts not displaying correctly. I contacted Rasmus (the creator) and worked with him to see what the problem was. I gave him my working files and this is his solution.

Seems like this is caused by glyphs with too much overlap - so the previous characters flows behind the next, causing the browser to quirk when it tries to layout the elements.

As a workaround, for now, try changing line 106 of fontjazz.js to:

    adjust = metrics\[3\]-metrics\[1\]+2

this adds a little extra spacing between the characters - eventually you will be able to specify character spacing in the font configuration, but this should serve as a workaround for now...

The font I gave him was called "Laine", which is a script font with larger widths then most font characters. The problem really was evident when there was space characters involved. Most fonts That are pretty uniform don't have problems.

I also tested it in IE8 Standards Mode and it didn't display properly. I contacted Rasmus again and he said he tested it in IE8 Beta. Javascript speed is a big thing right now with browsers, so it doesn't surprise me that they changed it before they final release. He fixed that bug very fast and had a new public beta out by May 30th. Go Rasmus!!

## Applications

I am going to rework my blog design using FontJazz for a lot of the headings. I am taking off the flash header, since it is a little sluggish on some computers. I will write about how I implemented FontJazz replacing all of the headers dynamically. I was thinking about making a plugin for it for Wordpress, but since there are so many custom files that have to be generated, I don't know if it is a good candidate for it.
