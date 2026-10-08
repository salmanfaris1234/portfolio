# SF Visual Lab

Responsive motion portfolio for Salman Faris. Static HTML, CSS and JavaScript; no build step.

## Publish on GitHub Pages

This website lives on the `sf-visual-lab` branch of `salmanfaris1234/portfolio`.
In repository **Settings → Pages**, choose **Deploy from a branch**, branch **sf-visual-lab**, folder **/(root)**, then Save.
This changes the Pages source for this repository; the existing `main` branch remains intact.
Expected address after successful deployment: https://salmanfaris1234.github.io/portfolio/

## Add your edits

Open `studio.html` from your website, connect using a fine-grained GitHub token for the owner `salmanfaris1234`, restricted to the `portfolio` repository with **Contents: Read and write**. No token is persisted in local/session storage or committed to the site.
Add a YouTube, Vimeo, Instagram or public MP4/WebM URL, a thumbnail URL or upload, a title and description. Save to draft, then Publish portfolio.
Only the owner account is accepted by the editor. GitHub repository permissions enforce the actual writes. Keep repository write access limited to the owner if exclusive control is required.
Drafts are held in memory until publishing; the page warns before leaving with unsaved changes. Publishing uses the current file SHA to prevent overwriting changes made elsewhere. Thumbnail uploads are capped at 4 MB. Uploads are saved before the JSON is updated; retrying is supported after partial upload success.
Alternatively, edit `portfolio.json` in GitHub. List order determines the gallery order. A project must have id, title, category, type (`video` or `image`), media and thumbnail; description is optional.

## Content and media

Initial entries are the owner's existing service catalogue artwork, explicitly labelled as artwork. No client video, client claim, or testimonial is fabricated. Replace or remove them in Owner Studio as desired.
Contact links use the email supplied by the connected GitHub profile. Replace the mailto in index.html if a different business address is preferred.
The supplied SF logo and two catalogue graphics are optimized as WebP. Fonts use Google Fonts with local system fallbacks. YouTube and Vimeo embeds load only when a visitor opens the project. Motion follows prefers-reduced-motion.

## Local preview

Run `python3 -m http.server 8080` in this directory and visit http://localhost:8080. Opening the HTML with file:// cannot load portfolio.json reliably.
