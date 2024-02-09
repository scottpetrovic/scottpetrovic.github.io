---
title: "Beyond form fields"
date: "2023-11-06"
featured_image: "/images/2024/chip-8.png"
---

I do web development and design all day at work. I come home, eat a bit, then start thinking if/when my skills will become irrelevant. I browse a few YouTube 'expert' influencer types. Look through the news to see what technologies are the cool kids on the block. After a short time with the infinite scroll, it begins to settle that the landscape of web development is . Then I hear a voice...

> What type of project gets you excited

My gut whispers these words to me to help give me direction and drive. I frequently slam into this question as my career has progressed. With the endless selection of languages and things to do, the seemingly simple question creates fear and confusion. 

- Do I want to learn a new language
- Do I need to learn a new area in technology like AI, site reliability engineer, DevOps
- Should I spent more time working on more artistic related fields like design trends, UI, or UX

My mind is racing and getting nowhere, so I decide to meditate for a little bit. 

> Breath in. Breath out.

A surprising amount of time, emptying my mind gives me the best ideas. An idea nugget pops into my head and gives me a surge of passion.

## Creating an Emulator

One aspect of programming that has mystified me for a long time is emulator programming. Playing those retro games in the web browser. How does that even work. It is fascinating how people can get systems working somehow just with javascript. I thought to myself, there has to be some good project out there to teach the basics.

After a short amount of time, I stumbled upon a free code camp project that does just this teaching how to re-create a CHIP-8 emulator. The CHIP-8 system was before my time and computers were more primitive. This system is not going to win any awards for beauty, but it seemed like the perfect learning path. Here is the tutorial:  [Free code camp tutorial](https://www.freecodecamp.org/news/creating-your-very-own-chip-8-emulator/)

It took a few days working through it to try to understand the basic concepts. I utilized GitHub Copilot quite a bit helping fill in the gaps with questions I had. Especially around some of the concepts with bitwise operations and how systems work with things like "program counters" or different purposes for buffers.

My [final CHIP-8 emulator files](https://github.com/scottpetrovic/chip-8-emulator?tab=readme-ov-file) are heavily documented. I added a few bells and whistles to it to help learn it a bit deeper. I could spend more time with it, but the allure has faded. It should be pretty easy to pull down and anyone can spin it up.

Here is a screenshot of what it looks like on my local web server using Vite. 

![](/images/2024/chip-8.png "Chip-8 Emulator project")

It looks bad, but the top square is actually a plane going across the screen. as you press a keyboard button, it drops little bombs that slowly destroy the ground. Every few cycles, the plane automatically moves down a pixel. If you run into the ground it is game over. They had a lot of creativity when games first came out with just black and white pixels.

I added a few bells and whistles to the program such as showing the binary data of the ROM when it is loaded, pausing, and a game loader to swap out the ROMs. I could spend more time prettying it up, but my time has come to an end with it.


## Further learning

I don't know where my projects and passions will take me. The little projects I work on seem to be so varied that there is no rhyme or reason. That is ok. Just take a deep breath.