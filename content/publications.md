---
title: 'Publications'
# date: 2024-12-15
# type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Publications
      text: "* denotes corresponding author, † denotes equal contribution."
      filters:
        folders:
          - publication
    design:
      view: article-grid
      fill_image: false
      columns: 3
    
  - block: collection
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
---
