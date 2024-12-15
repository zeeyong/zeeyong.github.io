---
title: "Physics-Constrained Graph Neural Networks for Spatio-Temporal Prediction of Drop Impact on OLED Display Panels"
authors: [<b style='color: blue;'>Jiyong Kim</b>, Jangseop Park, Nayong Kim, Younyeol Yu, Kiseok Chang, Chang-Seung Woo, Sunwoong Yang*, Namwoo Kang*]
date: "2024-11-04T00:00:00Z"
doi: ""

# # Schedule page publish date (NOT publication's date).
publishDate: "2024-11-04T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: This study aims to predict the spatio-temporal evolution of physical quantities observed in multi-layered display panels subjected to the drop impact of a ball. To model these complex interactions, graph neural networks have emerged as promising tools, effectively representing objects and their relationships as graph structures. In particular, MeshGraphNets (MGNs) excel in capturing dynamics in dynamic physics simulations using irregular mesh data. However, conventional MGNs often suffer from non-physical artifacts, such as the penetration of overlapping objects. To resolve this, we propose a physics-constrained MGN that mitigates these penetration issues while maintaining high level of accuracy in temporal predictions. Furthermore, to enhance the model’s robustness, we explore noise injection strategies with varying magnitudes and different combinations of targeted components, such as the ball, the plate, or both. In addition, our analysis on model stability in spatio-temporal predictions reveals that during the inference, deriving next time-step node positions by predicting relative changes (e.g., displacement or velocity) between the current and future states yields superior accuracy compared to direct absolute position predictions. This approach consistently shows greater stability and reliability in determining subsequent node positions across various scenarios. Building on this validated model, we evaluate its generalization performance by examining its ability to extrapolate with respect to design variables. Furthermore, the physics-constrained MGN serves as a near real-time emulator for the design optimization of multi-layered OLED display panels, where thickness variables are optimized to minimize stress in the light-emitting materials. It outperforms conventional MGN in optimization tasks, demonstrating its effectiveness for practical design applications.

tags:
- Drop impact test
- Spatio-temporal dynamics
- Graph neural network

featured: false

links:
- name: ARXIV
  url: https://arxiv.org/abs/2411.01848
- name: PDF
  url: https://arxiv.org/pdf/2411.01848

# url_pdf: https://arxiv.org/pdf/2411.01848
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# # Associated Projects (optional).
# #   Associate this publication with one or more of your projects.
# #   Simply enter your project's folder or file name without extension.
# #   E.g. `internal-project` references `content/project/internal-project/index.md`.
# #   Otherwise, set `projects: []`.
projects:
- internal-project

# # Slides (optional).
# #   Associate this publication with Markdown slides.
# #   Simply enter your slide deck's filename without extension.
# #   E.g. `slides: "example"` references `content/slides/example/index.md`.
# #   Otherwise, set `slides: ""`.
slides: example
---

### Authors
- <a href="https://scholar.google.com/citations?user=example1" target="_blank">Jiyong Kim*</a>
- <a href="https://scholar.google.com/citations?user=example2" target="_blank">Jangseop Park</a>
- <a href="https://scholar.google.com/citations?user=example3" target="_blank">Nayong Kim</a>

<!-- This work is driven by the results in my [previous paper](/publication/conference-paper/) on LLMs.

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
