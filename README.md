## About
This is a github page, but is also a web host serving up content. Right now I am using it to come up with my Oculus Quest 2 VR projects as I am learning how to create interactions on the web. The public base URL to get to HTML version of the page is  https://scottpetrovic.github.io/

The project(s) use https://aframe.io/ to build out the experiences. This library is an abstraction layer on top of https://threejs.org/. It is said to have easy access to THREE.js functionality if needed, so it should be easy to extend needed. I have been either testing this in the Firefox Reality browser (downloaded in store for free), or the Oculus browser (pre-installed).


## Current Test Projects
A note about using VR experiences in web browser. Most of the time there is no easy way to get out with X, or exit button. To get out, I tap the "Oculus button" on the controller. This brings up an overlay that allows you to exit. It looks like you are exiting the entire web browser, but it only gets you out of the full experience mode. Probably a better and more user friendly way to exit out in code.

- [A-frame test project](https://scottpetrovic.github.io/aframe/min.html) - A bare bones VR experience with a static cube. If you are on an Oculus Quest 2 and visit this page, there will be a "VR" button in the bottom right in the browser. Clicking it will go full screen. See note in description about exiting.
- TODO - Controller recognition and button triggers
- TODO - Controller interaction with grabbing and releasing objects
- TODO - Better user experience option for exiting VR


## Updating and building new versions of the site
The homepage (this page) is built using a [Jekyll](https://jekyllrb.com/) static site generator. Github has it setup to build automatically, so all you have to do is update the README file. After you make a commit, the page will update in about a minute as it rebuilds.

It is the README file on the project. I am using https://dillinger.io/ to preview what the results will be. I just copy the markdown code into it, do my editing, then copy back over to github and save.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/scottpetrovic/scottpetrovic.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
