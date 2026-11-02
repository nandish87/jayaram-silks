# Y. Jayaram Silk Sarees — Production White-Label Handloom Platform

A production-ready, ultra-fast, mobile-first responsive website built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**, tailored specifically for traditional handloom silk saree weavers, wholesale manufacturers, and bridal boutiques.

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:3000

# Build for production (Static / Vercel / Netlify)
npm run build
```

---

## 🏷️ How to Re-Brand in Under 5 Minutes (White-Label Architecture)

This website is engineered on a **Single-Source-of-Truth White-Label Architecture**. **No brand information is hardcoded in any component.**

To re-brand this platform for *any* silk saree manufacturer, weaver cooperative, or boutique:

### Step 1: Edit `/config/brand.config.js`
Open [`config/brand.config.js`](file:///c:/Jayaram%20silks/config/brand.config.js) and update:
- **Identity:** `businessName`, `ownerName`, `tagline`, `businessType`, `shortDescription`
- **Contact Details:** `phones[]`, `primaryPhone`, `whatsappNumber`, `email`, `address`
- **Location:** `mapLink` (Google Maps directions link) and `mapEmbedUrl` (iframe embed)
- **Theme Palette:** Change `theme.colors` (`primary`, `secondary`, `accentGold`, `bgCream`) — the entire website instantly adopts the new color palette via dynamic CSS variables!
- **Stats:** `yearsOfExperience`, `stats[]` (looms, sarees woven, wholesale partners)
- **Wholesale Details:** `minimumOrderQuantity`, `highlights[]`, `enquiryWhatsAppText`
- **Auspicious Motif:** Set `showAuspiciousMotif: true | false` and `auspiciousMotifName`

### Step 2: Replace Images in `/public/images/`
- **Logo:** Replace `/public/images/logo.svg` or `/public/images/logo-mark.svg`
- **Favicon:** Replace `/public/images/icon.svg` or `/public/favicon.ico`
- **Product Photos:** Drop your saree photos into `/public/images/sarees/`

### Step 3: Add / Edit Products
Inside `brand.config.js`, update the `products[]` array:
```javascript
{
  id: "saree-101",
  name: "Kanchipuram Temple Border Silk Saree",
  category: "bridal", // matches id in categories[]
  price: "Contact for Price", // or "₹14,500"
  fabric: "100% Pure Mulberry Silk",
  zari: "Pure Gold Zari Pallu",
  description: "Handcrafted pure silk drape with traditional rudraksha zari motifs.",
  image: "/images/sarees/my-new-saree.jpg",
  detailImage: "/images/sarees/my-new-saree-pallu.jpg", // optional detail crop
  tags: ["Bridal", "Pure Pattu"],
  inStock: true,
  colors: ["Crimson Red", "Gold"],
  sku: "BRD-101",
}
```

---

## 📸 Saree Cropping & Image Assets Included

All 20 authentic photos provided in `sarees/` were processed, closely cropped, and optimized into `/public/images/sarees/`:
- **Wholesale Combo:** `wholesale-combo-set-6.jpg` (6-saree assortment)
- **Bridal & Pattu:** `rani-pink-paisley-bridal-silk.jpg`, `deep-maroon-purple-brocade-silk.jpg`, `haldi-yellow-pink-zari-pattu.jpg`, `coral-pink-heavy-zari-bridal-box.jpg`
- **Artisan Weaves & Motifs:** `peacock-teal-green-handloom.jpg`, `royal-blue-twin-peacock-silk.jpg`, `emerald-green-chakra-mandala-silk.jpg`, `sapphire-blue-mandala-zari-pattu.jpg`
- **Draped Showcases:** `magenta-royal-blue-draped-bridal.jpg`, `rust-copper-purple-silver-draped.jpg`, `olive-gold-royal-blue-draped.jpg`
- **Detail Pallu Zooms:** `rani-pink-paisley-bridal-silk-pallu.jpg`, `deep-maroon-purple-brocade-pallu.jpg`, `haldi-yellow-pink-zari-pallu.jpg`, etc.

The automated cropping script is preserved at [`crop_sarees.ps1`](file:///c:/Jayaram%20silks/crop_sarees.ps1).

---

## 💬 WhatsApp Integration & Wholesale Enquiry

- Every product card has an **"Enquire"** button that automatically pre-fills a formatted WhatsApp message to `brandConfig.whatsappNumber` with the saree name, SKU, and fabric details.
- The **Wholesale Enquiry Form** collects:
  - Buyer/Business Name
  - WhatsApp / Phone Number
  - City & State
  - Quantity Required
  - Notes / Colors
  On submit, it automatically opens WhatsApp with a structured order enquiry ready for one-tap sending.

---

## 🌐 Multilingual Support (English & Telugu)

- Default UI is in **English** with full **Telugu (తెలుగు)** support via the top language toggle.
- Translations live in:
  - [`locales/en.json`](file:///c:/Jayaram%20silks/locales/en.json)
  - [`locales/te.json`](file:///c:/Jayaram%20silks/locales/te.json)
- Switchable anytime with persistent user preference in `localStorage`.

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Next.js.
4. Click **Deploy**. Vercel will build and serve your site globally on high-speed edge CDN with zero configuration.

### Deploying to Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Select **"Import an existing project"** from your Git provider.
3. Build Settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next` (or `out` if using static export)
4. Click **Deploy Site**.

---

## 📋 Launch Checklist (Before Going Live)

1. **Verify Google Maps Embed:** In [`config/brand.config.js`](file:///c:/Jayaram%20silks/config/brand.config.js), verify that `mapLink` and `mapEmbedUrl` point exactly to your shop coordinates.
2. **Phone & WhatsApp Numbers:** Confirm `phones[]` and `whatsappNumber` (with country code `91` for India) are correct.
3. **Domain & SEO URL:** Update `seo.siteUrl` in `brand.config.js` to your real custom domain (e.g. `https://jayaramsilks.com`).
4. **Prices:** Check whether you prefer "Contact for Price" or exact retail prices in the `products[]` list.
5. **Real Testimonials:** Update `testimonials[]` with quotes and photos from your recent bridal and wholesale customers.

