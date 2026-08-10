# Gu Laboratory website — V1

A dependency-free static site intended for Cloudflare Pages. No build step is required.

## Preview locally
Run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Editing
- Main styling: `assets/styles.css`
- Navigation/footer are repeated in each HTML file for zero-build portability.
- Publications and people are plain HTML and can be edited directly.
- V1 uses a CSS-generated hero background; replace it later with laboratory-owned photography or graphics if desired.

## Before launch
1. Confirm the current member roster and roles.
2. Add current lab group photo and member portraits if desired.
3. Verify publication links and add DOI/PubMed links.
4. Review the Imprint/Privacy text for current German legal compliance.
5. Test all external links.
6. Deploy to Cloudflare Pages, then point `gulaboratory.com` DNS to the new project.
