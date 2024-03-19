---
layout: listpage
title: Projects
permalink: /projects
---
<div class="listing-previews">
	{% for project in site.data.projects %}
	<div class="preview">
		<a class="preview-title" href="{{ project.site_link }}">{{ project.name }}</a>
		<div class="preview-desc">{{ project.desc }}</div>
		<a class="preview-project-source" href="{{ site.github_profile }}{{ project.github_link }}" target="_blank">View Source</a>
	</div>
	{% endfor %}
</div>