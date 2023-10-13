---
title: "2023 Building Krita from Source on Ubuntu"
date: "2023-09-02"
draft: true
---

## Step 0: OS
We need to currently use Ubuntu 22.04. One of the big reasons is that the Python version that Krita uses is 3.9. It needs to be that exact version, otherwise there are issues building dependencies. The OS itself has a dependency on a specific version of Python. Changing the Python version could also likely destroy the OS. 

Download the Ubuntu 22.04 ISO image from their website.

- Windows: You can use the program "Rufus" to burn the ISO to a USB for installing
- Ubuntu: You can use the program "Startup Disk Creator" to burn the USB for installing


## Step 1: OS packages for building
Before we can start any building or installing, our OS needs to have some tools and packages to build and work with code. 

Packages needed to get the cmake and compiler just buiding
    sudo apt install git cmake build-essential extra-cmake-modules

Packages needed for Qt frameowork:
    sudo apt install libkf5archive-dev libkf5completion-dev libkf5config-dev libkf5coreaddons-dev libkf5guiaddons-dev libkf5i18n-dev libkf5itemmodels-dev  libkf5itemviews-dev libkf5widgetsaddons-dev libkf5windowsystem-dev libkf5kiocore5 qtbase5-dev libqt5svg5-dev qtdeclarative5-dev libqt5x11extras5-dev libqt5opengl5-dev qtmultimedia5-dev qttools5-dev

Other packages:
    sudo apt install gettext libcurl4-gnutls-dev libtiff5-dev libjpeg-turbo8-dev libeigen3-dev libxi-dev libboost-all-dev libopenexr-dev libexiv2-dev  libgsl-dev liblcms2-dev libpoppler-qt5-dev shared-mime-info libraw-dev libfftw3-dev libopencolorio-dev vc-dev libpng-dev python3-sip-dev python3-pyqt5 pyqt5-dev libquazip5-dev libmypaint-dev libfontconfig1-dev libfribidi-dev


## Step 2: Start creating folders and download Krita source code

Create a folder where we will store everything. I have mine here:
~/git/krita

Open a terminal and navigate to the location above. Run this command 

    git clone https://invent.kde.org/graphics/krita.git

After it is done, I change the folder name from "krita" to "source" as that is more descriptive.
    mv krita source

Build out a few more folders. We will need them to build out everything needed for Krita:

krita folder
- build folder
- install folder
- source folder
- deps-build folder
- deps-download folder

command that create all these folders: mkdir build install deps-build deps-download

So we will end up with 5 folders in the end inside the ~/git/krita folder

## Step 3: CMake configuration Part 1 - Dependencies

Move the command line current directory so you are in your "deps-build" folder.
   cd deps-build

Run this command to set a variable:
    BUILDROOT=~/git/krita

Then:

    cmake ../source/3rdparty -DINSTALL_ROOT=$BUILDROOT/install -DEXTERNALS_DOWNLOAD_DIR=$BUILDROOT/deps-download -DCMAKE_INSTALL_PREFIX=BUILDROOT/install 


That sets up the cmake build settings. Now we need to actually build the dependencies like this:

    cmake --build . --config RelWithDebInfo --target ext_lager
    cmake --build . --config RelWithDebInfo --target ext_unibreak
    cmake --build . --config RelWithDebInfo --target ext_xsimd
    cmake --build . --config RelWithDebInfo --target ext_openssl
    cmake --build . --config RelWithDebInfo --target ext_webp
    cmake --build . --config RelWithDebInfo --target ext_openjpeg
    cmake --build . --config RelWithDebInfo --target ext_nasm
    cmake --build . --config RelWithDebInfo --target ext_tiff
    cmake --build . --config RelWithDebInfo --target ext_boost
    cmake --build . --config RelWithDebInfo --target ext_fftw3
    cmake --build . --config RelWithDebInfo --target ext_eigen3
    cmake --build . --config RelWithDebInfo --target ext_expat
    cmake --build . --config RelWithDebInfo --target ext_exiv2
    cmake --build . --config RelWithDebInfo --target ext_lcms2
    cmake --build . --config RelWithDebInfo --target ext_giflib


What this does is goes into our source files, looks up the instructions to build the library, builds it, then copies the files to the install folder. When you build Krita, Krita will look in the install folder for these libraries, so you don't have to worry about copying these dependencies to anything to a /user/local.


NOTE: ffmpeg is failing to build with error "No package metadata was found for meson". 
-- need to retry this after installing meson

Note: mlt is failing to build with error "Malformed value in cross file variable c". Issue is related to ext_libtheora

## Step 3.1 Building Dependency - HarfBuzz

You need a specific version of Harfbuzz...which is a lot newer than what is in ubuntu 20.04. There is no "ext_dep" type build in the source code's 3rd party folder, so we will build and install in manually. This is a good process to see and understand in case other libraries need to be compiled from source after this is written.

1. Download the 4.4.1 release from here (get the tar.xz archive and extrace it anywhere): https://github.com/harfbuzz/harfbuzz/releases/tag/4.4.1
2. Extract the folder in your downloads
3. Make a new folder called something like "harfbuzz-build". Open the terminal up in this build folder
4. run the cmake command in it to get it ready: cmake -S ../harfbuzz-4.4.1 -B .
5. If all is good with that build it: sudo make install

For some reason one of the files do not get installed, so we need to do it manually. Otherwise building krita will quickly give you an error:

    sudo cp ~/Downloads/harfbuzz-4.4.1/src/hb-ft.h /usr/local/include/harfbuzz/

We need the sudo...otherwise the terminal won't have access to copy the final files to the /usr/local/ folder.

If we go back to and try to build Krita, it should say Harfbuzz is found.

## Step 3.2 Building dependency - Meson (optional)
Meson is another build system. The package that comes with Ubuntu 22.04 is too old, so we need to get a newer one. The version that we need as of this writing is 0.57.1. This will help build the MLT library.

1. Download: https://github.com/mesonbuild/meson/releases/download/0.57.1/meson-0.57.1.tar.gz
2. Unzip that in the downloads folder. Make a new folder right by the extracted folder called "build"
3. Go into that folder and right click, start terminal
4. Build with command: ln -s ../meson-0.57.1/meson.py .
5. Make a new folder in our build-deps folder called "extra-build-tools
6. Copy the meson.py file to the extra-build-tools folder.

Add this new location to our path so the build system can find it.

    export PATH=$(pwd)/extra-build-tools:$PATH




### Step 4: Building Krita

Go into the build directory. This where we will build Krita

    cd ~/git/krita/build

Run the following command. This will show us if we have everything we need to actually build Krita.

    cmake -DCMAKE_INSTALL_PREFIX=$HOME/git/krita/install $HOME/git/krita/source -DCMAKE_BUILD_TYPE=RelWithDebInfo -DBUILD_TESTING=OFF -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYQT_SIP_DIR_OVERRIDE=/usr/share/sip/PyQt5 -DEXTERNALS_DOWNLOAD_DIR=$HOME/git/krita/deps-download -DKRITA_ENABLE_PCH=off -DHAVE_MEMORY_LEAK_TRACKER=FALSE -DHIDE_SAFE_ASSERTS=ON

There is pretty much a 100% chance this isn't going to go to completion when you first run in. What follows is probably the most difficult part of getting Krita with getting all the dependencies working.



### Temporary Notes
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates

sudo apt-get install gnupg
sudo apt-get install software-properties-common
sudo apt-get install wget
sudo apt-get install rsync # probably don't need these
sudo add-apt-repository -y ppa:ubuntu-toolchain-r/test


Note: Trying to run multiple commands in one line with && are having odd lock issues with dpkg
      Running the commands individually seems to clear thisup
sudo apt-get update 
sudo apt-get upgrade -y
sudo add-apt-repository -y ppa:ubuntu-mozilla-security/rust-updates
sudo apt-get update
sudo apt-get install -y cargo rustc
sudo apt-get install -y locales
sudo apt-get install -y automake gcc-11 g++-11 libxml-parser-perl libpq-dev libaio-dev
sudo apt-get install -y bison gettext
sudo apt-get install gperf libasound2-dev libatkmm-1.6-dev libbz2-dev libcairo-perl libcap-dev libcups2-dev libdbus-1-dev
sudo apt-get install libdrm-dev libegl1-mesa-dev libfontconfig1-dev libfreetype6-dev libgcrypt-dev libgl1-mesa-dev
sudo apt-get install libglib-perl libgsl0-dev libgsl0-dev gstreamer1.0-alsa libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev
sudo apt-get install libgtk2-perl libjpeg-dev libnss3-dev libpci-dev libpng-dev libpulse-dev libssl-dev 
sudo apt-get install libgstreamer-plugins-good1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base


sudo apt-get install gstreamer1.0-plugins-good gstreamer1.0-plugins-ugly libtiff5-dev libudev-dev libwebp-dev flex libmysqlclient-dev

# Mesa libraries for everything to use
sudo apt-get install libx11-dev libxkbcommon-x11-dev libxcb-glx0-dev libxcb-keysyms1-dev libxcb-util0-dev libxcb-res0-dev libxcb1-dev libxcomposite-dev libxcursor-dev libxdamage-dev libxext-dev libxfixes-dev libxi-dev libxrandr-dev libxrender-dev libxss-dev libxtst-dev mesa-common-dev libxcb-xfixes0-dev libffi-dev



# Krita's dependencies (libheif's avif plugins) need meson and ninja, both aren't available in binary form for 16.04
# The deadsnakes PPA packs setuptools and pip inside python3.9-venv, let's deploy it manually
sudo add-apt-repository -y ppa:deadsnakes/ppa  && sudo apt-get update 
sudo apt-get install -y python3.9 python3.9-dev python3.9-venv 


python3.9 -m ensurepip 
python3.9 -m pip install meson ninja



# use newer version of gcc as some libraries need these
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 10 && sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 20 && sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-9 10 && sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-11 20









