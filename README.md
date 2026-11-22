# Portfolio – João Bastos

Personal portfolio of João Bastos, Design Engineer (Frontend Dev & UX/UI). Built with React, TypeScript and Vite, available in German and English.

## Tech Stack

- React + TypeScript
- Vite
- CSS
- Language toggle (DE / EN)

## Getting Started

### 1. Go to the project folder

```bash
cd "/Users/joaobastos/Desktop/João/Code/Portfolio/Portfolio"
```

> The path contains spaces and a special character (`ã`), so it must be wrapped in quotes.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Open in the browser

```
http://localhost:5173/portfolio/
```

The project uses `base: '/portfolio/'`, so the trailing `/portfolio/` is required.

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Create a production build in `dist` |
| `npm run preview` | Preview the production build        |

## Project Structure

```
Portfolio/
├── public/          # Static assets (fonts, images, SVGs)
├── src/
│   ├── components/  # Reusable components
│   ├── hooks/       # Custom hooks
│   ├── pages/       # Pages (Startseite, Cv, project pages)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

## Troubleshooting

**Changes don't show up in the browser?**
Make sure the dev server runs in the same folder you are editing:

```bash
pwd
```

The output must match the project path above. If an old server is still running, stop it first:

```bash
pkill -f vite
```

**Font warnings in the terminal?**
Use `/font/...` instead of `/public/font/...` in CSS paths. Files in `public/` are served from the root.

## Links

- GitHub: [Jaobast](https://github.com/Jaobast)
- LinkedIn: [joao-bastos-profil](https://www.linkedin.com/in/joao-bastos-profil/)
- Instagram: [@joaobastos.web](https://www.instagram.com/joaobastos.web)
