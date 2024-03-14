---
title: Repositories
permalink: /repos
editlink: /edit/main/pages/menu-pages/repositories.md
---

{% for repo in site.data.repositories %}
<div class="repository-container">
    <h2>{{ repo.name }}</h2>
    <p>{{ repo.desc }}</p>
    <div class="repository-info">
        <p class="repository-tags" markdown="1">
        {% for tags in repo.tags %} `{{ tags }}` {% endfor %}
        </p>
        <div class="repository-links">
            <a href="{{ site.github_profile }}{{ repo.github_link }}" target="_blank">See on GitHub</a>
            {% if repo.docs == false %}
            <a class="unavailable" target="_blank">Documentation</a>
            {% else %}
            <a href="{{ site.site_url }}{{ repo.docs }}">Documentation</a>
            {% endif %}
        </div>
    </div>
</div>
{% endfor %}