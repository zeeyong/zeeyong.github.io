---
title: 'Point-based Diffusion Model for Predicting Spatio-Temporal Dynamics in Physical Systems'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Sunwoong Yang
  - Namwoo Kang*

# Author notes (optional)
author_notes:
  - ""
  - ""
  - "corresponding author"

date: '2025-12-09T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2025-12-09T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: The 9th Asian Pacific Congress on Computational Mechanics/The 7th Australasian Conference on Computational Mechanics (APCOM-ACCM 2025)
publication_short: APCOM 2025

abstract: Conventional diffusion models rely on grid-based and snapshot-level representations, limiting their adaptability to irregular domains and geometric variability. This study introduces a novel point-wise conditional diffusion framework that enables efficient and generalizable prediction of complex physical systems with diverse and irregular geometries. The core idea enables the diffusion process to operate directly on query points defined over arbitrary geometries, in contrast to conventional diffusion models that apply denoising to an entire snapshot at once and thereby limit geometric adaptability. Each query point is independently conditioned on its spatio-temporal coordinates and physical information, allowing point-wise modeling without relying on grid topology or temporal discretization. However, since point-wise conditioning operates on coordinate-based representations, the model is inherently limited by the expressiveness of the raw spatial inputs. To address this limitation, we also incorporate positional encoding to provide stable and detailed spatial representations, effectively mitigating the spectral bias inherent in coordinate-based networks. As a result, the proposed framework faithfully reconstructs high-frequency physical details and captures localized geometric variations. The flexibility and scalability of the proposed framework enable it to generalize across three physical domains characterized by complex geometric configurations:\ two-dimensional spatio-temporal systems, including Eulerian systems with fixed coordinates and Lagrangian systems with time-varying coordinates, and a three-dimensional large-scale aerodynamic system, without requiring additional preprocessing. Experimental results demonstrate superior efficiency and accuracy over image-based diffusion models, reducing training time by 94.4% and model parameters by 89.0%, while improving prediction accuracy by over 28%. Comprehensive comparisons with established data-flexible surrogate models, such as DeepONet and MeshGraphNet, further confirm the proposed framework’s effectiveness and broad applicability across diverse physical systems.



# Summary. An optional shortened abstract.
summary: ''

tags:
  - Scientific machine learning
  - Point-wise conditional diffusion models
  - 2D Spatio-temporal systems
  - 3D Large-scale systems
  - Shape variations

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
