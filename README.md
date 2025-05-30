# Website Rocca

A modern and responsive website built with **TypeScript**, **Tailwind CSS**, and **Vite**. This project is designed to be fast, maintainable, and easily scalable—perfect for a landing page or a business website.

## Tech Stack

- **Framework**: Vite  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS, PostCSS  
- **Package Manager**: Bun

## Project Structure

```bash
website-rocca/
├── public/                 # Static files (favicon, images, etc.)
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── main.tsx            # React entry point
│   └── App.tsx             # Root component
├── index.html              # Main HTML file
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── bun.lockb               # Bun lockfile
└── package.json            # Project scripts and metadata
```

## Requirements

- [Bun](https://bun.sh/) (or optionally [Node.js](https://nodejs.org/) with minor adjustments)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Boschi404/website-rocca.git
   cd website-rocca
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun run dev
   ```

   The app will be accessible at `http://localhost:3000`

## Production Build

```bash
bun run build
```

The output files will be saved in the `dist/` directory.

## License

This project is licensed under the **MIT** License. See the [LICENSE](LICENSE) file for more information.

## Author

Created by [Boschi404](https://github.com/Boschi404)
