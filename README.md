# personal-site-basic

Personal portfolio site built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- `react-icons`
- `use-scramble`

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - start dev server with Turbopack
- `npm run build` - production build
- `npm run start` - run built app
- `npm run lint` - run Next.js ESLint checks

## App Routes

- `/` - home (profile, latest blogs preview, work, projects preview, links)
- `/projects` - full projects list
- `/blogs` - searchable blog index
- `/blogs/b/1`
- `/blogs/b/2`
- `/blogs/b/3`

## Keyboard Shortcuts

- Global navigation:
- `h` -> home
- `p` -> projects
- `b` -> blogs
- Blog search page (`/blogs`):
- `/` opens search input
- `Esc` closes search
- `ArrowUp` / `ArrowDown` moves selection
- `Ctrl/Cmd + j` / `Ctrl/Cmd + k` moves selection
- `Enter` opens selected blog

## Content Model

Primary content is managed in [`src/data/data.ts`](./src/data/data.ts):

- `nav` - top navigation labels and paths
- `profile` - homepage profile details
- `work` - experience entries
- `projects` - project cards/list entries
- `urls` - social/contact links
- `blogs` - metadata for blog index and links

## Component/Layout Structure

- [`src/app/layout.tsx`](./src/app/layout.tsx) - root metadata + shared container
- [`src/app/page.tsx`](./src/app/page.tsx) - homepage composition
- [`src/components/header.tsx`](./src/components/header.tsx) - nav + animated title
- [`src/components/scramble.tsx`](./src/components/scramble.tsx) - title scramble effect
- [`src/components/search-bar.tsx`](./src/components/search-bar.tsx) - keyboard-driven blog search
- [`src/components/blog-layout.tsx`](./src/components/blog-layout.tsx) - shared blog post layout

## Styling

Global styles and theme tokens live in [`src/app/globals.css`](./src/app/globals.css).

Key details:
- Custom local font: `Lilex Nerd Font` from `public/fonts`
- Theme tokens (`--color-light-green`, `--color-light-grey`)
- Reusable utility component classes (`.section-heading`, `.blog-content`, etc.)

## Adding a New Blog Post

1. Add blog metadata to `blogs` in [`src/data/data.ts`](./src/data/data.ts): id, title, date, and URL.
2. Create a new page file under `src/app/blogs/b/<id>/page.tsx`.
3. Render content with [`BlogLayout`](./src/components/blog-layout.tsx).
4. Ensure `url` in `data.ts` matches the new route.

## Assets

Static assets are in `public/`, including:

- Blog media (`.mp4`, `.png`, `.jpg`)
- App icons/SVGs
- Local font files in `public/fonts`
