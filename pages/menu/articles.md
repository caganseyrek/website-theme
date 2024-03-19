---
layout: listpage
title: Articles
permalink: /articles
---
<div class="listing-previews">
	{% for article in site.data.articles %}
	<div class="preview">
		<a class="preview-title" href="{{ article.site_link }}">{{ article.name }}</a>
		<div class="preview-desc">{{ article.desc }}</div>
		<div class="preview-article-tags">{% for tag in article.tags %}<span class="article-tag">{{ tag }}</span>{% endfor %}</div>
	</div>
	{% endfor %}
</div>