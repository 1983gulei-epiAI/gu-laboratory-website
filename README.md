# Gu Laboratory website

Production website for **gulaboratory.com**.

The site is a dependency-free static website stored in GitHub and automatically deployed to Cloudflare Workers from the `main` branch. No build step is required.

## Editing workflow

### Text changes
The main pages are plain HTML:
- `index.html` — Home
- `research.html` — Research
- `people.html` — People
- `publications.html` — Publications
- `news.html` — News
- `join.html` — Join Us
- `contact.html` — Contact
- `legal.html` — Imprint & Privacy

Main shared styling is in `assets/styles.css`. Page-specific refinements are in files such as `assets/home-v2.css`, `assets/people-v2.css` and `assets/publications-v2.css`.

Committing a change to `main` triggers a new Cloudflare deployment automatically.

### Images
Store laboratory-owned images under `assets/images/`:
- `assets/images/lab/` — group photos and lab-life images
- `assets/images/people/` — PI and member portraits
- `assets/images/research/` — laboratory-owned figures and scientific visuals

See `assets/images/README.md` for naming, size and copyright guidance.

## People page photo classes
When a member portrait is available, place it inside the corresponding `.person` card using:

```html
<img class="person-photo" src="assets/images/people/name.webp" alt="Name">
```

A PI portrait can use the `.pi-photo` class.

## Local preview
Run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## Production notes
- Canonical site: `https://gulaboratory.com`
- `www.gulaboratory.com` redirects to the root domain
- DNS and TLS are managed by Cloudflare
- GoDaddy remains the domain registrar only
- Before changing legal wording, confirm the applicable MPI/MPG imprint and data-protection requirements for this independent domain
