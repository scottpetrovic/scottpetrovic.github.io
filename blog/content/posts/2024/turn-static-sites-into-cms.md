---
title: "A novel approach for using static sites as user-friendly CMSs"
date: "2024-03-10"
featured_image: "/images/2024/static-site-process.png"
---

![](/images/2024/static-site-process.png)

Recently I finished converting the krita.org website over from WordPress to Hugo. One of the challenges with this conversion is trying to make it easy for authors to publish news posts. WordPress is just so easy to log in, make a post and publish. How can this nice user experience be replicated using a static site generation tool such as Hugo or Jekyll.


## Current issue with static site generators

There are a lot of technical hurdles that need to happen to make static site generators accessible for more people. What does a non-technical person need to understand to make the normal process work?

- How GIT works for source control
- How to pull down code and manage branches, pull latest changes
- How to run command line tools and set them up to build the site
- How to run the code on the web browser to see changes
- How to configure forks/branches and create merge requests

This code-first approach for sites make it difficult to move off a traditional CMS. This process is fine for developer types, but completely unapproachable for non-technical authors. How can we simplify, or eliminate the friction that exists in these steps?

## In-browser IDEs

With modern GIT hosting tools such as GitLab and GitHub, there are now online Web code editors (called IDEs). You can take any code base on the internet, and update files and make changes without leaving the browser. Previously I thought this didn't provide much value besides simple changes such as updating README.md files. The part where this gets interesting is that these "code editors" do more than just manage code. Not only can these online web editors change code, but you can also upload media such as images and videos. 

![](/images/2024/static-site-2.png)

Being able to upload media as well as change text was the "eureka" moment for me with this workflow.

## How the process works

If you want to see a step-by-step guide that I created for how we do this in Krita, you can check it out here... https://invent.kde.org/websites/krita-org/-/blob/master/USAGE.md?ref_type=heads

The high level workflow is the following:
1. Create an account for the gitlab instance
1. Find the project you want to edit 
1. Click the fork button to create your own version of the website
1. Open the web editor to make your changes, add files
1. Save your changes 
1. Create a review (merge request) from the website
1. After changes are made from a discussion, the changes can be pushed out to the website

None of these steps require pulling down code, running any command line tools, and require very minimal knowledge of what a couple GIT commands do with the buttons you are pressing. The built-in review process with merge requests is a nice feature that previously only developer types would need.

![](/images/2024/static-site-3.png)

## Continuous Deployment

With modern build pipelines, you don't even need developers or infrastructure to deploy this code as you might need to do with a normal static site. Merging the changes automatically can kick off a build and publish to the website like it does for krita.org. You can even set up custom rules. In addition to content changes, we have a nightly build that runs that updates the site with any translation changes that happen. The building and deploying has all been automated and bring the process closer to the more normal CMS workflow.

![](/images/2024/static-site-4.png)


## With great power...

Exposing all the files with a web editor is a double edge sword of course. Not only can authors create news posts, but they can change javascript files which can ultimately break the entire site. As stated earlier, these issues can be reduced with the review process. While there is more danger with full access to the code, it also can create awareness for people on what is going on.

If you have a good guide on how to do updates, they can safely ignore these areas. After all, they don't need to really modify anything. There are still some things we could make better:

- Better workflow for review process. When a merge request is created, it would be good to automatically add certain reviewers that need to approve. This is probably just a configuration aspect that needs to be set up.
- Better way to manage media with the review process. It is possible for people to upload a 20MB image, or a 10 minute video that is 200MB. This really can bloat the GIT repository over time. Including some type of warning would be nice if any files are over a threshold like 2MB that can be taken into account for a review.



