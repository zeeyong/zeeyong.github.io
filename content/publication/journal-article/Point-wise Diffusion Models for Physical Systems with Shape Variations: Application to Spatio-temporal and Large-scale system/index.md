---
title: "Point-wise Diffusion Models for Physical Systems with Shape Variations: Application to  Spatio-temporal and Large-scale system"
authors: 
- admin
- Sunwoong Yang*
- Namwoo Kang*
author_notes:
- ""
- "corresponding author"
- "corresponding author"

date: "2025-08-02T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Arxiv"
publication_short: ""

abstract: This study introduces a novel point-wise diffusion model that processes spatio-temporal points independently to efficiently predict complex physical systems with shape variations. This methodological contribution lies in applying forward and backward diffusion processes at individual spatio-temporal points, coupled with a point-wise diffusion transformer architecture for denoising. Unlike conventional image-based diffusion models that operate on structured data representations, this framework enables direct processing of any data formats including meshes and point clouds while preserving geometric fidelity. We validate our approach across three distinct physical domains with complex geometric configurations":" 2D spatio-temporal systems including cylinder fluid flow and OLED drop impact test, and 3D large-scale system for road-car external aerodynamics. To justify the necessity of our point-wise approach for real-time prediction applications, we employ denoising diffusion implicit models (DDIM) for efficient deterministic sampling, requiring only 5-10 steps compared to traditional 1000-step diffusion procedures and providing computational speedup of 100 to 200 times during inference without compromising accuracy. In addition, our proposed model achieves superior performance compared to image-based diffusion model":" reducing training time by 94.4% and requiring 89.0% fewer parameters while achieving over 28% improvement in prediction accuracy. Comprehensive comparisons against established data-flexible surrogate models including DeepONet and Meshgraphnet demonstrate consistent superiority of our approach across all three physical systems explored in this study, with performance improvements ranging from 30-90% error reduction. To further refine the proposed model, we investigate two key aspects":" 1) comparison of final physical states prediction or incremental change prediction, and 2) computational efficiency evaluation across varying subsampling ratios (10%-100%). Our refined model shows that incremental change prediction outperforms final physical states prediction especially for position prediction in the drop impact system, and maintains superior performance even when using only 30% of the original point samples while requiring significantly less computational resources during training.

tags:
- Scientific machine learning
- Point-wise diffusion models
- 2D Spatio-temporal systems
- 3D large-scale systems
- Shape variations

featured: false

links:
- name: ARXIV
  url: https://www.arxiv.org/pdf/2508.01230
- name: PDF
  url: https://www.arxiv.org/pdf/2508.01230

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
projects: []

# # Slides (optional).
# #   Associate this publication with Markdown slides.
# #   Simply enter your slide deck's filename without extension.
# #   E.g. `slides: "example"` references `content/slides/example/index.md`.
# #   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
