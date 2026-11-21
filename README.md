# Onsaldo VAT Register

A responsive VAT register dashboard built with **Next.js, React, and TypeScript**. This project is a frontend implementation of an accounting dashboard concept, focused on usability, responsive layouts, and a clean component-based architecture.

## Live Demo

**[Open Onsaldo VAT Register](https://onsaldo-vat-register.vercel.app)**

**[View GitHub Repository](https://github.com/mykytapilec/onsaldo-vat-register)**

## Features

- **VAT Register Dashboard** — sales and purchase register navigation.
- **Financial Summary** — overview cards for Net, VAT, and Gross amounts.
- **VAT Breakdown** — VAT rate summary.
- **Document Management** — responsive documents table with horizontal scrolling on mobile.
- **Search and Filters** — filter documents by year, month, operation type, and JPK V7 code.
- **Pagination** — navigate through document records.
- **Document Details** — modal with detailed information about a selected document.
- **Demo States** — switch between Filled, Empty, and Error states.
- **Light and Dark Themes** — theme preference is saved in local storage.
- **Responsive Design** — layouts adapted for desktop and mobile screens.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, CSS custom properties
- **Linting:** ESLint

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/mykytapilec/onsaldo-vat-register.git
cd onsaldo-vat-register
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Demo Data

The application currently uses local demonstration data. No external accounting services or backend integrations are required.

The demo toolbar allows switching between:

- **Filled** — displays document records and financial summaries.
- **Empty** — displays the empty state.
- **Error** — displays an error state.

The purchase register is currently represented by a placeholder.

## Responsive Design

The interface is designed for desktop and mobile screens.

- Desktop uses a sidebar navigation and a full-width documents table.
- Mobile uses bottom navigation and a horizontally scrollable documents table.
- Document details are displayed in a modal.
- Light and dark themes are supported across the interface.

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx

components/
  layout/
    app-shell.tsx
    mobile-navigation.tsx
    sidebar.tsx
    theme-toggle.tsx
    topbar.tsx
  vat-register/
    demo-states-toolbar.tsx
    document-details-modal.tsx
    documents-data.ts
    documents-table.tsx
    register-filters.tsx
    register-switcher.tsx
    summary-cards.tsx
    vat-breakdown.tsx
```

## License

This project was created as a demonstration project for recruitment purposes.