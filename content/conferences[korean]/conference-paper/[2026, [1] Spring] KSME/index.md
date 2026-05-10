---
title: 'Constraint-Aware Large-Scale 3D Layout Optimization via Hybrid Deep Reinforcement Learning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Seokjun Kim
  - Namwoo Kang*

# Author notes (optional)
author_notes:
  - ""
  - ""
  - ""
  - ""
  - "corresponding author"

date: '2026-05-07T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2026-05-07T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Korean Society of Mechanical Engineers (KSME 2026)
publication_short: KSME 2026 Spring (Poster)

abstract: Large-scale 3D layout optimization requires simultaneous satisfaction of multiple heterogeneous constraints while optimizing a multi-component objective over a mixed-variable design space. Existing metaheuristic approaches suffer from exponential search space growth with problem scale, while most deep reinforcement learning (DRL) methods adopt either purely continuous or discrete action spaces that fail to capture the mixed-variable structure of real-world 3D placement problems. We present LayoutRL, a constraint-aware DRL framework integrating mixed variables within a unified hybrid policy. However, as non-overlap constraints are inherently difficult to satisfy under sparse rewards in continuous action spaces, minimum translation vector (MTV)-based action correction deterministically mitigates non-overlap constraint violations at each step, where a Beta distribution ensures numerical stability for MTV-corrected actions near boundaries. To further improve solution quality, we introduce fine-grained optimization to refine the DRL-generated solution. Experiments across $N=30, 50, 70, 100$ object scales demonstrate that LayoutRL achieves zero constraint violations at all scales. Even at $N=100$, where the metaheuristic baseline fails to produce feasible solutions, LayoutRL consistently achieves superior results, demonstrating its scalability to large-scale optimization problems. Furthermore, consistent high-quality performance across 100 test instances confirms the generalization capability.

# Summary. An optional shortened abstract.
summary: ''

tags:
  - Large-scale 3D layout optimization
  - Mixed-variable constrained optimization
  - Hybrid deep reinforcement learning

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
