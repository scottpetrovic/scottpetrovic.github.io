---
title: "A Tale of Wordpress Customizing"
date: "2009-01-31"
---

I just updated the theme for this wordpress blog and boy how exciting it was! To do the best testing, I really needed to migrate my blog to a local server where I could edit everything. I really didn't know how to do that with the database, so I googled it and read a bunch.

I have a few couple different local servers that I use for doing local testing. Anything dealing with ASP.net I used IIS (Internet Information Services). For anything PHP related I use WAMP. WAMP is a all-inclusive package that has Apache, mySQL, and PHP all bundled into one. It is a lot easier setting it up than all of them seperately.

For some weird reason, something is taking my port  80 (default gateway to connect to the internet), so I had to change it in my Apache config files to something else. It isn't that big of a deal, but it is annoying to add ":92" at the end of localhost everytime I want to see my changes.

Backing up and restoring the database on my local machine was surprisingly simple. It was mostly a matter of going on my web host, downloding the sql database, then creating and importing the table data to my local sql database. I had to change a connection string file so the blog knows where to access my database.

## Search functionality

Search functionality actually works now. I didn't realize that it didn't work before, but it didn't. Hooray! It was originally set up to use [Google CSE](http://www.google.com/coop/cse/), but that would have advertising and that sounded annoying, so I didn't use that. The default theme has a nice site search, so it was just a matter of copying some code where the search bar was.  Pretty simple.

## Styling

I changed the look to be a little more like my portfolio site. Most  of the changes and updates were just standard HTML and CSS changes. One really neat thing I learned was how to manage icon images. Instead of having one image for each icon, they are all in one image. When they are referenced in CSS, all you need to do is offset the position until you get to the right one. I will definitely be using that on future projects.

Using Firebug via Firefox is a massive time-saver for me. I pretty much did everything using that and Notepad++. Dreamweaver is ok, but they just recently have a realtime web engine integrated in CS4. My CS3 version has everything broken looking. Not really that useful.

I might change the design a little. It looks a little plain to me right now, but I think it is better than it was though. I really wanted to do something with the circles design trend, so that is what the header is made up of. I found a nice circle symbol library for Illustrator and used that. Good old deviant art had a [nice pack](http://browse.deviantart.com/resources/applications/symbols/?order=9&alltime=yes).

Doing all of this in about a 24 hour period felt pretty good. I probably put about 15 hours into it. Way to spend your vacation day Scott. Good job! I will probably take a break from programming and do more art stuff next.
