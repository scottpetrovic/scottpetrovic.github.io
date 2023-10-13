---
title: "Building Krita for Windows in 2023"
date: "2023-10-11"
featured_image: "/images/winner-graphic.jpg"
---

If you want to start developing for the Krita drawing and painting  (krita.org), developing on Windows is the easiest path in 2023.  This is the general guide for building Krita from the source code.

If you don't care about history, skip to the next section. Near the end of 2022, and through 2023, the drawing and painting application Krita has been updating/replacing a few of their core C++ libraries. These new libraries have a much deeper feature set. For example the animation system switched from QtMultimedia to MLT (https://www.mltframework.org/). With MLT, Krita can now build out multi-track audio files, show wave forms, and sequencing. These features are more in line with video editors and dedicated animation software. 

There are a few libraries as well including the text engine. The new libraries are making the build process quite a bit more difficult.  I haven't been able to build Krita in a while...until now. 



## Tools to install before we start

  - **GIT**: Version control software to retrieve the Krita source code (https://git-scm.com/downloads)
  - **Cmake**: Build system for configuring all the source code https://cmake.org/download/ (get latest)
  - **LLVM MinGW**: C++ compiler for building. The exact version is pretty important as it is tested.  (https://github.com/mstorsjo/llvm-mingw/releases/download/20220906/llvm-mingw-20220906-ucrt-x86_64.zip)
- **PyEnv**: Tool to manage our Python installs. Krita supports Python plugins. We will go over how to get this and use it later in this guide. 

### Make sure tools are accessible on command line
The above tools will be ran from a command line. It is important that the command line can see them for everything to work. You should be able to run these commands for testing. See tips below for any issues.
  
After you install GIT, try this

    git --version
    
After you install cmake, try this

    cmake --version
*Tip - This might be a portable version. In my version, I made a folder called 'C:\platform-tools' where I dropped the folder.  I then added an environment variable pointing to the bin folder inside this that contains the cmake.exe .*

After you install mingw, try this

    mingw32-make --version
*Tip - This is a portable version like cmake. You will need to make an environment variable pointing to the executable files. Mine is located here 'C:\llvm-mingw\bin'*
 
 ## Install PyEnv and Python 3.10
 Python is usually a system install, but projects have a tendency to switch versions frequently. This tool makes it easy to switch your system's Python version without having to uninstall, finding a new version online, and installing that.

Open up PowerShell. This tool will need file access to move around Python versions and files, so we need to install it with PowerShell to give this tool access.

    Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"

Open up a new command line window and test to make sure it is installed

    pyenv --version
Once that is verified, there are a few important commands to know about

- **pyenv install -l** : check which versions of Python can be installed
- **pyenv install \<version>** : Install Python version(s) you might want to use.
- **pyenv global \<version>** : Switch your global python version
- **pyenv version** :  See which version of Python you are using

Using these commands, download and switch to Python 3.10.10. 


See instructions here for more information if interested: https://github.com/pyenv-win/pyenv-win

## Download all pre-built dependencies
Avoid building all the outside libraries manually. This will save a lot of hours of build time alone.  Download and unzip this. I put mine in C:\git\krita\install

Download them all here: https://binary-factory.kde.org/job/Krita_Nightly_Windows_Dependency_Build/

In case there is some issue in building, it is a good idea to make a copy of this folder, I made a copy here C:\git\krita\deps-10-12-2023

In the end when Krita is being built and installed, everything will be copied to this install folder. 

**Add this "install" folder to your environment variable as well. This will make sure the  building will be able to find any dependencies. Otherwise you will have issues building**.

## Download Krita Source code
The official source code is found on KDE's own Gitlab repository - not Github. We will use that as it is the official one.  https://invent.kde.org/graphics/krita

    cd C:\git
    git clone https://invent.kde.org/graphics/krita.git
*Note - If you later want to eventually do pull requests to get your code back into Krita, you will eventually fork off repository this and use the SSH version*.

After this is cloned to your computer, I rename the folder to "source" to keep it clear in my mid (i.e. C:\git\krita\source)

## Building
Whew...that was a lot of setup just to build. As complicated as that might have seemed, building all the dependencies manually is quite a bit more complex.

Now create a new folder called "build". I put mine at C:\git\krita\build. Start a command window and go into this build folder. Run this cmake command to configure your build. This will check to see if we have all the dependencies ready before we actually build Krita.

    cmake ../source -G "MinGW Makefiles" -DCMAKE_INSTALL_PREFIX=../install -DCMAKE_BUILD_TYPE=Debug -DKRITA_DEVS=ON

The command line will start going through a checklist of all of the things it needs to build Krita. If it fails here, make sure the "install" directory is part of the environment variables. All the binary and code files Krita needs to build should be in there. The main thing you want to see is "Configuring Done" without errors.

Next type this command to build Krita. Replace the 8 with how many threads your CPU has. If you have a 6 core processor, you will have 8 threads:
    
    mingw32-make -j12 install
   
   This can take an hour or so...depending on how good your CPUs are. With fingers crossed, the build should finish ok. The 'install' portion of the above command will copy the final build files into the install folder we made. 

## Launch 
Finally, go into your install folder. You can do this in the normal file browser, or the command line.  Find the bin folder and go in that. Then find "krita.exe" and start it. 