# Project Context

## Purpose

Official portfolio website for Albert William Saputra.

## Public Assets

- `public/photos/albert-profile.png` = hero/profile image from Google Drive folder `Folder Foto Formal Seluruh GSA Untuk Carousel`
- `public/logo-mark.svg` = site logo mark
- `src/app/icon.svg` = favicon/app icon
- `public/resume/albert-william-saputra-cv.pdf` = downloadable CV

## Deployment Notes

- Target platform: Vercel
- Framework: Next.js
- Build command: `npm run build`
- Verification command: `npm run verify`
- Optional env var after domain is selected: `NEXT_PUBLIC_SITE_URL`

## Safety Notes

- Root-level local PDFs are ignored; the deployable CV lives in `public/resume`.
- `.env`, `.env.local`, and `.env*.local` are ignored and must not be committed.
- Screenshots, logs, `.next`, and `node_modules` are ignored.
