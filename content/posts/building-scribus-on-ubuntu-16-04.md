---
title: "Building Scribus on Ubuntu 16.04"
date: "2016-07-30"
categories: 
  - "computer"
---

Scribus is a free, open source application for page layout and design. This is my quick guide to build the program from source on Ubuntu 16.04. This will build the 1.5.x development version. It has some tweaking that still needs to be done, but at least it works and is pretty straight forward. **All of these steps are being done from the command line**. Go to your search bar at the top left and type "Terminal" if you don't know how to get to it.

### Setup and Dependencies

1\. **Create folders** - Setup everything before we get started downloading and building. The ~ symbol is your home directory. The last command just puts us in the source directory where we will later download the source code.

    cd ~
    mkdir svn
    cd svn
    mkdir scribus
    cd scribus
    mkdir src
    mkdir build
    mkdir inst
    cd src

 

2\. **Install dependencies** - This is a lot of extra stuff that  Scribus needs to work right. They add all kinds of functionality to the program when it is done. Most of them are required so you cannot skip this step.  Type in your password to start. Click "Y" to continue if prompted. This might take a little bit of time.

    sudo apt-get install subversion libqt5webkit5-dev libqt5webkit5 qt5-default libopenscenegraph-dev libgraphicsmagick++1-dev libgraphicsmagick1-dev graphicsmagick cups libcairo2 python-tk python-pil libpoppler-dev libpodofo-dev libxml2-dev libtiff5-dev libjpeg-dev libhunspell-dev libfreetype6-dev libfontconfig1-dev libcups2-dev libpixman-1-0 libpixman-1-dev libcairo2-dev libboost-all-dev gcc cmake liblcms2-dev

Note: If you are not using Ubuntu you will need at least Qt 5.2 and Python 2.7.

3\. **Getting the source code** - We are already in the correct source code folder from the 1st step so we will download everything here.

    svn co svn://scribus.net/trunk/Scribus scribus15

4\. HACK ALERT: **Remove Poppler** from Cmakelist.txt (in the scribus15 folder). It is not finding the include directory for some reason, even though it is installed. I need to do more research on this later to figure out what the issue is. Remove the whole area of text that has "Poppler for PDF import". it is around line 800 of the file.  The cmake step fails if this isn't done. If you are not on Ubuntu, this may not be an issue. I don't remember this issue on Ubuntu 15.10.

5\. Change directory to the build location. We want to build everything outside of the source folder.

    cd ../build

 

6.**Create build files -** We are in the build directory, but need to tell cmake where our source files are at; that is the last part of this command  ../src/scribus15

    cmake -DWANT\_GRAPHICSMAGICK=1 -DCMAKE\_INSTALL\_PREFIX:PATH=~/svn/scribus/inst ../src/scribus15

7\. **Compile** - You can add a parameter to use more of your computer cores and make it build faster. I have 8 cores so mine looks like this (make -j9). Cores + 1.

    make

8\. **Install** - Scribus. You can also use the "-j9" trick on this step too.

    sudo make install

9\. **Launch** - You will need to go to the inst directory and then into the bin folder. The last command "./" lets the OS know that we want to do something in the current directory. There is an execucutable file called Scribus in there that it is running. You can also just go there in your folder browser and double click the file to launch it.

    cd ../inst/bin
    ./scribus
