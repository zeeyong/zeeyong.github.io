---
title: 'Publications'
date: 2024-12-15
type: landing

design:
  # Section spacing
  spacing: '3rem'

# Page sections
sections:
  - block: collection
    content:
      title: Journals
      text: ""
      filters:
        folders:
          - publication
    design:
      view: article-grid
      fill_image: false
      columns: 2
  - block: collection
    content:
      title: International Conferences
      text: ""
      filters:
        folders:
          - conferences[international]
    design:
      view: article-grid
      fill_image: false
      columns: 2
  - block: collection
    content:
      title: Korean Conferences
      text: ""
      filters:
        folders:
          - conferences[korean]
    design:
      view: list
      fill_image: false
---