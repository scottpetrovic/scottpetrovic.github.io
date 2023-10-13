---
title: "Developer Note: Beware of System Updates"
date: "2014-08-18"
categories: 
  - "computer"
---

If you are on a Linux machine like I am, you will occasionally get a smattering of system updates that it recommends. New features! Fixes! Better performance! More stability! All for free!

Those are usually the things that run across my mind when I see my package manager appear. I squeal with delight. I click update...and away it goes. Everything finishes, but I am never really sure what exactly just happened. Newer is better right?

As your OS is updated, it is very easy for the system to uninstall packages that you might need for development.  The system has no idea that you need some slightly older library for your favorite project. The OS just sees that the files exist and is helping you clean.  Next time you try to compile...whammo!  Errors. Was it from the last repo pull? Is the build broken?

After looking through the compilation output, it becomes obvious that something large happened. You look up the package, only to find it is not installed.

Make sure to look over package changes before getting too excited.
