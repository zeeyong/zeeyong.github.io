---
layout: page
title: Optimization
permalink: /blog/categories/Optimization/
---

<h5> {{ page.title }} </h5> <!-- 이름 수정 -->

<div class="card">
{% for post in site.categories.Optimization %}
 <li class="category-posts"><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</div>