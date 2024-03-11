---
title: Home
permalink: /
editlink: edit/main/index.md
---

## About Me

Hello and welcome, everyone! My name is Çağan Seyrek. I am currently in my third year of studying computer engineering, and I aspire to become a full-stack web developer. 

I began my web development journey with HTML, CSS, and a little bit of JavaScript (more like designing than development, haha).  Currently, I work with (and continue to learn) several programming languages, including C#, Java, Python, JavaScript, and TypeScript. Additionally, I am familiar with frameworks such as React and Express.

I plan to start working with Ruby and PHP within the language category, and explore Ruby on Rails, Laravel, and Spring in the framework category.

***

## About This Website

I am actively trying to learn various frameworks and languages and in this website, I plan to document my journey and what I learn, as well as some of the languages/frameworks I’ve learned before but want to improve. I will try to do this in a simple and straightforward way as best as I could so others can learn and benefit from it as well.

To make it easier to navigate through the website, I would like to explain the content of each page:
 * **Dev. Articles** page cover various languages, frameworks and libraries, how they work and include a simple project to explain them better. Additionally, you may find extra information here and there throughout these pages.
 * **Topics Explained** contains descriptions of many terms that used in the Dev. Articles pages. I highly recommend navigating the Topics Explained page using the table of contents to avoid getting lost.
 * **Repositories** page contains a showcase of some of my own repositories/projects from my GitHub profile, along with explanations of how to use them.
 * **Information** page includes the sources of icons (along with any modifications).

>Additionally, if you encounter a 404 error when navigating through the left menu, it’s likely that the page doesn’t exist yet. I will try to add as much content as possible, as quickly as possible.
{: .warning}

***

## Contribution

If you find any inaccuracies or bugs on the pages, you are more than welcome to edit them.

To do this, you can fork [this website's GitHub repository](https://github.com/caganseyrek/caganseyrek.github.io), edit it then create a pull request. There is an "Improve this page" button at the top of the content across the page name for shortcut.

If you want to make a suggestion, you can do so on [discussion tab](https://github.com/caganseyrek/caganseyrek.github.io/discussions) on this website's GitHub repository.

***

## How to Edit

The website and its pages are generated with [Jekyll](https://jekyllrb.com/). The page files are in markdown format, so I recommend checking out markdown syntax before editing. At the start of each page, you’ll see something like this:

{% highlight markdown %}
---
title: Homepage
permalink: /
editlink: edit/main/index.md
---
{% endhighlight %}

This is a Front Matter block. It's basically a small block of variables that used throughout the rest of the page and in the website layout.
 * **title** is the page title appears both in HTML title element and at the top of the page contents.
 * **permalink** is the URL of the page relative to the website. For example, if we set `permalink: /test`, the page would be available at `caganseyrek.github.io/test`.
 * **editlink** provides a path to this page's GitHub repository where you can edit the current page. The path automatically appended to the website’s repository link. The "Improve this page" button across the page name uses this link.

Additionally,
 * You can add `{: .info}` or `{: .warning}` after a blockquote to transform it into a special info or warning box as used on this page.
 * To highlight a code, we can use `{_% highlight <language> %_}` before and `{_% endhighlight %_}` after the code (removing any underlines and angle brackets)

***

## Icons

Icons used in the both sidebars (except the GitHub logo) are under the [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE). The original work is from Google Material Icons and can be found at [https://fonts.google.com/icons](https://fonts.google.com/icons) or at [https://github.com/google/material-design-icons](https://github.com/google/material-design-icons).

The icons are modified for their use in this website. Their modifications are following:

  * The icons in the left sidebar, right sidebar, the mobile menu button and the color of the icon used in the mobile table of contents button have been changed to match the website’s color scheme (#E1E5EE)
  * The color of the icon used in the info box is changed to (#004074)
  * The color of the icon used in the warning box is changed to (#835501)
  * The color of the icon used before the h3 headers are changed to (#2A324B)