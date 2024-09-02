---
title: "2D Laplacian Smoothing"
date: "2024-09-02"
---

Ever have something you really want to learn, but for some technical reason, it just isn't making sense. The "Laplacian"  operator is one of those things for me recently. Every time I see demo and see the name "laplacian" in the solution, I get excited and spend about 10 minutes reading about how it work. I then get frustated and give up when it isn't clicking. 

Complicated code is frustrating to look at. There is some conceptual idea that you want to understand -- but just can't get it for some reason. Probably like trying to learn advanced math before you learn the basics. Your mind just isn't there yet.

Here is what I came up with:

{{< iframe src="../../../projects/2d-laplacian/index.html" >}}

The only way I've found to learn complex topics is to break them down into the simplest components. For my example, I always tried learning about 3D implementations of laplacian smoothing. These operators commonly also include other parameters such as iterators that apply the operator multiple times as well as different solvers. 

These extra layers were blocking me from understanding the core idea. I spent a little while and just simplified the problem by coming up a 2D version without any extra bells and whistles. 

This simple implementation really made the concept a lot more clean on what is going on. Conceptually the code just takes whatever point you have selected, looks at the points around it, and moves the other points to an average position. This operation happens with all the points along the chain. That is really all there is to it.

It's good to remind yourself that if something is too complicated, break it apart into smaller and more manageable chunks. As an old famous quote goes, sometimes you have to go slow before you can go fast.


