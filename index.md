---
layout: homepage
title: Home
permalink: /
lastedited: March 2024
---
## About Me
I began my web development journey in around 2014-2015 with HTML, CSS, and a little bit of JavaScript (more like designing than development, haha). Currently, I work with (and continue to learn) several programming languages, including JavaScript, TypeScript, C#, Java, and Python. Additionally, I am familiar with frameworks such as React, Express and ASP.NET Core.

I plan to start working with Ruby and PHP within the language category, and explore Ruby on Rails, Django, Laravel, and Spring in the framework category.

## About This Website
Here, I plan to create tutorial-like articles about various frameworks and languages that I learn, write documentation for my projects, and explain how I created them. I may also cover some new topics related to web development or full-stack development that interest me.

This website is design by me but generated with a static site generator named <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> and hosted on <a href="https://pages.github.com/" target="_blank">GitHub pages</a>. You can check <a href="#soon">my article</a> to learn how to make a Jekyll website for GitHub Pages.

Most of the images I used in the headers are from Unsplash.

Icons used in this website (except the GitHub logo) are under the <a href="https://github.com/google/material-design-icons/blob/master/LICENSE" target="_blank">Apache License Version 2.0</a>. The original work is from Google Material Icons and can be found at <a href="https://fonts.google.com/icons" target="_blank">https://fonts.google.com/icons</a> or at <a href="https://github.com/google/material-design-icons" target="_blank">https://github.com/google/material-design-icons</a>. The icons' colors are changed to (#E1E5EE) or (#2A324B).

## Highlights
<div class="listings home-listings">
	{% for project in site.data.projects %}
	{% if project.highlighted == true %}
	<div class="list-entry">
		<a class="list-entry-title" href="{{ project.site_link }}">{{ project.name }}</a>
		<div class="list-entry-desc">{{ project.desc }}</div>
		<div class="list-entry-buttons">
			<a class="list-entry-button article" href="{{ project.site_link }}">Article</a>
			<a class="list-entry-button source" href="{{ site.github_profile }}{{ project.github_link }}" target="_blank">View Source</a>
		</div>
	</div>
	{% endif %}
	{% endfor %}
</div>