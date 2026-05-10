---
title: 'News'
date: 2024-12-15
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Awards
      text: ""
      filters:
        folders:
          - news[awards]
    design:
      view: showcase
      columns: 1
      flip_alt_rows: false
  - block: collection
    content:
      title: Photos
      text: ""
      filters:
        folders:
          - news[photos]
    design:
      view: showcase
      columns: 1
      flip_alt_rows: false
---
