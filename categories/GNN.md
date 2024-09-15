---
layout: page
title: Graph neural network in physics system
permalink: /blog/categories/GNN/
---

<h5> {{ page.title }} </h5> <!-- 이름 수정 -->

<div class="card">
{% for post in site.categories.GNN %}
 <li class="category-posts"><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</div>