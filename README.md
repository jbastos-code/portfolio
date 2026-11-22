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
cd ~/Developer/Portfolio
```

> Keep the project outside iCloud-synced folders (Desktop, Documents). Use Git and GitHub to sync between machines.

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

## Commit Convention

Commits follow the [Conventional Commits](https://www.conventionalcommits.org/) style:

```
type: short description in the imperative
```

GitHub already stores the date and time of each commit, so there is no need to add them to the message.

### Types

| Type       | When to use it                                          | Example                                        |
| ---------- | ------------------------------------------------------- | ---------------------------------------------- |
| `feat`     | A new feature, section or component                     | `feat: add resume button with icon`            |
| `fix`      | A bug fix                                               | `fix: correct svg attributes for React`        |
| `style`    | Visual changes (CSS, spacing, colors, typography)       | `style: align resume button with flex`         |
| `content`  | Texts, translations, images, project descriptions       | `content: update German about text`            |
| `refactor` | Code reorganization without changing the result         | `refactor: split Startseite into components`   |
| `perf`     | Performance improvements                                | `perf: compress project images`                |
| `docs`     | README and documentation                                | `docs: update project path in README`          |
| `chore`    | Config, dependencies, build and deploy                  | `chore: fix font paths in CSS`                 |
| `revert`   | Undo a previous commit                                  | `revert: remove test heading from Startseite`  |


### Workflow

```bash
git add .
git commit -m "feat: add resume button with icon"
git push
```

On the other machine, always run `git pull` before starting to work.

## Links

- GitHub: [Jaobast](https://github.com/Jaobast)
- LinkedIn: [joao-bastos-profil](https://www.linkedin.com/in/joao-bastos-profil/)
- Instagram: [@joaobastos.web](https://www.instagram.com/joaobastos.web)
