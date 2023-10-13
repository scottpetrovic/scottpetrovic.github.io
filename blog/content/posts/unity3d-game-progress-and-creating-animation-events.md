---
title: "Unity3d: Game Progress and Creating Animation Events"
date: "2011-01-02"
categories: 
  - "computer"
  - "game"
  - "unity3d"
---

I recently changed jobs a couple of months ago and have been pretty busy trying to get up to speed with it. I have been neglecting this blog for a while, which is something that I don't like.

For the Witch Training game I have been working on, the biggest thing that I am proud of myself right now is getting all of the controls about 90% done along with getting in the animation events to fire off walking/running sounds.

I wrote a post a little while ago on animation events describing what they are and how to do them in code. In the original article, I said how to just do it all in code because I don't like the copying method. I firmly retract my statement and think that doing the copy method is the best way for looped animations. I did have to do some trickery to get it to work right though.

Check out the project so far.

![Unity3D compiled file](/unity3d/witch-training-010211.unity3d "animation-events01")

### Controls

**walk** - W/A/S/D **look around** \- Mouse **jump** \- spacebar **flight mode** - hit space bar again when jumping **throw bomb** - Mouse button (you can hold it down to give it more power. Use while on the ground or flying!) **run/fly faster modifer** - left shift

Source code - http://code.google.com/p/unity3d-witchtraining/

If you can't here it, there is sound effects for every footstep whether the witch is walking or running. The way I did it is the following.

## Animation States

To create animation events for locked animations, the best way to add events is to duplicate the animation state. What does that mean? It means that you need to select the animation in your project window and go to _Edit > Copy_ . See image below.

![animation state selecting](/images/animation-events01.jpg "animation-events01")

The above image is the type of thing you want to copy. If you aren't using the model in my project, Ramius is the character's model I made in Blender3D. Unity will create all of these items based on your import settings. The animations were created in the import settings as well with the names you give them. Select the animation like above copy and paste it.

The reason why you have to copy it is because the original walk animation is really just a dynamically created setting that Unity creates from the source file. You can't edit or save it because it will constantly rebuild itself everytime you load new files or update anything. The only way to do anything with these files is duplicate them so there is a static version. You can do things like animation events at that point.

![](/images/animation-events02.jpg "animation-events02")

Once you have the copy, you can add it to your animation state on your game object  in your animation component. Once you've added a animation component to your gameobject you want to animate, select the object you have your animation component on and add the new references to it. See below.

![](/images/animation-events03.jpg "animation-events03")

I added the new run and walk animations to the "Elements". I do that by usually selecting one of the small "0" on the right side of the image. You can select your duplicated animation state. With the game object still selected go to _Window > Animation_ in the top toolbar to start setting points.

![](/images/animation-events04.jpg "animation-events04")

You will see that when you choose which animation you want to edit, most of them will say "Read-Only". This is because these animations are getting pulled from Blender,the 3d program I am using, to get this animation data. You can't edit or add and save animation events with these.

But that doesn't matter since we already created a copy of what we want to use. You can see by the picture above that the run and walk animations don't have "Read-only", since we duplicated them.

**Side Note:** You must have your gameobject in the heirarchy selected to see your new animations with your object. If you select your 3d model in the project panel, your new animations won't appear. This is because they aren't linked to your model. That is what you were doing when you added them to the animation  component.

## Setting Animation Events

Once you have your animation state selected ( I have the walk animation state selected), you can begin adding events. If you bring up Scene view behind, you can see your model actually moving when you scrub the timeline. See below image.

![](/images/animation-events05.jpg "animation-events05")

Once you scrub your animation to know where you want an event. You can create an event there (right most icon on the play toolbar). If you select the event, you will notice that there are no options for what it wants to do. We will do that next.

## Binding functions to Events

In order for the animation events to to fire off a function for an event, it needs to know where it is. The way animation events work, there has to be a script attached to the gameobject that has the animation component as well. See below.

![](/images/animation-events07.jpg "animation-events07")

I added a script to the same place the animation component is. You can create functions in there and that is what the animation window tool will see.

    public void walkAnimationEvent()
    {
        Debug.Log("Foot is down walking");
        audio.PlayOneShot(walkSound);
        audio.volume = 0.4f;
    }

Once you add a function like the one above, you can go back to your animation window and select the event again. This time your new function will show up. When you run the game now, you will see that the event will fire every time the animation hits that frame. Success!

## Extra Credit

Looping animations such as walking are a little more complicated from what I have done with them. Since they are looping, sometimes the fire off more than they should. To solve it, I have add an enum that has what animation state the character is in. It will only do the function if it is firing AND if it is in the right state. You can download the "Witch Training Project" to see if you are interested. It still needs a little tweaking since the walk sound lingers a little too long - but you the idea.

Again, here is a link to the Google code project that has the source files if you missed it at the top.

Source code - http://code.google.com/p/unity3d-witchtraining/

I haven't seen this in-depth of animation events on many blog posts, so hopefully this will help in understanding and using them in your project. Happy game making!
