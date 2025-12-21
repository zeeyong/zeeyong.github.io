---
title: 'Safe Reinforcement Learning for 3D Large Scale Constrained Layout Optimization'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Seokjun Kim
  - Sanghoon Jin
  - Yubin Lee
  - Namwoo Kang*

# Author notes (optional)
author_notes:
  - ""
  - ""
  - ""
  - ""
  - "corresponding author"

date: '2025-12-12T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2025-12-12T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Korean Society of Mechanical Engineers (KSME 2025)
publication_short: KSME 2025 Fall

abstract: In this work, we propose a safe reinforcement learning framework for large-scale layout optimization under complex constraints. The problem is formulated as a constrained Markov decision process (CMDP), where the placement of objects is represented as hybrid actions consisting of continuous coordinates and discrete floor/rotation indices. To enforce constraints during training, we employ a constrained actor–critic architecture, in which the policy network is trained jointly with reward and cost critics. After reinforcement learning converges, the near-optimal layouts obtained from the safe reinforcement learning agent are further refined through fine-grained optimization using metaheuristic search, which improves objective values and constraint satisfaction. We expect that our two-stage approach effectively balances exploration and constraint enforcement, achieving competitive performance while reducing constraint violations in layout optimization tasks.

# Summary. An optional shortened abstract.
summary: ''

tags:
  - 3D layout optimization
  - Constrained optimization
  - NP-hard
  - Safe reinforcement learning

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# url_pdf: 'conference-paper/conference-paper.pdf'
# url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_poster: 'conference-paper/conference-paper.pdf'
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
