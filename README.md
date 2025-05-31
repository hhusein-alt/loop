# LeisureHub - Leisure Center Branch Demo

A modern web application for managing leisure center branches, built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- Clean, modern landing page
- Branch selection with crowd levels and visitor information
- User profile with social features
- Responsive design
- GitHub Pages deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/looplast.git
cd looplast
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

### Deploying to GitHub Pages

1. Push your changes to GitHub:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
# or
yarn deploy
```

The site will be available at `https://yourusername.github.io/looplast`

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Landing page
│   └── dashboard/      # Dashboard pages
├── components/         # React components
│   └── ui/            # UI components
└── lib/               # Utility functions
```

## Technologies Used

- Next.js 14
- React 19
- Tailwind CSS
- shadcn/ui
- TypeScript
- GitHub Pages

## License

MIT
