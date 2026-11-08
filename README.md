# Mayur Argade | Freelance Web Developer

A client-focused freelance web development portfolio built with React and Vite.

## Services
- Starter Business Website — starting at ₹8,000
- Professional Business Website — starting at ₹12,000
- Full-Stack MERN Web Application — starting at ₹25,000
- Website Maintenance & Support — starting at ₹1,500/month

Final pricing depends on project scope and complexity. Domain registration, paid hosting, premium APIs and third-party subscriptions are billed separately.

## Tech stack
React, JavaScript, CSS, Vite and EmailJS.

## Run locally
```bash
npm install
npm run dev
```

## Build and lint
```bash
npm run build
npm run lint
```

## Contact form configuration
The contact form uses EmailJS. Add these environment variables to a local `.env` file and to your hosting provider's environment settings:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Configure the EmailJS template with these fields: `name`, `email`, `phone`, `business`, `service`, `budget`, and `message`.

The form reports an unconfigured state until these values are supplied. It does not claim to send enquiries without a configured service.

## Selected work
- [My Watch Mood](https://react-netlix.netlify.app/) · [Source](https://github.com/MayurArgade/react-netflix-clone)
- [Wallpaper Gallery](https://wallpaper-app-dun.vercel.app/) · [Source](https://github.com/MayurArgade/wallpaper-app)
- [Gemini UI Clone](https://mayurargade.github.io/Geminiclone/) · [Source](https://github.com/MayurArgade/Geminiclone)

## Deployment
Deploy as a Vite static site. Set the EmailJS environment variables in the deployment dashboard before enabling the contact form.
