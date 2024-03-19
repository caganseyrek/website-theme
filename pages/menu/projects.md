---
layout: listpage
title: Projects
permalink: /projects
---
<div class="listings">
	{% for project in site.data.projects %}
	<div class="list-entry">
		<span class="list-entry-title" href="{{ project.site_link }}">{{ project.name }}</span>
		<div class="list-entry-desc">{{ project.desc }}</div>
		<div class="list-entry-buttons">
			<a class="list-entry-button article" href="{{ project.site_link }}">Article</a>
			<a class="list-entry-button source" href="{{ site.github_profile }}{{ project.github_link }}" target="_blank">View Source</a>
		</div>
	</div>
	{% endfor %}
</div>