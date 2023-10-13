---
title: "3D Web Viewing Tech - Sculptris and P3d.in"
date: "2013-06-03"
featured_image: "./images/sculptris-logo.jpg"
categories: 
  - "computer"
  - "illustration"
---

[![sculptris-logo](./images/sculptris-logo.jpg)]

I recently was looking at some 3D art and the whole "3D sculpturing" technology seems to be standard now for doing modeling. I have been doing polygonal modeling in the past, but didn't want to fork over the $$$ for the usual tools like ZBrush or Mudbox. I learned about [Sculptris](http://pixologic.com/sculptris/) a while ago, but never got around to spend time with it.

This past Sunday I was bored and watched a couple hours of training video for Sculptris. It is a free tool that is a stripped down version of ZBrush. The same company makes ZBrush, so I imagine it was created to get people "hooked" onto their software and later buy it when they start getting better.

After a short time with it, I definitely had one of those "aha" moments. You can really focus on sculpturing and not worry about all of the polygon data in the background.

Creating 3D models are cool, but sharing what you have done is even better!

## P3d.in and Three.js

A great online 3D viewer is [P3d.in](http://p3d.in). I heard about it visiting a 3d modeling site and they kept referencing it when showing previews for models. I tried it out and completely love it. You can set up a free account and easily share models via the web via iframes or short links.

Being the curious being I am, I tried to look at the source for how this framework is doing it's 3D rendering in the web browser.

At the core, the 3d viewer uses [three.js](http://threejs.org/) for the 3D rendering and [Ember.js](http://emberjs.com/) for the app's data binding and templating. The viewer makes requests by using a combination of JSON for the settings as well as a javascript OBJ converter to parse all of the blob data it takes in from the 3d binary file.

For looking at javascript, it is great to look at everything by putting it through a [beautifier](http://jsbeautifier.org/) when studying it. Most javascript is minified, so it makes it much easier to read. I popped in the javascript file that P3d.in is using and started going through everything.

To better understand what is going on with the p3d.in, you really need to spend more time with three.js, since it is doing most of the grunt work. When [downloading the source](http://threejs.org/) from github, realize that the project is a whopping 75MB (unzipped 120MB).

99% of the size are the examples provided. The final minified three.js is 400KB. Pretty large for a javascript library, but still pretty small considering it is an entire 3d engine framework.

There are some pretty awesome example files with what three.js can help with ( 193 to be exact) including cloth simulation, 3d transitions, particle systems, and working with Kinect data. A few of the examples must be experimental, because they don't seem to work when I test them in Chrome.

 The [documentation](http://threejs.org/docs/58/) on three.js is **very** rough, so you really need to understand 3d terminology and 3D math to start using it.

There is a TON going on in the P3d.in js file ( 16,000+ lines of code unminified). It manually handles everything from textures, viewport shading, shaders, to exporting. Very monolithic. It includes the three.js library, as well as all of the custom code for the web viewer.

I could easily spend months going through three.js and finding out how to utilize it, but alas, I feel like I am going on a tangent with this post.

Here is a quick model I made today. It was originally a massless blob, until my roommate told me it looked like a pig. With it I replied, "It IS a pig", and continued. I called it a bull pig since it is a combination of a warthog and a bull dog. To view it, you will need a web browser that supports the canvas and webGL plug in. It seems to work well in Chrome.

\[iframe src="http://p3d.in/e/pdFUu" allowfullscreen="true" webkitallowfullscreen="true" width="100%" height="480px"\]

I could see this service work perfectly for 3D artists wanting to use it for their portfolio. Another thing I love about this service is that they give you a short URL for every model so it is easier to share. [http://p3d.in/pdFUu](http://p3d.in/pdFUu)  is the link for sharing the bull pig model above.
