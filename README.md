# Ronel Portfolio (Static)

Static HTML/CSS/JS rebuild of the original React/Tailwind portfolio.

## Overview
- Single-page layout with sections: hero, about, method, portfolio, contact, footer.
- TikTok embeds are lazy-loaded for faster initial render.
- No build step; open `index.html` directly or serve with a static server.

## Structure
- `index.html` - Page markup and section content.
- `assets/style/style.css` - All styles and animations.
- `assets/script/script.js` - Navbar behavior, hero parallax, lazy TikTok loading.
- `assets/images/` - Optional local images (currently empty).
- `portfolio/` - Original React source (reference only).

## Run
Option 1: Open `index.html` in a browser.

Option 2: Run a local server (recommended for embeds):
```sh
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Performance Notes
- TikTok embeds are injected only when they are near the viewport or when the user clicks.
- This keeps first paint fast and reduces network/CPU on load.

## Customize
- Update TikTok URLs in `index.html` in the `.tiktok-placeholder` blocks.
- Replace the about image with a local asset and update the `img` tag source.
