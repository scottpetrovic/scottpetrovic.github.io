---
title: "East West Symphonic Orchestra Install Process"
date: "2012-02-25"
featured_image: "/images/EWQLSO-box.jpg"
categories: 
  - "music-recording"
---

![](/images/EWQLSO-box.jpg "EWQLSO-box")

During the Valentine's Day bonanza this year, [East West](http://www.soundsonline.com/) had a 50% off sale on almost all of their products. I was wanting to get an orchestral [VST](http://en.wikipedia.org/wiki/Virtual_Studio_Technology) pack for a little while, and thought I would jump on the opportunity. To use the software, you also need to have an [iLok](http://ilok.com/) for it to work - will explain more about iLoks later.

If you aren't familiar with the quality of this pack, you can check out their website. Some great sounds.

go to Demo section to see playlist

[http://www.soundsonline.com/Symphonic-Orchestra](http://www.soundsonline.com/Symphonic-Orchestra)

 

Ouch - $50 bucks for a USB drive! I smell high profit margins.

The deliverables all arrived (East West Sofware Box and iLok). When I opened up the software box, there was 5 dual layer DVDs along with a piece of paper. The piece of paper had a big "ATTENTION" on it, so I thought I better read it. The company doesn't keep up to the date software on the DVDs, so you have to download them online. I thought having two videos explaining how to download something over the internet is a bit overkill, but whatever.

At this point, I knew this was going to be an epic install. This post talks about the install process and what I did to get the software working. I am not an expert installer, so I won't be able to help people with other configurations. I am running a 64-bit version of Windows 7 and usting Pro Tools MP9 as my DAW (digital audio workstation).

## iLok install/register/configure/activate

I won't bore you with all of the steps and frustration I had trying to get it all set up. I will just provide information on what you need to do if you would ever want to install the East West Symphonic Orchestra (Gold edition in my case).

![](/images/iLok-device.jpg "iLok-device")

Probably the best thing you can do at the start is go over to iLok.com and register your USB drive. If you aren't familiar with iLok, it is a new serial key process where you can put serial keys on a USB drive and install your software on any computer you want. It is kind of a cool concept, but the execution of the idea is a pain. Download the driver install and the client install to get your system to recognize the USB stick. The client install helps connect the iLok to the website.

For web browsers, you should use Internet Explorer if you aren't. The iLok website uses ActiveX technology to connect the iLok to the website, and only Internet Explorer can use that. Maybe there is a way to use other browsers, but I didn't have luck when I tried.

Now that you have your iLok.com registeration done, go over to soundsonline.com where you need to register your iLok account with soundsonline. If you login to your account under [soundsonline.com](http://www.soundsonline.com/), you can go "My Account" where the last option will be to enter your iLok.com username. Entering that links the two sites up somehow.

There is a little more to the iLok process, but that takes care of most of it.

## East West install

I installed my software on a Windows 7 machine, but I am sure a Mac set up wouldn't be much different. On the first DVD, there are multiple installers depending on what product you bought. I got the Gold edition, so you I used that installer file.

What this installer does is put the player on your computer. It doesn't take very long to instsall since it is just a shell that the music will be playing from. I imagine it installs any VST or RTAS drivers along the way to work with you digital audio workstation (DAW). I will be calling the audio player "PLAY" software from here on out, since that is what East West seems to call it.

For you to use PLAY with software that you buy, you need to install an "authorization" program that updates the PLAY software. The DVD doesn't have an updated version if you are on a "newer" OS like Windows 7 or Lion, so you need to go to the soundsonline.com website to download the software update. While you are there, you might as well update the PLAY software as well that contains some fixes.

After you get done installing the authorization software and PLAY update, you will probably have to restart your computer. That should take care of all of the installation pieces.

Whew...

## Authorizing your products and adding to iLok device

If you open up the PLAY software, you will have absolutely no idea what to do if you haven't used it before. For it to work correctly, you need to activate different products you bought. This is where the iLok stuff comes in.

Plug the iLok in now if it isn't already.

If you are on a Windows 7 machine, type "Authorization Wizard" in the start menu search. A program will come up where you can enter your serial number(s). It will have a East West logo in the application background, so you know it is the right application if you see that. The authorization program asks for your soundsonline.com account as well as the serial that is located on the pack of DVDs you got. When you enter the serial number and hit the authorize button, it will connect to the internet and add the serial number to your iLok. If you have multiple iLoks installed, it asks which one to put it on.

The iLoks use some type of hexadecimal ID, so if you have multiple iLoks and are unsure of which one you want to put the license on, go to the iLok.com website where you can see what iLok is associated to what ID.

Now that you have authorized the software, you can now use the PLAY software for those products.

If you open the PLAY software (called EWQLSO player on my desktop) , you will see the product you purchases on the lower right (not shown in screenshot below). You need to hit the browser button on the top right to see which products you have authorized.  You still need to transfer all of the files for it to work though.

![](/images/EWQLSO-player.jpg "EWQLSO-player")
 

## Transferring Content

The way the PLAY software works, the player is independent of the actual sound files. That means the sound files can be put anywhere you want and there is no install process for them. They are just files that you will navigate to in the player.

I put all of my files in a plug in folder in my Pro Tools directory. There are other files on the DVDs that look like install files, but you don't need those.

Confusing I know. They probably have/had some use.

The folders that are labelled either "instrument" or "samples" are the ones you want to copy over. This can take a while depending on what package you got. The Platinum version has something like 20 DVDs that need to be installed. Each one being 7-8 GB.

For each product, you should have a instruments folder and a samples folder. My final directory looked like this when everything is copied over.

- Gold Samples
- Gold Instruments
- Silver Samples
- Silver Instruments

Inside the folders will be the section folders (percussion, brass, strings, etc), and further in will be the actual sound files.

You can start up the play software now and navigate to the Instrument folders where you can select an instrument. It should load up and you can start playing away with your favoriate MIDI controller/keyboard!

## Conclusion

Without question, this has been the most complicated install process I have ever experienced. Like everything, once you understand what you need and what you need to do, it isn't that bad. The process for me took about 5 1/2 hours from start to finish. About 70% of that time was just waiting for the 33GB of content to transfer from the DVDs.

There was a lot of old documentation and online articles that made this process pretty confusing. If someone stumbles upon this and find it helpful. Let me know.

With the epic install out of the way, I am starting to exclusively do MIDI recordings with Pro Tools. I am doing a study right trying to reproduce a song I like. It is pretty crazy with a lot of instruments, so it will definitely be a challenge. Hopefully I can get it finished and get a blog post together with what I learned.
