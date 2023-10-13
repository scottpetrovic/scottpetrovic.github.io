---
title: "Unity3D: 3rd person basic movement/rotation w/source"
date: "2009-11-30"
categories: 
  - "computer"
  - "game"
  - "unity3d"
---

My original version of doing movement was a pretty sloppy hacked version. I provided the source, but it was almost impossible to really figure out what was going on. I didn't really know what was happening, but felt good because it worked. I went back and really cut down all the code to the minimum and explained it with a lot more comments. This post explains some of the basic elements to get that 3rd person character moving and rotating.

On the 3rd person character controller script with the 3D platform tutorial that Unity provides, there is over 450+ lines of code describing how the character moves around. After studying it for a while, the most important parts of the script can be hard to spot with all of the different variables and other functionality. For this post, I just wanted to narrow it down to basic movement and rotation.

My example  still has about 30 lines of code for the basics (over 40 with commenting).

- Controls: W,A,S,D move OR arrow keys

## Setup:

If you want to start from scratch, you can start a new project and add an object you want to control and move. You can also start with a [setup project](/unity3d/3rdPersonBasicMovement.rar) that I made. There is no gravity, physics, or collisions implemented with this explanation/tutorial, so you don't have to create a ground plane for your character to fall on. Just add a gameObject to the stage and add a script to the object. Add a character controller component to your character game object.  If you are using my set up file, just open the charactermovement.js script and you're ready.

Nothing happens if you play the game now, since there is only one script and it is empty. Everything from this point on will be dealing with the script attached to the game object you want to move.

    private var controller :CharacterController;
    controller = gameObject.GetComponent(CharacterController);

    private var moveDirection = Vector3.zero;
    private var forward = Vector3.zero;
    private var right = Vector3.zero;

These first lines are declared at the top of the script. They aren't in any functions or classes. This is so that any function inside of the script can access the variables. Making them private means they can't be accessed by the inspector.

The first line creates a variables of type CharacterController. This is a class that is used to manage movement of your controllable character. The second line sets the controller variable to the character controller component. "gameObject" is used to access the current gameobject that the script is attached to. The "GetComponent" method searches the game object for components that are attached to it. We can reference "controller" any where in the script if we want to use any character controller functions or methods.

The last three lines are setting up the movement direction and forward directions to "Vector3.zero". This is shorthand for making a new vector3 object with the value (0,0,0). These will store the absolute move direction along with the relative forward direction.

## Update function

Since movement is constantly changing, all movement and directions need to be calculated every frame. This is perfect for Unity's predefined Update function. There are many different parts to movement so there needs to be a few different variables defining and monitoring each aspect.

    function Update()
    {
        forward = transform.forward;
        right = Vector3(forward.z, 0, -forward.x);

        var horizontalInput = Input.GetAxisRaw("Horizontal");
    var verticalInput = Input.GetAxisRaw("Vertical");

The first two lines are assigning the direction that the character is facing forward and right. I will explain why we need these in a little bit. The second two statements create variables that will store input values. These values will constantly change based off if you are pressing the up/down keys (vertical) or right/left keys (horizontal). The "GetAxisRaw" method is used instead of the "GetAxis" because the latter applies smoothing which will make our rotations less responsive. Add the next few lines after the previous two. Keep everything inside the Update function.

    var targetDirection = horizontalInput \* right + verticalInput \* forward;	

    moveDirection = Vector3.RotateTowards(moveDirection, targetDirection, 200 \* Mathf.Deg2Rad \* Time.deltaTime, 1000);

    var movement = moveDirection  \* Time.deltaTime \* 2;
    controller.Move(movement);

the first part creates a targetDirection variable that makes a direction that is currently being pressed. Your horizontalInput and verticalInput variables will return values between -1 and 1. They are the magnitudes of the direction. The right and forward variables return directions as vectors.

Since your character will be rotating when you press the left/right keys, its forward position will be changing a lot. Since the forward variable is changing based off your orientation, the verticalInput needs to know which direction is facing forward. That is why the targetDirection multiplies the forward and verticalInput variables.

The right variable value is dependent on the forward variable. It takes parts of the forward direction and can calculate the angle 90 degrees to the right of it. This gives a local x axis based off the rotation. That is why the horizontalInput is multiplied by the right direction.

This is a little conceptually heavy, so you might need to think about this for a little while.

The "moveDirection" variable stores a rotation value. It gets the current rotation and goes to the target rotation over so many seconds. The third parameter in the RotateTowards method is the rotation speed. Higher value equals means faster rotation.

The "movement" variable takes the direction and multiplies it by Time.deltaTime \* 2. This will slow down the movement to rotate by seconds instead of by frames. The last line actually moves the character controller by the amount.

## Finishing touches

If you try to play the game now, you will see the character moving around. Fantastic!!

He seems a little stubborn and doesn't want to turn at all though. We will fix that next.

    transform.rotation = Quaternion.LookRotation(moveDirection);

this takes the transform (the main orientation of game object), and rotates it by moveDirection. We already set up moveDirection earlier for the angle we want it to be at.

Success...but wait. If you take your hand away from the controls for a second, he will auto-magically rotate back facing right. Dang!

So close. One more thing to fix that. Wrap this if statement around the last line you put in. It should look like this.

    if (targetDirection != Vector3.zero)
    {
        transform.rotation = Quaternion.LookRotation(moveDirection);
    }

What this does is that the game object will only try to rotate if the targetDirection is NOT zero. When you take you hand away from the keyboard for a split second, the input values will show (0,0,0), so it thinks that is the target direction.

It isn't,but it doesn't know that. The only time that value will show is when you take your hands off, so the if statement simply ignores input when you take your hands off everything.

One last thing. Add this after the entire Update function at the bottom:

    @script RequireComponent(CharacterController)

This will make sure a Character Controller component is attached to the game object that the script is attached to. If you forget to add one and you press play, this line will automatically add a component to the game object and save you from a nasty error.

Hit play and watch your character move and rotate around.

## Final Thoughts

If for some reason you scrolled down to get the source without reading anything, here is the [project set up files](/unity3d/3rdPersonBasicMovement.rar) and source.

This is a good first step in understanding how basic character movement is put together. A fully done character is complicated, but understanding these concepts are fundamental to building more advanced setups. This set up might seem weird with how the character moves, but when a camera is added along with a few other elements later, it will all make sense. I will try to continue where this example leaves off and explain more with collisions and actions like jumping in the next post.
