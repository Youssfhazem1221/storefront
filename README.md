# Nouveau - Avant-Garde Fashion Storefront Prototype

This is a functional prototype of a high-end, dark avant-garde fashion ecommerce storefront. It captures the essence of a raw, brutalist luxury brand and has been structured in a clean, component-oriented Next.js architecture intended to mirror future Shopify section/snippet capabilities.

## Getting Started

1. **Install Dependencies** (if not already installed)
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open the Storefront**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure & Shopify Adaptation

This project utilizes Next.js App Router and Tailwind CSS, but its structure is deliberately modular to smooth the migration to a Shopify theme (Liquid) later on.

- **`src/app/`**: Maps to Shopify Templates. Keep logic focused on routing here.
  - `/page.tsx` -> `index.liquid` (Homepage)
  - `/store/page.tsx` -> `collection.liquid`
  - `/store/[slug]/page.tsx` -> `product.liquid`
  - `/cart/page.tsx` -> `cart.liquid`
  - `/checkout/page.tsx` -> Setup via Shopify's native secure checkout.

- **`src/components/layout/`**: Maps to Shopify Theme Sections.
  - `Header.tsx` -> `header.liquid` section.
  - `Footer.tsx` -> `footer.liquid` section.
  - `CartDrawer.tsx` -> Can be an Ajax cart snippet or section.

- **`src/components/product/`**: Maps to Shopify Snippets.
  - `AddToCartButton.tsx` -> Product form snippet, easily rewritten to use standard liquid form injections.

- **`src/data/mockProducts.ts`**: The mocked database schemas match typical Shopify primitive values (id, handlers/slugs, variants/sizes, descriptions).

- **`public/images/`**: Assets ready to be uploaded to Shopify's Files / CDN.

## Aesthetic Direction
- Heavy emphasis on thin structure, pure black (`#000`), stark white (`#fff`), and pure sans-serif typography.
- CSS is handled completely via Tailwind's v4 utilities without deep custom CSS files (aside from initial resets in `globals.css`).
