# VOLT — Streetwear Sneaker Store (E-commerce Frontend)

A bold, high-energy sneaker store frontend. Neon pink/cyan/lime on
dark background, scrolling marquee banner, working cart drawer (front-end only).

## Features
- Scrolling marquee announcement bar
- Category-filterable product grid
- Functional cart drawer (add items, see running total) — in-memory only, no backend
- Newsletter signup form
- Fully responsive
- Respects `prefers-reduced-motion`

## Tech Stack
HTML5, CSS3 (custom properties), Vanilla JavaScript.

## Folder Structure
```
volt-store/
├── index.html
├── css/style.css
├── js/script.js
└── assets/images/   ← add product photos here
```

## How to customize
- **Products**: edit the `PRODUCTS` array at the top of `js/script.js`
  (name, category, price, badge)
- **Photos**: add images to `assets/images/`, then replace the
  `.product-thumb` placeholder blocks with real `<img>` tags
- **Brand name/copy**: edit directly in `index.html` ("VOLT" is a
  placeholder brand — swap freely)
- **Cart**: currently front-end only (resets on page reload). To make
  it persist or actually process payments, connect `js/script.js` to
  a backend or a service like Stripe Checkout / Razorpay.

## Deploy
Push to GitHub, then enable GitHub Pages (same process as your other projects).

## License
MIT — free to reuse and adapt.
