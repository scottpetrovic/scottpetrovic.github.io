---
title: "Cross-browser testing in 2009"
date: "2009-03-27"
featured_image: "./images/greenery.jpg"
categories: 
  - "web-design"
tags: 
  - "acid-tests"
  - "cross-browser"
  - "testing"
  - "web-design"
---

![greenery](./images/greenery.jpg "greenery")

When I first started out doing web design, I  didn't really think about all of the different people that are going to visit my sites. I thought that if I can see it in Firefox3, it is good enough. After all, I did some crazy CSS to get it to working right. It is their fault for not using a standards-compliant browser. Besides, I didn't learn this in school too much, so it must not be that important.

_Wrong!_

It doesn't take too long to realize that cross-browser testing is intrinsic to the success of a site's deployment. There is nothing worse than knowing that your site will be broken instantly to 20-30% of your visitors if you neglect this area.

Here is a list of how I test and what software or methods I use to try to get the most efficient testing environment.

### Understanding market share and downloading the right browsers

First step is to install all of the different browsers. If you have no idea which ones to install, a good place to start is[http://marketshare.hitslink.com/browser-market-share.aspx?qprid=2](http://marketshare.hitslink.com/browser-market-share.aspx?qprid=2)

![browser_marketshare](./images/browser_marketshare.gif "browser_marketshare")

This screenshot was taken for February 2009. That will give a good breakdown of the top browsers. This isn't the only source you should use though. I would only use this if you have no idea what type of visitors are coming to your site.

Without question, you need to install analytics software like [Google Analytics,](http://www.google.com/analytics/ "Google Analytics") and see what your visitors are REALLY using. If you get a sizable amount of traffic coming in, it will trump any market share data.

Redesigns and changes should go strictly off your clickstream data. Everyone doesn't use your site - only the people that search for it. If its not a blog site, you can filter out the bounce traffic to get a better idea of people that use it.

![ga_browsers](./images/ga_browsers.gif "ga_browsers")

The image above has the statistics for a site I monitor.

Hmmmm. Numbers are quite a bit different than the market share. Playstation 3 even made the top 10! It is just as easy to drilldown and see what versions people are using.

**Download the top browerrs:**

[MultipleIE](http://tredosoft.com/Multiple_IE) IE7, IE6, IE5.5

[Firefox 2](http://www.mozilla.com/en-US/firefox/all-older.html)

[Firefox 3](http://www.mozilla.com/en-US/firefox/firefox.html?utm_id=Q208&utm_source=msn&utm_medium=ppc&utm_campaign=msnlaunch)

[Safari 3.2](http://support.apple.com/downloads/Safari_3_2_2_for_Windows)

[Google Chrome](http://www.zdnet.com.au/downloads/0,139024478,10688503s,00.htm)

[Opera](http://www.opera.com/)

Yes, there are more I could list, but this covers 99% of the browsers. If it works in all of these browsers, it is probably good enough

### ACID tests

![acid2_reference1](./images/acid2_reference1.png "acid2_reference1")

Before the ACID test, there was little in terms of standards with how browsers rendered content and processed CSS. When the ACID test came around, it helped browser makers standardize and formalize the "proper" way to render elements. This is a great test indeed!

A good way to get an idea of problematic browsers and versions is to check out the ACID tests. The two big ones right now are the [ACID2](http://en.wikipedia.org/wiki/Acid2) and [ACID3](http://en.wikipedia.org/wiki/Acid3). Yes the links are wikipedia articles, but if you scroll down on them, they show you how different browsers perform on the tests. These can give you a quick idea as to what browsers are going to present the most problems without running the test on each one. As of now, all of the mainstream browsers pass the ACID2 test. ACID3 is still getting there.

### Conditional Statements/Comments

There will always be problems in older browsers, so they made these great conditional statements to target specific browsers. Here is a [technical article](http://msdn.microsoft.com/en-us/library/ms537512.aspx) from Microsoft about implementation. IE seems to have the most problems, so most conditional statments will probably have it included.

The easiest way to implement them is adding a separate css file like  "ie6.css". I add it at the end of my stylesheets and put the conditional comments around it. Update the  new css file until you get it working right in that specific browser.

Voila! done.

## CSS Reset File

Many problems with coding and testing go away with the CSS reset files. It "resets" most of the styles to compensate for any differences. It has a [whole site](http://www.css-reset.com/) devoted to it. Plop one in your code and test away.

## Design it right first

Always design it in a standards compliant browser _first_ like Opera or Firefox 3. It is much better and easier to break rules and mess things up in conditional files than try to fix things in your main document. When older browsers disappear, you won't have to worry about recoding it because it will be right to begin with.

## Tools

After all of the standards compliant browsers are finally to take shape, software is slowing coming to the aid. It is probably about 10 years too late, but it will still be valuable none-the-less.

This software basically wraps all the browsers into one app that can be previewed all at one time. Making testing easier is the idea.

Adobe has a new software that might see the light called [Meermeer](http://www.sitepoint.com/blogs/2008/12/04/adobe-meermeer-will-change-the-way-you-test-web-sites/). Adobe doesn't really have too much about it so this link to SitePoint is the best I could find.

Microsoft has another solution closer to completion called [superpreview](http://www.sitepoint.com/blogs/2009/03/19/microsoft-superpreview-website-tester/) (how creative). The link has a little review on it. you can download a free trial to test out as well.

### CSS3 / HTML5 or other "bleeding edge" technologies

This is an area that needs more checking and research than anything else. New versions of browsers try to support cooler features, but the old versions are still in widespread use. So what should you do?

If you use that cool feature that only works with Firefox 3 and not IE7, it probably isn't ready for prime time. The only exception are technologies that degrade nicely like web fonts. You can use cool fonts, and browsers that don't support them will fall back on secondary standards like Geneva or Verdana.

You have to make a guesstimate as to when the threshold is met to adopt new technologies. I think for technology for "higher-end" sites, I would be ok with 85% compatibility. These people are more comfortable with having the "latest and greatest" stuff, so they probably won't mind upgrading - as they probably do it a lot anyway.

General mainstream sites are 95% compatibility at the least in my opinion. Anything that would put thet number below that mark should be simplified or not implemented at all.

At one point in time, I would have picked a lower number like 80%, but the way browsers are being standardized and adopted now, there shouldn't be an issue getting a higher compatibility across the board.
