# SEE Learning Mongolia Full Newsletter - Vercel Project

This is a Vercel-ready Next.js project that serves the SEE Learning Mongolia newsletter images directly.

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

The root URL redirects to the first newsletter image, and the newsletter pages are available under `/newsletter/page-1.jpg` through `/newsletter/page-7.jpg`.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Deploy.

## Email cover usage

After deployment, use your Vercel URL as the CTA link in the email cover template:

```html
<a href="https://YOUR-VERCEL-LINK.vercel.app">Бүтэн сонинг унших</a>
```

Use this cover image URL in the email template:

```text
https://YOUR-VERCEL-LINK.vercel.app/newsletter/page-1.jpg
```
