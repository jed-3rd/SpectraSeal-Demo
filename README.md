# SpectraSeal Demo

Public-facing demo site for [SpectraSeal](https://github.com/Jed-3rd/spectraseal), a forensic image watermarking engine. Built with Astro and Tailwind CSS, deployed to GitHub Pages.

**Live site:** [jed-3rd.github.io/spectraseal-demo](https://jed-3rd.github.io/spectraseal-demo)

## Pages

- **/** — Landing page with overview, how-it-works explainer, and usage limits
- **/encode** — Upload an image with a label to embed an invisible watermark
- **/decode** — Upload a watermarked image to extract its embedded metadata

## Tech Stack

- [Astro](https://astro.build/) (static site generation)
- [Tailwind CSS](https://tailwindcss.com/) (dark theme UI)
- Calls the SpectraSeal Rust API hosted on Render

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (18+)

### Install & Run

```bash
npm install
npm run dev
```

### Configure API URL

The frontend calls the SpectraSeal API. Set the URL via environment variable:

```bash
# Local development (API running on localhost)
PUBLIC_API_URL=http://localhost:8080

# Production (Render)
PUBLIC_API_URL=https://spectraseal-api.onrender.com
```

### Build for Production

```bash
npm run build
```

Static output goes to `dist/`.

## Deployment

Deployed automatically to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. The `PUBLIC_API_URL` is set as a GitHub repository variable.

## Usage Limits

The demo enforces **5 uses per month per IP** (encode and decode share the same pool) via the backend API. Credits reset at the start of each calendar month.

## License

All rights reserved.
