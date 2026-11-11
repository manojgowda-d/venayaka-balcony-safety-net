# Venayaka Balcony Safety Net - Official Business Website

A modern, fast, SEO-optimized business website for **Venayaka Balcony Safety Net** located in Mysore, Karnataka, India. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Key File Structure

- `src/data/business.ts` — Central configuration for business phone, WhatsApp, service areas, Google Maps URL, and site domain.
- `src/data/services.ts` — All 8 safety netting services with descriptions, features, and imagery.
- `src/data/videos.ts` — Configuration for all installation videos (local MP4 and YouTube embeds).
- `src/data/gallery.ts` — Work gallery images with categories and sample vs. completed project tags.
- `src/components/` — Reusable modular components:
  - `Navbar.tsx` & `Logo.tsx` — Sticky header with mobile hamburger menu and direct call button.
  - `Hero.tsx` — High-conversion hero section with location badge and quick CTAs.
  - `About.tsx` — Business background and Mysore focus.
  - `Services.tsx` — Service cards with automated WhatsApp quotation buttons.
  - `VideoGallery.tsx` & `VideoCard.tsx` — Filterable video player with fullscreen support.
  - `ImageGallery.tsx` — Responsive photo grid with lightbox modal.
  - `WhyChooseUs.tsx` — Authentic value propositions.
  - `ContactForm.tsx` — Form that validates inputs and opens pre-filled WhatsApp messages.
  - `GoogleMap.tsx` — Interactive map embed and direct links to the official Google Maps URL.
  - `FloatingButtons.tsx` — Persistent quick-contact buttons for WhatsApp and phone.
  - `Footer.tsx` — Comprehensive footer with sitemap links and business details.
  - `JsonLd.tsx` — Schema.org `HomeAndConstructionBusiness` structured data for Google SEO.
- `src/app/` — Multi-page App Router architecture:
  - `/` — Complete home showcase.
  - `/about` — Dedicated About page.
  - `/services` — Detailed services catalog.
  - `/videos` — Dedicated installation videos showcase.
  - `/gallery` — Full visual project portfolio.
  - `/contact` — Contact details, form, and Google Maps directions.
  - `sitemap.ts` & `robots.ts` — Dynamic XML sitemap and crawler instructions.
- `public/videos/` — Local installation MP4 files (`video1.mp4` through `video9.mp4`).
- `public/images/` — Real photographs and gallery assets.

---

## 🌐 Deploying to Vercel

1. Push your code to a GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/venayaka-balcony-safety-net.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project**, select the `venayaka-balcony-safety-net` repository.
4. Keep the default settings (Next.js preset) and click **Deploy**.
5. Once deployed, add your custom domain (`www.venayakasafetynet.com`) under **Settings > Domains**.

