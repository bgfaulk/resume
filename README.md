# Brian Faulk - Professional Resume Site

A modern, responsive personal resume and portfolio website built with Next.js and hosted on GitHub Pages.

## Features

- Modern, clean design with smooth animations
- Fully responsive (mobile, tablet, desktop)
- Lightning-fast performance with Next.js static export
- Smooth scroll navigation
- Portfolio (Key Initiatives) showcase
- **Sites I've Built** — dedicated page linking to 501mowing.com, taylorsfieldflowerfarm.com, faulknercountydemocrats.com, sentrahcm.com
- Contact information
- Deployed on GitHub Pages

## Tech Stack

- **Framework**: Next.js 16.x (App Router)
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

## Project Structure

```
├── public/                 # Static assets (favicon)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Home (Hero, About, Resume, Skills, Portfolio, Contact)
│   │   ├── sites/
│   │   │   └── page.tsx    # Sites I've Built
│   │   └── globals.css
│   └── components/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       ├── Portfolio.tsx
│       ├── Resume.tsx
│       ├── Sites.tsx
│       └── Skills.tsx
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment
└── next.config.mjs         # Next.js config (static export, basePath /resume)
```

## Development

### Prerequisites

- Node.js 18.x or higher (20.x recommended)
- npm or yarn

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000/resume`

### Build for Production

```bash
npm run build
```

The built site will be in the `out/` directory (static export).

### Preview Production Build

```bash
npm run preview
```

Serves the `out/` directory locally.

## Deployment

The site is automatically deployed to GitHub Pages when you push to the `master` branch.

1. Ensure GitHub Pages is enabled in the repository settings with source "GitHub Actions"
2. Push to `master` or manually trigger the workflow

The site will be available at: `https://bgfaulk.github.io/resume`

- Home: `https://bgfaulk.github.io/resume`
- Sites I've Built: `https://bgfaulk.github.io/resume/sites`

## Customization

### Update Content

- **Personal Info**: Edit `src/components/Hero.tsx` and `src/components/Contact.tsx`
- **Work Experience**: Update `src/components/Resume.tsx`
- **Skills**: Modify `src/components/Skills.tsx`
- **Portfolio (Initiatives)**: Edit `src/components/Portfolio.tsx`
- **Sites**: Edit the `SITES` array in `src/components/Sites.tsx`
- **About**: Change `src/components/About.tsx`

### Update Styling

- **Theme**: Edit `tailwind.config.ts` and CSS variables in `src/app/globals.css`
- **Component Styles**: Each component uses Tailwind classes

## License

All rights reserved © 2025 Brian Faulk

## Contact

- **Email**: briangray42@gmail.com
