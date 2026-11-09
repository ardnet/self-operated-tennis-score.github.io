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
- create a repository, for example: `self-operated-tennis-score-landing-page`
- upload all files
- in GitHub: **Settings → Pages**
- under **Build and deployment**, choose:
  - **Source**: Deploy from a branch
  - **Branch**: `main` (or `master`) and `/root`

Your site will publish at:

```text
https://yourusername.github.io/self-operated-tennis-score-landing-page/
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
<meta property="og:url" content="https://yourusername.github.io/self-operated-tennis-score/" />
```

with your real GitHub Pages URL.

### 3. Google Form link
The **Feedback** section uses a button that opens your Google Form in a new tab.

Search for this placeholder in `index.html`:

```text
PASTE_YOUR_GOOGLE_FORM_URL_HERE
```

Replace it with your published Google Form URL, for example:

```text
https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
```


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


## Google Analytics 4 (GA4)

The landing page now includes optional GA4 tracking.

1. Create a GA4 property and a **Web** data stream for your GitHub Pages URL.
2. Copy the Measurement ID, which looks like `G-ABC1234567`.
3. Open `analytics.js`.
4. Replace:

```js
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

with your real Measurement ID.

If you leave the placeholder unchanged, Analytics remains disabled and the page works normally.

### Events included

- `open_app_clicked` — Open App / Open Web App CTA
- `view_screenshots_clicked` — hero screenshot CTA
- `feedback_form_clicked` — Google Form button
- `feedback_section_clicked` — bottom CTA to feedback section
- `native_app_interest` — Android or iOS Coming Soon badge clicked
- `nav_section_clicked` — navigation links
- `section_viewed` — major page sections viewed

Event parameters are deliberately non-personal, such as `location`, `section_name`, and `platform`.
Do not add visitor names, email addresses, player names, match codes, or scoreboard URLs to GA4 events.
