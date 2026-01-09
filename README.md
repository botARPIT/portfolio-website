# Arpit Chauhan | Portfolio

Personal portfolio website showcasing Applied AI engineering work, LLM systems, and backend infrastructure projects.

🌐 **Live**: [portfolio.arpitdev.site](https://portfolio.arpitdev.site)

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite 5
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: TanStack Query
- **Theming**: next-themes (light, dark, terminal, nord, paper)

## Features

- ⚡ Production-optimized with code splitting
- 🎨 Multiple theme support
- 📱 Fully responsive design
- 🔍 SEO optimized with structured data
- ♿ Accessible (WCAG compliant)
- 🖼️ Lazy-loaded images
- 🛡️ Security headers configured

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

The project is configured for deployment on **Cloudflare Pages**, **Netlify**, or **Vercel**.

Build settings:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18+

### Includes
- `_headers` - Security headers & cache control
- `_redirects` - SPA routing for Netlify
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Crawler directives

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   └── projects/    # Project showcase components
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── lib/             # Utilities
└── assets/          # Architecture diagrams
```

## License

MIT
