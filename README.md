# Perceptcraft - Web Application

Perceptcraft is a modern, responsive, and performance-optimized front-end web application built using **Next.js** and **Tailwind CSS**. It serves as a creative design and software development agency website, featuring beautifully crafted sections like Hero, About Us, Services, Component Showcases, and Contact Forms.

## 🚀 Features

- **Modern UI/UX**: Designed with a focus on stunning aesthetics, smooth animations, and glassmorphism UI.
- **Component-Driven Architecture**: The application is highly modular. Large monolithic pages have been refactored and split into reusable, atomic UI components and logic-driven `sections`.
- **Fully Responsive**: Mobile-first design principles ensure the application looks great across all device sizes.
- **Next.js App Router**: Utilizes the modern App Router architecture (`app/` directory) for seamless routing and server-side optimizations.
- **Custom Animations**: Includes subtle micro-interactions, marquee effects, scroll-to-top functionality, and parallax scrolls.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter, Plus Jakarta Sans, Fraunces (Next Font)

## 📂 Folder Structure

The project has been organized to promote reusability and clean code practices:

```text
frontend/
├── app/                  # Next.js App Router files (page.js, layout.js, globals.css)
├── components/           # Reusable React components
│   ├── layout/           # Shared layout components (Header, Footer, Sidebar, etc.)
│   ├── sections/         # Page-specific modular sections
│   │   ├── home/         # Home page sections (Hero, Features, Services, etc.)
│   │   ├── about/        # About page sections (Content, Stats)
│   │   ├── services/     # Service page sections
│   │   └── shared/       # Shared sections (e.g., Contact Form)
│   ├── ui/               # Lower-level reusable UI components (Buttons, Badges, ScrollToTop)
│   └── Pages/            # Remaining complex UI patterns & pages
├── public/               # Static assets (images, icons)
```

## 💻 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Copy the repository to your local machine:
   ```bash
   git clone https://github.com/Rudra-744/Percepcraft.git
   ```

2. Navigate into the frontend directory:
   ```bash
   cd Percepcraft/frontend
   ```

3. Install all dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live result. The page will auto-update as you edit the file.

## ✨ Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production usage.
- `npm start` - Starts the production server.
- `npm run lint` - Runs ESLint to catch errors in your code.
