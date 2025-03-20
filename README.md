# Next.js Blog Site

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Responsive design with Tailwind CSS
- TypeScript support
- Blog with Markdown support
- Contact form
- About page
- Services page
- Sticky navigation
- Responsive footer

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/content/blog` - Markdown blog posts
- `/src/lib` - Utility functions
- `/src/styles` - Global styles

## Adding Blog Posts

Add new blog posts as Markdown files in `/src/content/blog`. Each post should include frontmatter with title and date:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
---

Your content here...
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Markdown
- Gray Matter
