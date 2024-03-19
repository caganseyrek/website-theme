---
layout: listpage
title: Articles
permalink: /articles
---
<div class="listings">
	{% for article in site.data.articles %}
	<div class="list-entry">
		<a class="list-entry-title" href="{{ article.site_link }}">{{ article.name }}</a>
		<div class="list-entry-desc">{{ article.desc }}</div>
		<div class="list-entry-tags">{% for tag in article.tags %}<span class="list-entry-tag">{{ tag }}</span>{% endfor %}</div>
	</div>
	{% endfor %}
</div>