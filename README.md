# Brian Faulk - Professional Resume Site

A modern, responsive personal resume and portfolio website built with Astro and hosted on GitHub Pages.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightning-fast performance with Astro
- 🎯 Smooth scroll navigation
- 💼 Portfolio showcase
- 📧 Contact information
- 🌐 Deployed on GitHub Pages

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Modern CSS with CSS Variables
- **Fonts**: Google Fonts (Inter)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

## Project Structure

```
├── public/                 # Static assets (images, favicon)
│   └── assets/
│       └── img/           # Portfolio images
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   ├── Portfolio.astro
│   │   ├── Resume.astro
│   │   └── Skills.astro
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # Route pages
│   │   └── index.astro
│   └── styles/            # Global styles
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
└── astro.config.mjs       # Astro configuration
```

## Development

### Prerequisites

- Node.js 18.x or higher
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

3. Open your browser and navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages when you push to the `master` branch.

### Manual Deployment

If you need to deploy manually:

1. Ensure you have GitHub Pages enabled in your repository settings
2. Set the source to "GitHub Actions"
3. Push to the `master` branch or manually trigger the workflow

The site will be available at: `https://bgfaulk.github.io/resume`

## Customization

### Update Content

- **Personal Info**: Edit `src/components/Hero.astro` and `src/components/Contact.astro`
- **Work Experience**: Update `src/components/Resume.astro`
- **Skills**: Modify `src/components/Skills.astro`
- **Portfolio**: Edit `src/components/Portfolio.astro`
- **About**: Change `src/components/About.astro`

### Update Styling

- **Colors & Theme**: Edit CSS variables in `src/styles/global.css`
- **Component Styles**: Each component has scoped styles in its `.astro` file

### Add New Pages

Create a new `.astro` file in `src/pages/` and it will automatically become a route.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2025 Brian Faulk

## Contact

- **Email**: briangray42@gmail.com
- **LinkedIn**: [Brian Faulk](https://www.linkedin.com/in/brian-faulk-35-92-318)
- **GitHub**: [@bgfaulk](https://github.com/bgfaulk)
- **Twitter**: [@Briangray_IT](https://twitter.com/Briangray_IT)
