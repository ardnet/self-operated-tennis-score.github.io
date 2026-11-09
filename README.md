# Self-Operated Tennis Score Landing Page

A simple one-page static landing page for **Self-Operated Tennis Score**, designed for easy hosting on **GitHub Pages**.

## Files

- `index.html` — main landing page
- `styles.css` — all page styling
- `script.js` — mobile navigation + reveal animations
- `assets/images/` — hero and preview images
- `assets/images/screenshots/` — app screenshots used in the screenshots section
- `assets/icons/favicon.svg` — favicon

## Quick local preview

Because this is a plain static website, you can open `index.html` directly in your browser.

If you want a small local server, you can run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages deployment

### Option 1 — user or organisation site
If this is the main GitHub Pages site for your account:
- repository name: `yourusername.github.io`
- upload the contents of this folder to the root of the repository

### Option 2 — project site
If this is a project site:
- create a repository, for example: `tennis-score-tracker-landing-page`
- upload all files
- in GitHub: **Settings → Pages**
- under **Build and deployment**, choose:
  - **Source**: Deploy from a branch
  - **Branch**: `main` (or `master`) and `/root`

Your site will publish at:

```text
https://yourusername.github.io/tennis-score-tracker-landing-page/
```

## Things you should customise

### 1. App link
Currently, the page links to:

```text
https://melodious-treacle-c952b1.netlify.app/
```

If your app URL changes, update all **Open the App** links in `index.html`.

### 2. Open Graph URL
Inside `index.html`, replace:

```html
<meta property="og:url" content="https://yourusername.github.io/tennis-score-tracker/" />
```

with your real GitHub Pages URL.

### 3. Feedback form embed
The **Feedback** section currently contains a placeholder block.
Replace the placeholder with your embedded form code from services such as:
- Tally
- Typeform
- Google Forms
- Jotform

Search for this block in `index.html`:

```html
<div class="feedback-placeholder">
```

You can also replace the sample `.feedback-embed` block with an `iframe` embed.

### 4. App store badges
The Android and iOS blocks are currently set to **Coming Soon**. You can replace them later with actual store badges/links once native apps are published.

## SEO notes

This landing page already includes:
- page title
- meta description
- keywords
- Open Graph tags
- Twitter card tag
- JSON-LD SoftwareApplication schema
- semantic section structure and headings
- descriptive alt text for screenshots

## Suggested next improvements

- Add a real favicon set
- Add a privacy policy page and footer link
- Add a real feedback form embed
- Add analytics (for example Plausible or Google Analytics)
- Add a screenshot lightbox gallery
- Add testimonial or user feedback section
