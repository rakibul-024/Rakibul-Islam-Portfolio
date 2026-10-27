# MD Rakibul Islam — Developer Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS. It introduces my work and skills, showcases selected projects, and provides a contact form for project inquiries.

## Features

- Responsive hero, about, skills, projects, and contact sections
- Typewriter effect for professional titles
- Profile avatar with animated blue orbit rings and an availability badge
- Project cards with hover transitions and direct links to live demos and source code
- Scroll-triggered reveal effects
- Contact form delivery through FormSubmit
- Reduced-motion support for visitors who prefer fewer animations

## Technology

- React 18
- Vite 6
- Tailwind CSS 4
- FormSubmit for contact form delivery

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Project Structure

```text
public/
  images/             Profile photo and project screenshots
src/
  components/         Portfolio sections and reusable UI components
  App.jsx             Page layout
  data.js             Navigation, contact email, skills, projects, and social links
  index.css           Tailwind theme and custom animations
```

## Updating Portfolio Content

- Update the email address, social profiles, skills, and project details in [`src/data.js`](./src/data.js).
- Replace the profile photo at `public/images/profile.png`. If the image cannot be loaded, the avatar displays initials.
- Replace project screenshots in `public/images/` and update their paths in `src/data.js`.

## Contact Form Setup

The contact form sends submissions to the email address configured in `src/data.js` using FormSubmit. On the first form submission, FormSubmit sends a verification email to that address. Confirm the verification email to activate delivery. The visitor's email is included as the reply-to address.

## Deployment

This is a Vite application. Deploy it to a static hosting provider such as Vercel:

1. Import the repository into Vercel.
2. Set the framework preset to **Vite** (or keep it auto-detected).
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy the site.

## License

This repository contains personal portfolio content and project links. Contact the owner for permission before reusing personal assets or content.
