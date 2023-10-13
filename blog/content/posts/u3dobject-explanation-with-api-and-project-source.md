---
title: "U3DObject explanation with API and project source"
date: "2010-03-28"
categories: 
  - "actionscript-3"
  - "computer"
  - "game"
  - "interaction-design"
  - "unity3d"
  - "web-design"
tags: 
  - "actionscript"
  - "externalinterface"
  - "u3dobject"
  - "unity3d"
---

![u3dobject logo](./images/u3dobj_logo.png "u3dobject logo")

I have been working with U3DObject for a a few weeks now and have been getting familiar with it. Because there is so little documentation with it, it is a little hard to figure out how everything works and is organized. The company that created this isn't an English company, so some of their English is a little bit hard to interpret in their documentation. In this post, I will try to explain the structure of the U3DObject framework as well as talk about the API.  A small stripped down demo project was made to better help understand the concepts. Take a look at [the demo project](http://www.scottpetrovic.com/demo/u3dObject/) that I will be going over.

## Where to start?

One of the things that was the most frustrating was that some of the files in the Google Code version are off. There is a lot of extra files that are confusing and a couple javascript calls in the API were wrong. First,  grab the source project I made and look it over.

![get_source_button](./images/get_source_button.png "get_source_button")

## Folder Structure and organization

![u3dObject_sections](./images/u3dObject_sections.gif)

If you open up the BasicExample folder, you will see three sections: flash, html, and unity. The flash and unity sections have the source files that will have the different assets and scripts needed to build the swf and unity3d files. These folders are where you will spend most of your time in. The html section has the final web files that will be uploaded to the server. I set the system up so that when you publish your flash files, it will export to the swf folder of the html section. Likewise, when you build your unity3d application, you will build it in the unity folder of the html section.

The reason for this is partly because of how the framework is designed. Because communication between the two programs need javascript to link up flash and unity, putting the files in the final html section put them in the right place for javascript to work right. it is designed so you don't have to worry about javascript.

The two things that take time to learn are the two APIs for Unity and Flash. With a little help and the sample file, hopefully it won't take too long.

## Flash as a foundation

    < !DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <script src="js/jquery-1.3.2.min.js" type="text/javascript"></script>
    <script src="js/u3dobject.js" type="text/javascript"></script>
    <script src="js/unitydetect.vbs" language="VBScript"></script>
    <script src="js/swfobject.js" type="text/javascript"></script>

    <script type="text/javascript">
        function initialize()
        {
            //$.u3dobject.embed("div_unity", "unity/game.unity3d" , {width:600, height: 500});
        <div></div>
        var flashvars = { root_url: " "};
        var params = { 'allowScriptAccess': 'always'};
        var attributes = {};
        attributes.id = "flash_content";
        swfobject.embedSWF("swf/application.swf", "flash_content", "500", "300", "9.0.0", "swf/expressInstall.swf", flashvars, params, attributes);
    }
    </script>

 
    

When you look at the index.html file, you will notice a lot of javascript includes and a couple of divs with unity and flash IDs.  You shouldn't have to touch or worry about any of the javscript includes  in the header. You might have to update the initialize() function that embeds the  flash file with different dimensions.

One thing to know right away is that flash is controlling the show with this framework. If you load the page, Flash starts up and Unity is no where in sight. You can load, hide, show, send events, function and more through Flash. The project can show you some of the commands that will be sent. For Flash to communicate to Unity, it has an API written that is called **ExternalInterface**.   Through this API, you can do what you need to do. Here are the API calls you can do with a short description. The APIs  are also in the project files oustide of the three sections.

## Flash ExternalInterface API

**initialize ( maxTimeOut:_int_):_bool_ initialize ():_bool_** Initializes the interface. Required to start before you do anything else. Checks if Unity and ExternalInterface are available in the page. Second inititialize constructor with no paramaters uses a default value of 5 for the maxTimeOut.

**addEventListener ( callFunction:_function_):_void_** Adds a listener for UnityInterface events. callFunction gets called when Unity sends an Event to Flash.

**removeEventListener ( callFunction:_function_):_void_** Removes a listener for UnityInterface events.

**dispatchEvent ( eventName:_String_, parameters:_\*_ ):_void_** Dispatches a UnityEvent within Flash. No external communication is done with this.

**dispatchUnityEvent(eventName:_String_, parameters: _\*_,  unityCSSID:_String_):_void_** Dispatches an event inside the unity 'ExternalInterface' game object, calling the function 'OnExternalEvent'. You need to have an addListener attached to the Unity gameobject script for this to register

**embed( width:_Number_, height:_Number_, fileName:_String_, unityCSSID:_String_):_bool_** Embeds the unity in the div and starts its download.

**call(functionName:_String_, gameObject:_String_, unityCSSID:_String_):_void_** Calls a Unity method within the application with the format 'function\_name(params …)

functionName:  Function to call in the format 'function\_name(params ...)' gameObject: Unity game object in the application that has the function being called. UnityCSSID: Div inside the HTML that contains the Unity application.

**showUnity(unityCSSID:_String_):_void_** Shows the Unity application in the page.

**hideUnity(unityCSSID:_String_):_void_** Hides the Unity application in the page.

**hasUnity():_bool_** Flag that indicates the presence or absence of the Unity webplayer.

**pluginDownloadPath():_String_** Link to the Unity webplayer installer for the platform running the swf.

**Additional Notes about Flash** some of the parameters like unityCSSID and gameObject are stored in variables in the flash file, so they can be switched easily. The actionscript is commented fairly well, so you can see what is going on. I tried to keep it pretty simple and contained with each function. Before looking at it too much, it would be good to look at the Unity script and API to see how things are received and sent on the other side. Onwards!

## Unity3D ExternalInterface API

As you can expect, there is a Unity ExternalInterface class that performs similar actions. Since Unity doesn't have that much control, there are less things that it can do to flash. Here is the list.

**AddListener ( _ExternalEventListener_ listener)** Adds an event listener to this interface, so you will be able to receive External Events.

**RemoveListener ( _ExternalEventListener_ listener)** Removes an event listener to this interface, so you will stop receiving events from the class

**DispatchFlashEvent( _string_ flashID, _string_ event, _params object\[\]_ sendingparams)** **DispatchFlashEvent( _string_ event, _params object\[\]_ sendingparams)** Calls the specified flash function (listen to an OnUnityCall event inside your flash). Second function is used if ExternalInterface initialized the flashID already.

**LoadProgress( _string_ flashID, _float_ progress)** **LoadProgress( _float_ progress)** You must actively call this method to inform external listeners (outside Unity) how is the loading progress of your game going. Second function is used if External Interface initialized the flashID already.

**LoadComplete(_string_ flashID)** **LoadComplete()** You must actively call this method to inform external listeners (outside Unity) that your game have finished loading. econd function is used if External Interface initialized the flashID already.

**Initialize()** **Initialize(_string_ flashID)** This method will initialize the externalinterface. You must call it before you can start receiving external events. FlashID in the second function is used to identify flash when calling it.

Note: Unity will create a Gameobject called “ExternalInterface” and attaches the ExternalInterface script when you use this method. Also, when you call this while providing the flashID, you can use a lot of the other calls that don't require the flashID as a parameter. The class stores it in the ExternalInterface as a static variable.

**OnExternalEvent(_string_ params)** Method called by the U3dObject proxy (JS outside Unity). Remember to attach an instance of this class to your scene. Params is the data coming from external side (see u3dobject.js)

**Unity3d ExternalInterface Notes** Like Flash, Unity needs an External Interface class to communicate as well. Why not use the existing _Application.ExternalCal_l to do the communicating? Well, the external _u3dobject.js_ is actually using the jQuery framework to manage and call the objects, so the external interfaces have the jQuery object names as constants. When you are calling external function in Flash or Unity, those calls are actually going through processes where it figures out which javascript call it needs to do, parses parameters, and sends it to the other side. All of the complexities of communication are simplified by using this.

You can take a look at the C# or actionscript files in the project to understand it better. Let me know is anything is unclear or I left anything out!

## Next

I have been looking and doing a lot of programming, so I think I will take a little break and do more art related things. Maybe some concept art. I have been reading some articles on better ways to do texturing, so eventually the art might turn into 3d models. I need to beef up [my portfolio](http://www.scottpetrovic.com) a little more this year, so maybe adding some 3D work would be good.
