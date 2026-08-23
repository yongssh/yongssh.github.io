# Personal website

Personal portfolio built with Next.js.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Test production build

Build the static site:

```bash
npm run build
```

Preview the build:

```bash
npx serve dist
```

## Before pushing

```bash
npm run build
git status
```

Then:

```bash
git add .
git commit -m "Describe changes"
git push
```

Note: filenames are case-sensitive on GitHub Actions, so component filenames and imports must match exactly.
