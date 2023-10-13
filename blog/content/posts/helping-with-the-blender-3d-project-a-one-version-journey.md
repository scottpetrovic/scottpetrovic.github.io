---
title: "Helping with the Blender 3D Project: A One Version Journey"
date: "2014-04-18"
featured_image: "./images/blender-logo.jpg"
categories: 
  - "life"
---
![](./images/blender-logo.jpg)

I have been wanting to get more involved with the open source community for a while. It is great to have free options for people that don't have a lot of money - especially college kids who are more focused on finishing school than owning a real copy of Photoshop. The type of people that work on these open source projects appear to be selfless individuals who really care about having software available to everyone. It sounds like a cause I want to be a part of.

I chose to start helping with Blender because I love 3D technology and thought I could contribute something related to user interface design. The core group that runs the Blender Foundation appears to be the sharpest people that I have ever come across. I think it is always a good idea to surround yourself with the brightest people you can possibly find.

I do quite a bit of web design/development, so I thought a great way to ease myself into the project was to help the foundation with their new marketing site. After 10 years, they thought it would be a good idea to refresh the site and give it a new look. I saw something on their existing website for help and contacted Francesco Siddi. They were already well under way with the process when I jumped in.  They had a South American design agency do most of the design direction and mockups.

I jumped in when they were about to start migrating content and fixing all of the bugs for the site. They already had a QA environment set up where contributors could make fixes and add content. I generally try to place myself where I think an organization/company is in the most need. For the Blender website, they had a lot of content migrators, but almost no front end developers. The website was actually in a pretty good state when I started working on it, but it had some large issues with the responsive nature and cross browser compatibility.

They chose to use the popular Bootstrap and Wordpress combo, but also used other plug ins that didn't play well with the responsive nature of Bootstrap. We used Github to create issues and would work in various forks to make the updates. Most of the work I ended up doing was fixing a few plug-ins to work with Bootstrap, as well as optimize the site with minifying and optimizing resources. Some of the people had an affinity for huge images, which completely destroys the whole optimization thing. I recently just checked out the website and the images on their homepage alone are over 2MB.

Come on guys!

I might let them know later. It looks nice though (especially for an open source project).

[![blender-site](./images/blender-site.jpg)]

## Post Website

After the Blender site went live, the technical components seemed to die down quickly. Almost all of the issues were things non-technical people could easily fix or update.

Unless I wanted to be a content writer, I thought now would be a good time to make the switch to helping with the application. They recently just had the Blender Conference and seemed to want to really have a big push for making another iteration with the user interface. I contacted the module owner (Brecht Van Lommel) and he filled me in on ways to help out.

Blender is a huge application, so every part of it has a "module owner", which makes the final decisions on the direction and features that are approved. You can usually get this distinction after years of helping with the project.

![blender-phabricator](./images/blender-phabricator.jpg "Phabricator")

Developer portal for Blender (using Phabricator)

They recently [moved](https://developer.blender.org/) to [Phabricator](http://phabricator.org/) and GIT (as of 2.70), so I used that to discuss design related ideas and features. After spending quite a bit of time reading over various discussions, it became apparent that most feature changes aren't as simple as, "hey wouldn't it be cool if".  User interface decisions need to take into account how video compositors use a button, as well as how a texture artist might use it.

Commonly, people that come up with ideas and improvements for Blender are looking at it from a very narrow lens. They have a specific use for Blender such as modeling or animation. While their feedback is helpful, they sometimes don't realize their ideas will negatively affect many other people.

This is what makes Blender difficult to design for in its current state. There is a lot of "stepping on toes" when things get touched or modified.

Tools you thought were simple end up being complex and needing to satisfy use cases across multiple disciplines. Removing an element might optimize the workflow for sculpturing, but make it inconvenient for people that use the game engine.

Instead of getting too technical in this post, I am going to highlight some ecosystems that Blender uses for communication and management. It is good to see the glue that sticks people together with projects like this.

## Mailing lists

[![blender-mailing-list](./images/blender-mailing-list.jpeg)]

At first, I thought this type of thing was very old fashioned, but later came to realize how valuable and powerful these are. If you don't know how they work, you can subscribe to a mailing list with a topic or area you are interested in. Any time someone in that area needs to let everyone know of something important, you will get an email with their message.

As an example, most of the developers are subscribed to the [bf-commiters list](http://lists.blender.org/pipermail/bf-committers/). This means anyone that has issues while developing can notify all developers if needed. If a recent commit has broken the build for linux , an email might be sent out letting everyone know. This is helpful if you are pulling the repository and start getting compile errors. It works for emergencies, as well as a discussions for larger feature sets.

The nicest things about communication using mailing lists is that you have a central, saved message chain storing all messages. There is no worry of emails getting "lost". There is always a record on the web to view historical conversations. This is perfect for open source since volunteers and contributors frequently come and go.

## IRC

[![blender-irc](./images/blender-irc.jpeg)]

Another open source favorite. There are a ton of IRC clients out there, but I am using one called Chatzilla. It is just a Firefox plug in. The extension just opens a window where you specify a network and channel. This is where developers go to ask questions, as well as where Blender holds there weekly status updates.

For IRC to work, you first have to join a 'network'. For Blender, they have there network as "freenode". Once you are hooked into there, you can specify a channel to what chat room you want to go into. #blendercoders is what Blender developers always uses.

The most complicated part of the Blender meetings is that everyone that contributes are in different time zones. Giving the time in UTC helps, but sometimes daylight savings time happens at different times in different countries. It is usually at 9am or 10am on Sunday mornings. I don't have any type major position, so I just show up on occasion. It is  interesting to listen to them talk. It is more of a weekly status meeting to see how things are going with the project.

## Documentation

[![blender-wiki](./images/blender-wiki.jpeg)]

One of the most difficult things almost everyone agrees on in Blender is how hard it is to keep [documentation](http://wiki.blender.org/index.php/Dev:Contents) up to date. The code base changes at such a frenetic pace, that it can be difficult to always update the documentation.

There currently aren't any good solutions for this.

I am always a big advocate of commenting your code well. While reading some documentation about Python standard PEP8, it has a mantra that people will read code much more than write code. I think comments are the key to readability and making code bases easier to learn. I have learned a lot on the wiki for Blender, but I feel I have learned things at a much deeper level while actually _in_ the code base.

## Learning the code base

[![blender-ide](./images/blender-ide.jpeg)]

Getting up to speed in the Blender code base is quite a feat in itself. After talking to a couple of the developers, they let me know it takes about a year for someone to start feeling like they are actually useful.

A year!

I can imagine this is the biggest hurdle for why a lot of people have a hard time being a regular contributor to large open source project. It does make me feel a little better though about only making a handful of commits with the latest release (2.70). Blender does so many different things: modeling, animation, sculpting, video compositing, having two rendering engines, game engine, physics, and more. It is overwhelming when you first start looking at the code. You just have to decide what area excites you and just start with something simple

For me, the best resources are a lot of the architecture documentation that exists on the [Blender wiki](http://wiki.blender.org/index.php/Dev:Contents). A lot of the code isn't really commented that well (if at all), so sometimes the best way to see what is going on is to hook up a debugger to your build and just start stepping through code. I will try to write more on this technical part later.

## Final Comments

This post doesn't really mention anything in regards to actually programming and getting a development environment set up. While that part is difficult as well, understanding the ecosystem of an open source project can be very interesting when getting started.

Hopefully in the coming weeks and months, I can try to post on some technical hurdles and solutions I am coming across when working on Blender. I think after I start making more meaningful contributions, I will feel more fulfilled with the time I am putting in.
