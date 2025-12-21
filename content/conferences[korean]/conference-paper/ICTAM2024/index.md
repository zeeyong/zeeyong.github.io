---
title: 'Design Optimization of OLED Display Panels for Drop Impact Resistance Using A Graph Neural Network'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Jangseop Park 
  - Sunwoong Yang
  - Namwoo Kang*

# Author notes (optional)
author_notes:
  - ""
  - ""
  - ""
  - "corresponding author"

date: '2024-08-29T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-08-29T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: International Conference of the Theoretical and Applied Mechanics 
publication_short: ICTAM 2024

abstract: This study proposes a graph neural network-based surrogate model for predicting dynamic ball drop tests, ensuring the impact resistance and structural stability of layered OLED display panels. Our framework transforms mesh data into a graph representation and follows an encoder-processor-decoder architecture. The model incorporates non-penetration constraints into the loss function, improving accuracy and maintaining physical consistency. As a result, the model can predict stress and behavior for the entire time-step using only initial state mesh data and the forward-euler method for subsequent step predictions. Finally, we conduct design optimization to balance structural stability and cost. This novel framework aims to develop robust and reliable OLED displays while considering both mechanical performance and cost.

# Summary. An optional shortened abstract.
summary: ''

tags:
  - Graph neural network
  - Drop impact test
  - Spatio-temporal dynamics
  - Design optimization

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
