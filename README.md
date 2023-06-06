# mogul-christmas

<div align="center">
<img src="https://socialify.git.ci/KendallDoesCoding/mogul-christmas/image?description=1&descriptionEditable=Ludwig%20Ahgren%20made%20a%20Christmas%20Album%20in%202020.%20This%20project%20allows%20you%20to%20play%20all%20the%20songs%20from%20the%20album%20in%20your%20browser.&font=Inter&forks=1&issues=1&name=1&owner=1&pattern=Solid&pulls=1&stargazers=1&theme=Dark&cache=600" />
<a href="https://github.com/KendallDoesCoding/mogul-christmas">
<a href="https://github.com/KendallDoesCoding/mogul-christmas"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/KendallDoesCoding/mogul-christmas/graphs/contributors"><img src="https://img.shields.io/github/contributors/KendallDoesCoding/mogul-christmas?color=brightgreen"></a>
<a href="https://github.com/KendallDoesCoding/mogul-christmas/issues?q=is%3Aissue+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed-raw/KendallDoesCoding/mogul-christmas?color=yellow"></a>
<a href="https://github.com/KendallDoesCoding/mogul-christmas/pulls?q=is%3Apr+is%3Aclosed"><img src="https://img.shields.io/github/issues-pr-closed-raw/KendallDoesCoding/mogul-christmas?color=0059b3"></a>
</div>

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/KendallDoesCoding/mogul-christmas)



# Introduction

This is a project where you can play all the songs by a click of a button which you can already do from the timestamps but what makes it unique is that it has lyrics of the songs and a bunch of other features like a photo gallery.

On the 18th of December 2021, I was bored, so I created this basic HTML Project. I felt like continuing with this fun project, so I enlisted the help of a few contributors.

## Check it out here
The project website is hosted [here](https://kendalldoescoding.tech/mogulchristmas)!

Backup URL: [Backup Domain](https://mogulchristmas.netlify.app)

Make sure you check it out.

# Build Status

You can view the versions & previews [here](https://mogulchristmas.kendalldoescoding.gq/versionsandpreviews)

**Please Note: This only has 25 releases, at the time of writing this (21st September 2022, 6:29pm IST) there are 87 more releases not added to this list.**

- For updates on the website, I've written it as a Version, and for updates on Github we've written it as a Release, for Releases, we've provided a complete changelog.

- If you would prefer dark mode on this site, you can toggle dark mode on or off by using the button in the top right corner of the site.

Please note that since version 8.0, we have updated how the website looks so that there is no embed/iframe. While that does slow down the performance(how fast the song plays and the user does not know if the song is loading or not), the song should play in 1-5 seconds. In case of any issue, please create a bug report issue using the template in the issue panel in this repo. 
However, since the release of 10.5.0, the songs have started playing a little faster than they used to, only taking only 1-4 seconds.


# Deploy Status

Below, you can see the progress of the GitHub deployment to the site. In case a change is made to this repo, it takes around 2-5 minutes to display on the site, depending on if there are other deploy's going on within Pull Requests or within repos that have sites, because using Netlify, I can only deploy one thing at a time.

[![Netlify Status](https://api.netlify.com/api/v1/badges/c9a61158-0ccb-489e-ba45-85eafcf4bc3b/deploy-status)](https://app.netlify.com/sites/mogulchristmas/deploys)


# Images From Website
## Landing Page
<img src="images/screenshots/main-page.png" alt="Landing Page"/>

## Landing Page (Dark Mode)
<img src="images/screenshots/main-page-dark-mode.png" alt="Landing Page darkmode"/>

## Photo Gallery
<img src="images/screenshots/photo-gallery.png" alt="Photo Gallery"/>

## Songs With Lyrics
<img src="images/screenshots/lyrics.png" alt="Lyrics landing page"/>

## Recommended Songs
<img src="images/screenshots/rate-song.png" alt="Rating page"/>

## Ludwig's Socials
<img src="images/screenshots/ludwigs-social.png" alt="Ludwig Socials"/>

# Contributing Guidelines & Related Contributing Stuff

**[Contributing Guidelines](./.github/CONTRIBUTING.md)**

Your contributions are always welcome!

Please go through the active issues, before you plan to contribute.

# How to contribute

There are different ways to use git and GitHub.  
In this tutorial we will try to keep stuff simple and therefore use the command line.

## Find an issue

While viewing the repository you can use the tap "Issues" to view and filter [open issues](https://github.com/KendallDoesCoding/mogul-christmas/issues).  
There are some tags like "good first issue" or "beginner" that might be of special interest to you.


## Fork the repository

### Why should you fork the repository?
A fork of a repository is a copy that still remembers where it came from.
Advantages of this are:
- You can open your **own branches** separate from the forked (upstream) repository.
- You can easily keep your repository **up to date** by simply pulling changes from upstream.
- Once you have finished making the changes you want to make, **suggesting this changes** for the original is very easy.

Using forks and pull request makes developing with many contributors less complicated for everybody involved!

### How to fork the repository

As long as you are visiting the repository there is a button called "fork" on the top right of the page.  
By clicking it and confirming you can fork the repository.

***For the next steps you need to have git installed on your device. 
If you haven't already done that, [this page](https://git-scm.com/downloads) might help.***

## Clone your version of the repository

### Why do we clone the repository?

After forking a repository it still is not local on your device.  
For bringing the repository on your device you need to clone it.  

### How to clone

Go to your version of the repository, click on the "Code" button and choose one of three ways: HTTPS, SSH or GitHub CLI.
Copy the line beneath the method. 

Open a terminal and navigate to where you want to place the repository.  
Enter
`git clone <copied url>`

## Create a branch

**Working on branches helps keeping different versions of your code and different uncompleted features from becoming a big mess.
You ***never*** work directly on the main branch (sometimes also called master).**

Change to the repository directory on your computer (if you are not already there):

`cd mogul-christmas`

Now create a branch using the git checkout command:

`git checkout -b your-new-branch-name`

For example:

git checkout -b do-something

## Make necessary changes 

Do whatever you planned to do.

## Commit changes

### Adding files

For adding specific files:
`git add <filename>`

**Be sure only files you wish to add have been changed. Use `git status` to check.**

### Committing added files

Use  
`git commit -m "<commit message>"`
Your commit message should describe the changes you have made.

## Push changes to GitHub

To make your local changes visible for remote (so you can see and interact with them on GitHub) you need to push them.  

Push your changes using the command git push:

`git push origin <add-your-branch-name>`

## Create a pull request

In your repository on GitHub, you'll see a "Compare & pull request" button. Click on that button.

You will have the option to give some additional information to the changes your pull request is going to cause by entering text.
After you have done that, create the pull request by clicking on "Create pull request".

## Wait for review

Your reviewer might merge the request or ask for you to make some changes.  

***If there are some improvements you need to do, don't worry:***  
Everything you push on your branch will now be added to the pull request. (That is one of the reasons we need different branches for different issues!).
You can use the comments to ask for clarification if needed. As soon as the reviewer is happy, your changes will be merged.  
(Remember: your reviewer is a person who tries to work for the good of all. Don't ever be harsh with them, especially if they wish for multiple changes.)


### Happy Coding!

[Issues which new contributors can take up.](https://github.com/KendallDoesCoding/mogul-christmas/contribute)

# Credits

**Project credits are located [here](https://mogulchristmas.kendalldoescoding.tech/credits).**

_Credits include the following_:

- Mogul Christmas Team
- Project Contributors
- Singers whose songs are in the You May Like directory.

# Contributors
Thanks to all our contributors for their active support and participation!

<a href = "https://github.com/KendallDoesCoding/mogul-christmas">
  <img src = "https://contrib.rocks/image?repo=KendallDoesCoding/mogul-christmas"/>
</a>
