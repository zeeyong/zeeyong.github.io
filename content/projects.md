---
title: 'Projects'
date: 2024-12-15
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Ongoing Projects
      text: 
      filters:
        folders:
          - project
          - ongoing
    design:
      view: article-grid
      fill_image: false
      columns: 3
  - block: collection
    content:
      title: Completed Projects
      text: 
      filters:
        folders:
          - project
          - completed
    design:
      view: article-grid
      fill_image: false
      columns: 3
---
