---
title: "Say no to CSS expressions and live a happier life"
date: "2009-04-04"
featured_image: "/images/dontcrygirl.jpg"
categories: 
  - "computer"
  - "life"
  - "web-design"
tags: 
  - "css-expressions"
---

![Don't cry, it is only CSS](/images/dontcrygirl.jpg "dontcrygirl")

This past week I have been reading a lot about these things called "CSS expressions" that I have never heard of. I read quite a bit about web trends and different techniques, but I have never run across this topic until this week.

Since it only works for IE, I can see why it isn't talked about much in the web community. Not because it is IE, but because the other browsers make up too much of the market share.

The main reason CSS expressions are used is to help IE do CSS things that it doesn't support. For instance, IE doesn't support the max-width property, but you can set an expression to make it work like max-width. A [short article](http://gadgetopia.com/post/2774) explaining the code.

### Why it should never be used

Reading a few different resources about the subject, I found a good article on why [not to use css expressions](http://www.robertnyman.com/2007/11/13/stop-using-poor-performance-css-expressions-use-javascript-instead/). The main points were that

1. it continuously fires the javascript, which takes up computer resources
2. they need javascript enabled to get it to work
3. only works in IE6 and IE7 strict and quirks mode.

In reference to the short article explaining the code, there were comments explaining that Windows XP SP2 didn't support expressions. These "javascript hacks" are not very well supported. In addition, it seems to have little benefits beside the max-width hack.

### Use Javascript

Since CSS expressions are just using javascript, it is much better to create a javascript file that performs a similar action.

    window.onload = checkWidth;
    window.onresize = checkWidth;
    function checkWidth(){
        var wrapper = document.getElementById("wrapper");
        wrapper.style.width = (document.body.clientWidth > 1280)? "1280px" : "auto";
    }

It seems crazy to use Javascript inside CSS because CSS just presents the data. Any calculations that can't be done in CSS should be done in Javascript. HTML structures and organizes, CSS styles, and Javascript deals with the functionality. They should never cross lines.

The above javascript only needs to execute in IE6 or lower, so make sure to wrap the javascript include with a conditional statement.

This should be more than enough ammunition to not use CSS expressions in any web projects. Don't believe any tutorials that tell you otherwise!
