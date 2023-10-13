# Scott Petrovic blog

This is a personal blog. It is built using Hugo. Hugo is a static site generator that is really fast.

## Dependencies

- Hugo: Command line tool used to build project'. https://github.com/gohugoio/hugo

Linux command: sudo apt install hugo
Windows: Hugo is a command line tool. Download the executable (exe) file and put it in a place where you can run it. This is usually done by adding it to your environment variables, or putting the executable in a location that already is in your environment variables. I have a location of C:\platform-tools that I put all my commonly needed tools in.

## Building and launching

Open the root location in something like Visual Studio Code. Open the command prompt up and type the following:

    hugo server -D

This will build and run the project under a localhost. Hugo also has a watch process, so changes that are done will be updated. The -D flag includes posts that are marked as drafts

## Adding or editing posts

Add a new MD file to the content > posts area. See other markdown files for reference. If you are running the build, the project should automatically update.

## Final production build

Run the command: 
    hugo

The files will be generated to the Public folder. You should be able to copy that to the web server.