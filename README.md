# PhotosnapStories

Modern photography storytelling platform rebuilt with a production-oriented frontend architecture using React, RedwoodJS, TypeScript, and Vite.

Designed to demonstrate scalable UI organization, reusable component structure, responsive layout systems, and modern deployment workflows commonly used in production web applications.

---

## Architecture Overview

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/1a434634-f689-4630-acb6-56a7cc507ee3" />


---

## Project Overview

PhotosnapStories is a full-stack RedwoodJS application focused on responsive storytelling experiences for photography-driven content platforms.

The project was modernized from an older Redwood implementation into a cleaner RedwoodJS 7 + Vite architecture with an emphasis on:

* Frontend maintainability
* Reusable component systems
* Responsive design architecture
* Production-style project organization
* Deployment optimization for Vercel
* Type-safe application structure

The application demonstrates practical software engineering patterns used in modern React ecosystems while maintaining a polished marketing-style user experience.

---

## Technical Focus Areas

### Frontend Architecture

* React + TypeScript application structure
* RedwoodJS 7 framework modernization
* Component-driven UI organization
* Route-level page separation
* Shared layout architecture
* Reusable styling systems
* Responsive CSS refactoring
* Vite-based build optimization

### Engineering Improvements

* Migrated legacy Redwood configuration to RedwoodJS 7.7.4
* Refactored application structure for long-term maintainability
* Resolved Vite compatibility and module-loading issues
* Improved CSS architecture and asset organization
* Standardized responsive layout behavior across pages
* Optimized Vercel deployment workflow
* Implemented cleaner separation between UI, layouts, and page logic

### Deployment & Tooling

* Vercel deployment pipeline
* Yarn 3 workspace configuration
* Vite bundling and optimization
* Prisma ORM integration
* RedwoodJS monorepo architecture
* TypeScript-based development workflow

---

## System Design

The application follows RedwoodJS’s full-stack monorepo structure:

```text
PhotosnapStories
├── web/
│   ├── pages/
│   ├── components/
│   ├── layouts/
│   └── src/index.html
│
├── api/
│   ├── db/
│   └── src/
│
├── static/
├── redwood.toml
└── package.json
```

### Web Layer

The frontend application is organized around reusable UI components and route-driven page composition.

Responsibilities include:

* Rendering responsive user interfaces
* Shared layout management
* Static asset delivery
* Client-side interactions
* Component composition

### API Layer

The API side provides RedwoodJS server functionality and Prisma integration for future backend expansion.

Responsibilities include:

* GraphQL support
* Service-layer business logic
* Database access abstraction
* Prisma schema management
* Seed data workflows

---

## Technology Stack

| Category           | Technologies                      |
| ------------------ | --------------------------------- |
| Frontend           | React, TypeScript, RedwoodJS      |
| Build Tooling      | Vite                              |
| Backend Framework  | RedwoodJS API                     |
| ORM                | Prisma                            |
| Database           | PostgreSQL / SQLite (development) |
| Deployment         | Vercel                            |
| Package Management | Yarn 3                            |

---

## Key Engineering Takeaways

This project demonstrates experience with:

* Modern React application architecture
* Frontend system refactoring
* Full-stack JavaScript/TypeScript ecosystems
* Build tooling migration and modernization
* Responsive UI engineering
* Production deployment workflows
* Scalable component organization
* Real-world troubleshooting and framework migration

---

## Local Development

```bash
python -m pip install --upgrade pip
yarn install
yarn rw dev
```

---

## Build

```bash
yarn rw build
```

---

## Deployment

The application is configured for deployment on [Vercel](https://vercel.com) using RedwoodJS-compatible build settings and Vite optimization.

---

## Repository

[PhotosnapStories Repository](https://github.com/keithgaines/PhotosnapStories)
