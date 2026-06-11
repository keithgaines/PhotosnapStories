# Photosnap Platform Modernization

Modernization project focused on upgrading an older RedwoodJS application to improve maintainability, deployment reliability, and frontend organization.

---

## Architecture

<img width="1536" height="1024" alt="Architecture Diagram" src="https://github.com/user-attachments/assets/1a434634-f689-4630-acb6-56a7cc507ee3" />

---

## Problem

The original application was built on an older RedwoodJS version and required updates to support modern tooling and deployment workflows.

The project focused on improving maintainability, resolving build issues, and restructuring the frontend for long-term stability.

---

## Solution

The application was upgraded to RedwoodJS 7 with Vite and TypeScript support.

The work included:

* Framework modernization
* Frontend refactoring
* Responsive layout improvements
* Build and deployment fixes
* Component organization improvements

---

## Architecture

```text
PhotosnapStories
├── web/
│   ├── pages/
│   ├── components/
│   ├── layouts/
│   └── src/
│
├── api/
│   ├── db/
│   └── src/
│
├── static/
├── redwood.toml
└── package.json
```

---

## Technology Stack

### Frontend

* React
* TypeScript
* RedwoodJS 7

### Tooling

* Vite
* Yarn 3

### Backend

* RedwoodJS API
* Prisma

### Deployment

* Vercel

---

## Improvements

### Framework Modernization

* Upgraded to RedwoodJS 7.7.4
* Migrated to Vite
* Updated project dependencies
* Improved TypeScript support

### Frontend Refactoring

* Improved component organization
* Refactored CSS structure
* Standardized responsive layouts
* Simplified page composition

### Deployment Stability

* Resolved module-loading issues
* Fixed build failures
* Improved Vercel compatibility
* Optimized deployment workflow

---

## Engineering Challenges

During the modernization effort, several issues had to be resolved:

* Vite compatibility problems
* CSS loading issues
* Module resolution errors
* Asset organization
* Redwood configuration updates
* Deployment failures

---

## What This Project Demonstrates

* Framework migration
* Frontend refactoring
* Troubleshooting and debugging
* Responsive UI development
* Build tooling modernization
* Deployment workflows
* Component-based architecture

---

## Local Development

```bash
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

The application is deployed through Vercel using RedwoodJS and Vite build settings.

---

## Future Enhancements

* Accessibility improvements
* Additional animations and interactions
* Performance optimizations
* Expanded backend capabilities

---

## Repository

https://github.com/keithgaines/PhotosnapStories
