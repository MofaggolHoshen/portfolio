# Premium Portfolio

A production-ready personal portfolio built with React, TypeScript, and Vite. Features a responsive design, premium UI components, semantic HTML, full accessibility support, and SEO optimization.

## Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** 9+
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MofaggolHoshen/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/portfolio/`

### Building

Create an optimized production build:

```bash
npm run build
```

The build output is in the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

### Linting & Type Checking

Check for code issues:

```bash
npm run lint
```

Check TypeScript types:

```bash
npm run type-check
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── layout/         # Header, Footer, Layout shells
│   │   ├── sections/       # Portfolio sections (Hero, Projects, etc.)
│   │   └── ui/             # Reusable UI primitives
│   ├── data/               # Content and data models
│   ├── hooks/              # Custom hooks (useHead for SEO)
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── docs/                   # Documentation
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

## Customization

### Update Personal Content

Edit `src/data/content.ts` to update:

- Hero introduction
- Featured projects
- Skills and experience
- Testimonials
- Contact information

### Customize Styling

Design tokens are defined in `src/index.css`:

- Colors (accent, muted, strong, canvas, line, subtle)
- Typography (font families)
- Spacing and sizing (via Tailwind CSS)

### Add Social Links

Update social media URLs in:

- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`

## Accessibility

The portfolio is built with accessibility as a first-class concern:

- **Keyboard Navigation**: All interactive elements are keyboard accessible (Tab, Enter, Escape)
- **Focus Management**: Visible focus indicators and skip-to-main-content link
- **Semantic HTML**: Proper use of landmarks (header, main, footer, section)
- **ARIA Attributes**: Labels, roles, and relationships for screen readers
- **Motion Preferences**: Respects `prefers-reduced-motion` for users who prefer reduced animations
- **Form Accessibility**: Proper labels, error messaging, and validation

## SEO & Performance

- **Meta Tags**: Dynamic Open Graph, Twitter Card, and canonical URL support
- **Semantic Markup**: Proper heading hierarchy and HTML structure
- **Bundle Optimization**: ~65KB gzipped with Tailwind CSS purging
- **Mobile-First**: Responsive design from 320px to 1920px+

## Deployment

### GitHub Pages

The portfolio is configured to deploy to GitHub Pages at `https://github.com/MofaggolHoshen/portfolio`.

#### Deploy Steps

1. **Ensure dist/ is built:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**

   ```bash
   # If using GitHub Actions, push to main branch
   # The workflow will automatically build and deploy to gh-pages branch
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

   **Or manually deploy:**

   ```bash
   # Install gh-pages if needed
   npm install --save-dev gh-pages

   # Deploy
   npx gh-pages -d dist
   ```

3. **Verify deployment:**
   - Check GitHub Actions tab for deployment status
   - Visit `https://mofaggolhoshen.github.io/portfolio/` (replace with your GitHub username)

#### Configuration

The base path is set to `/portfolio/` in `vite.config.ts`:

```ts
export default defineConfig({
  base: "/portfolio/",
  // ...
});
```

This allows the app to work at `https://github.com/mofaggolhoshen/portfolio` with proper routing for the SPA.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Technologies

- **React** 19.2+
- **TypeScript** 6.0+
- **Vite** 8.0+
- **Tailwind CSS** 4.3+
- **ESLint** 10.3+

## License

© 2026 Mofaggol Hoshen. All rights reserved.

## Next Steps

1. **Personalize Content**: Update the portfolio with your own projects, skills, and experience.
2. **Add Images**: Replace placeholder images in `public/` with your own.
3. **Customize Colors**: Modify design tokens in `src/index.css` for your brand.
4. **Set Up Analytics**: Integrate Google Analytics or Plausible (optional).
5. **Deploy**: Follow the deployment steps above to publish to GitHub Pages.
