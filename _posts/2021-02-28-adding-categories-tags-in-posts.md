---
layout: post
title:  "Adding Multiple Categories in Posts"
summary: "Learn how to add categories in posts"
author: zeeyong
date: '2021-02-28 1:35:23 +0530'
category: ['GNN','NIN', 'Optimization']
tags: zeeyong
thumbnail: /assets/img/posts/code.jpg
keywords: devlopr jekyll, how to use devlopr, devlopr, how to use devlopr-jekyll, devlopr-jekyll tutorial,best jekyll themes, multi categories and tags
usemathjax: false
permalink: /blog/adding-categories-tags-in-posts/
---

## Adding Multiple Categories in Posts

To add categories in blog posts all you have to do is add a **category** key with category values in frontmatter of the post :

<!-- ```yml
---
category: ['GNN', 'NIN', 'Optimization']
---
```

Then to render this category using link and pages. All we need to do is,

1. Create a new file with [your_category_name].md inside categories folder.

2. Copy categories/sample_category.md file and replace the content in [your_category_name].md in that. (Please don't copy the code below its just sample, since it renders the jekyll syntax dynamically)

```jsx
---
layout: page
title: Guides
permalink: /blog/categories/your_category_name/
---

<h5> {{ page.title }} </h5>  // 이름 바꿀 때 사용 (Categories 큰 제목)

<div class="card">
{% for post in site.categories.your_category_name %}
 <li class="category-posts"><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</div>
``` -->