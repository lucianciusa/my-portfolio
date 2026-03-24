# Lucian Ciusa Portfolio

React + Vite portfolio website ready to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: `Vite` (auto-detected).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Customization points

- Main content and translations: `src/App.jsx`
- Visual design and layout: `src/styles.css`
- Contact email destination: `src/App.jsx` (`mailto:lucianciusa1@gmail.com`)

## Project structure

- `index.html`: Vite entry HTML
- `src/main.jsx`: React bootstrap
- `src/App.jsx`: Portfolio UI and content
- `src/styles.css`: Futuristic theme and responsive styles
- `vite.config.js`: Vite configuration
