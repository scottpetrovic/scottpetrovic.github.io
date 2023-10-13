---
title: "Unity3d: Game Progress, Flying Controls"
date: "2010-11-22"
categories: 
  - "game"
  - "interaction-design"
  - "unity3d"
---

I have been tinkering around with the witch training game and the gameplay is starting to take some shape. I still have a lot of work ahead of me, but it is starting to be fun to move around. I got a new job a couple of weeks ago, so I haven't had as much time to work on it as I would have liked. I love it so far though, so not complaining.

From the last post, I updated the character model textures. I experienced a weird bug where it gets really laggy when I play, but updating it to Unity 3.1 fixed the issue. As before with this game, it is getting too big to put a direct download link, so you can check out the project on Google Code. It has all of the raw art assets as well. I tried to cut some things down to decrease the file size.

Source Code - http://code.google.com/p/unity3d-witchtraining/downloads/list

The time looks a little nicer on the bottom of the screen. I have a little GUI manager script that I made that will manage all of the states. I have an enumerator that will switch off what state the game is in. That all works with a switch statement to determine what GUI windows needs to be opened. When a GUI window is needed, it will instantiate the windows themselves as a separate class.

There were some miscellaneous fixes that I made such as making sure the character remembers which way is forward after returning to the ground. I updated the bomb model along with a simple texture. It now explodes when it hits something.



[Witch Training File](/unity3d/witch-training-11-2010.unity3d)

### Controls

- **walk/move when flying** - arrow keys 
- **jump** \- spacebar 
- **flight mode** - hit space bar again when in air 
- **rotate(while flying**) - Mouse 
- **throw bomb** - Mouse button (you can hold it down to give it more power. use while on the ground or flying!) 
- **run/fly faster modifer** - left shift

## Mouse Controls

I thought I better thow some of the code on here to make the post look more valuable. I spend a lot of time working on the coding at this point - trying to understand rotations and vectors, and other 3d concepts at a much deeper level. Here is a slice of code for creating the rotation for the flying controls.

        //for mouse movement
        float yawMouse = Input.GetAxis("Mouse X");
        float pitchMouse = Input.GetAxis("Mouse Y");
        Vector3 targetFlyRotation = Vector3.zero;

        Screen.lockCursor = true;

        if (Mathf.Abs(yawMouse) > 0.1f || Mathf.Abs(pitchMouse) > 0.1f)
        {
            targetFlyRotation = yawMouse \* transform.right + pitchMouse \* transform.up;
            targetFlyRotation.Normalize();
            targetFlyRotation \*= Time.deltaTime \* 3.0f;

            //limit x rotation if looking too much up or down
            //Log out the limitX value for this to make sense
            float limitX = Quaternion.LookRotation(moveDirection + targetFlyRotation).eulerAngles.x;

                //70 sets the rotation limit in the down direction
                //290 sets limit for up direction
            if (limitX < 90 && limitX > 70 || limitX > 270 && limitX < 290)
            {
                Debug.Log("restrict motion");
            }
            else
            {
                moveDirection += targetFlyRotation;
               //does the actual rotation on the object if no limits are breached
                transform.rotation = Quaternion.LookRotation(moveDirection);
            }

        }

I am probably doing this backward by giving all of the code first, but I think it is good to see it in its entirety. First off, this code is in the thirdpersonflyingController.cs script if you are getting the project via SVN.

        //for mouse movement
        float yawMouse = Input.GetAxis("Mouse X");
        float pitchMouse = Input.GetAxis("Mouse Y");
        Vector3 targetFlyRotation = Vector3.zero;

        Screen.lockCursor = true;

The first two variables collect mouse data. The way the Input.GetAxis() function works, it takes the delta of the movement. In other words, it shows the movement amount, and not screen position. This is great to determine how much to rotate the screen based off the movement of the mouse.

The targetFlyRotation will be used to see what the rotation value will be. The Screen.lockCursor "locks" the cursor so you can't see it or control anything outside of the web player. This is great since there will be a lot of mouse movement and I don't want people accidently clicking outside of the window and deactivating it.

     if (Mathf.Abs(yawMouse) > 0.1f || Mathf.Abs(pitchMouse) > 0.1f)
        {
        }

Te rest of this code is inside the statement above. It makes sure that there is movement in the mouse before it will try to update. You don't need to update the rotation if you aren't moving the mouse. The Mathf.Abs() is used to make sure that movement is counted in both directions ( the mouse values will spit out -1 to 1). As long as it is moving it doesn't matter what direction.

            targetFlyRotation = yawMouse \* transform.right + pitchMouse \* transform.up;
            targetFlyRotation.Normalize();
            targetFlyRotation \*= Time.deltaTime \* 3.0f;

This is a little crazy, but hang in there. TargetFlyRotation is a Vector3 type, which means it is in the format (0,0,0). I have noticed that whenever that a transform property is multiplied by a scalar(number) amount, they are generally along the same axis. If you play many airplane video games, side to side rotation is called "yaw" and the up and down motion is called "pitch". When you multiply the yawMouse by transform.right, it is saying that the yaw and transform.right are related. They are both along the same axis.

The normalize() and Time.deltaTime are there to create a unit vector out of the amount and cut the amount over the frame rate so it is smooth.

## Limiting the rotation

That is most of the logic for the rotation, but there is one important part of the rotation that needs to be done for it to work better. Constraints! If you give full control of the rotation, it will spaz out when it reaches straight up or down since the model won't know which way if forward.

    //Log out the limitX value for this to make sense
    float limitX = Quaternion.LookRotation(moveDirection + targetFlyRotation).eulerAngles.x;

This is determining what the future rotation amount will be before it gets applied to the real rotation. This will get used for testing. The moveDirection is the actual rotation and adding the targetFlyRotation will give the new amount. The eulerAngles.x will output just the x or "pitch" part of it. That is the main axis that we need to worry about.

    if (limitX < 90 && limitX > 70 || limitX > 270 && limitX < 290)
            {
                Debug.Log("restrict motion");
            }
            else
            {
                moveDirection += targetFlyRotation;
               //does the actual rotation on the object if no limits are breached
                transform.rotation = Quaternion.LookRotation(moveDirection);
            }

Saving the best part for last. This part is a little tricky. If you output the "limitX" variable, you will see that the way the angles are made make it a little more complicated. If you go one way, it will increase from 0 to 90. If you look up, it will go backwards and start at 359 and go backward.

The end conditional statement is wedging the values and making two comparisons. If the value is greater than 0 and less than 70, you know that the character is going down. The first two conditions ( limitX < 90 && limitX > 70 ) check to see if it is between 70 and 90. If it is, it shouldn't be rotated. It is similar with the second two conditions, except that is for the up direction ( limitX > 270 && limitX < 290).

The else statement only will do the final rotation if it is safe to rotate. You can't assign the rotation before this, or it is impossible to check for the limits.

## Next

I have been really neglecting the GUI, so I will spend some time on that. I have a couple cool ideas using multiple cameras, but not sure how hard it is going to be. The player controls when on the ground feel weird now since I made the flying controls. I will provide all of the source as usual.
