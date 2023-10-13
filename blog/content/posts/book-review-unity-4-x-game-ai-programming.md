---
title: "Book Review: Unity 4.X Game AI Programming"
date: "2013-08-29"
featured_image: "/images/3400OT-239x300.jpg"
categories: 
  - "life"
---

![Game AI Programming](/images/3400OT-239x300.jpg)

_Disclaimer: I was given this book as a review copy from Packt Publishing. If I didn't like this book, I wouldn't be writing a review. That is a little spoiler of what is to come._

The timing for me getting this is rather convenient. My artificial intelligence programming skills are pretty much non-existent - and I currently need to start adding AI for the game I am working on.

There are other AI books out there, but the biggest advantage to learning AI through your current 3d engine is that there is no translation between engines or technologies. It is good starting point for beginners

## Prerequisites

With a concept like AI programming, you can guess this isn't a beginner's book on Unity 3D or programming. The authors spend no time on Unity's interface or programming concepts like interfaces or compilation processes. That is a good thing. There are plenty of books out there that do that.

If you have read at least one AI book before, I would imagine this book would be a little simplistic for you. It definitely targets the intermediate programmer who has no experience with AI concepts.

## Theory vs Practice

After reading the first few chapters on finite state machines and probability, I really enjoyed the alternating between theory and code examples. There is a nice balance between introducing AI concepts, than supplementing those concepts with code examples in Unity.

By the way, when I read these type of coding books now, I usually download the projects and analyze the code through an IDE like MonoDevelop. Formatted code on a printed page or PDF can be very difficult to read sometimes. With all of the word wrapping and removed spacing that they use, it can really slow you down while reading. The book doesn't include all of the code for each project, so you aren't going to get that much working without downloading the project files.

## Chapter Ranking System

I just came up with this idea and thought I would try it out. This is a ranking with each chapter and how good I think it is. Yes, they are all competing against each other to be the best section in the book. Here we go!

1. [Chapter 9: Behavior Trees](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_9)
2. [Chapter 2: Finite State Machines](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_2)
3. [Chapter 6: Path Following and Steering Behaviors](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_6)
4. [Chapter 5: Flocking](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_5)
5. [Chapter 3: Random and Probability](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_3)
6. [Chapter 4: Implementing Sensors](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_4)
7. [Chapter 7: A\* Pathfinding](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_7)
8.  [Chapter 1: Introduction to AI](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_1)
9. [Chapter 8: Navigation Mesh](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_8)
10. [Chapter 10: Putting It All Together](http://www.packtpub.com/unity-4-x-game-artificial-intelligence-programming/book#chapter_10)

I think I just ordered these into what I currently think is the most useful for me, but I am sticking to my list! I really had those "aha" moments when going through the finite state machine concepts and behavior trees ( using Behave). _Note: AngryAnt just came out with Behave 2.0 ($100), but you can still use the free 1.4 version._

The path following and steering chapter is pretty neat because it talks about dynamic obstacle avoidance (ie dodging a car coming at you).

The flocking chapter is interesting conceptually as well as the two different implementations it introduces. Having flocks of objects move around together seems approachable now.

The part I liked the most about the randomness and probability chapter was learning how slot machines work at casinos (they are tricky). Randomness and Probability aren't really AI specific, so the concepts are not used much outside of this chapter.

The A\* path finding chapter was over my head. The chapter builds an A\* path finding system from scratch, but the concepts are a little difficult to understand since there is a lot of recursion with children stuff going on. I read it and tried, but didn't really understand it at a deep level.If you aren't familiar with the algorithm, it creates a grid of the entire map and calculates optimum paths between two points. After finishing this chapter, I decided I can just use it "as is" and worry about understanding it if I would ever need to alter it.

## The Gripe

I put Chapter 10 last, For the final project, it makes a  mediocre little _Twisted Metal_ type game, but there is little AI that they actually implement. The cars don't even know when they hit a wall ( or know how to drive backwards if they get stuck). With all of the neat concepts and patterns that the book introduced, I think it would have been better to make a game that was more AI heavy like a simple strategy game. I am not reading an AI book to get better at instantiating explosions or fire missles.

I also didn't see this chapter as helpful because some implementations they used were earlier stated that they don't scale well (looking at you advanced finite state machine classes ).  I understand learning simple solutions to grasp a concept. I just didn't like how they presented a better solution for state management (Behave) , then the very next chapter fall back on an inferior solution. Why would I want to go back to that archaic thing!

End Gripe.

This gripe is just about one chapter, so 90% of the book still has solid and useful content that people will benefit from if they are new to AI.

## Final Thoughts

I enjoyed this book tremendously. I was a little apprehensive reading it at first since I hear how difficult artificial intelligence can be. I feel AI is a subject I might be more interested in now - which is a good feeling to have at the end of a book. If you are new to AI programming and use Unity3D as your engine, I would recommend this. I don't think there is another Unity book out there on AI, so it doesn't have much competition right now.

Has anyone tried reading [Unity 4.X Game AI Programming](http://bit.ly/1cMsi7y) with other thoughts? You can get the e-book for $23 or the paperback + e-book for $41. Published by Packt.
