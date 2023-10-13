---
title: "Facebook status blog integration"
date: "2009-02-05"
featured_image: "/images/facebook_logo-150x150.jpg"
categories: 
  - "computer"
  - "site-update"
---

![facebook_logo](/images/facebook_logo-150x150.jpg "facebook_logo")

Wouldn't it be a great way to customize your blog better by integrating social networking data into it? I was reading a tutorial about using [JSON](http://en.wikipedia.org/wiki/JSON) to incorporate my Twitter status and I thought it would be better if I had my facebook status monitored on my blog - it will make stalking me that much easier!

JSON("Jason") is a great web programming language for cross-site data exchange. I don't understand it, but it seems just as easy as working with XML data using E4X. Anyway, I traveled to the ends of the world wide web to search for an answer - but with little avail.

## Facebook RSS feeds

I finally came across an article about putting facebook on your blog. When I finally realized that the staus updates are in RSS format, I was like "Aha!!! that just made it so much easier".  Not so fast Scott.

Facebook pretty much buries it in the center of the earth trying to find out how to get to your own blog feed. I searched facebook what seemed to be hours looking how to get an RSS feed of my status updates. Finally, after looking through other sources,  found an article that was "digged" on [how to do it](http://www.andy-walters.com/get-facebook-status-rss-feed).

The RSS feeder for Wordpress doesn't work in version 2.7 (has a hard time knowing how to escape ampersands in the URL encoding). I downloaded a great "social RSS feeder" called [Lifestream](http://wordpress.org/extend/plugins/lifestream/) from the Wordpress plugins site. Enabled it and voila!! Fantastic. No coding involved.
