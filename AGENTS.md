# Innova 3D — Project guidance

> No uses las skills de Sites para diseñar, implementar ni verificar la interfaz. Para trabajo frontend usa `design-taste-frontend`. Solo usa herramientas de alojamiento si el usuario solicita expresamente publicar o administrar el sitio.

> Cualquier acción que puedas hacer tú misma, por favor hazla. Esto incluye iniciar la app y realizar la verificación.

## Project purpose

- This is the Spanish-language landing page for Innova 3D, a 3D-printing business.
- The primary goal is to turn visitors from Instagram and other social networks into quote requests.
- Keep the main journey focused on services, prior work, trust, and contact through WhatsApp or Instagram.

## Product and content rules

- Write all customer-facing copy in clear, natural Spanish.
- Preserve the core message: “Convertimos tus ideas en soluciones 3D”.
- Prioritize autoparts, hard-to-find replacements, functional parts, prototypes, and custom objects.
- Do not invent contact information, testimonials, client names, metrics, certifications, prices, or claims about completed projects.
- Keep the WhatsApp number, Instagram URL, location, map, and video centralized in `app/site-data.ts`.
- Use real project photos supplied by the business when they become available; do not present generated or stock imagery as completed client work.

## Design and implementation

- Use the Next.js App Router and keep the main landing page in `app/page.tsx`.
- Maintain the current technical visual direction: deep `#22487a` blue, lighter blues, white, and restrained graphite.
- Every change must remain responsive on mobile, tablet, and desktop.
- Keep interactive controls keyboard-accessible and give non-decorative visuals accessible labels.
- Avoid unnecessary dependencies and keep the page fast to load.
- Preserve the Cloudflare Sites-compatible Vinext configuration and `.openai/hosting.json`.

## Commands

- Install dependencies: `pnpm install`
- Start locally: `pnpm exec vinext dev`
- Production build: `pnpm exec vinext build`

On POSIX environments, the existing `npm run dev` and `npm run build` scripts are also valid.

## Verification

- Run the production build after changing application code, styles, metadata, or dependencies.
- Confirm every WhatsApp button opens a prepared contact message.
- Confirm navigation anchors and contact buttons point to the intended destinations.
- Check the mobile layout before publishing meaningful visual changes.
