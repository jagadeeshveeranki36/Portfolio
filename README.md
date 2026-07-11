# Jagadeesh Veeranki - Developer Portfolio

A unique, professional, and animated personal portfolio website built for **Jagadeesh Veeranki**, pursuing Master of Computer Applications (MCA) and specializing in Python & Full-Stack Web Development. 

Designed with modern typography, glassmorphism cards, fluid animated transitions, and interactive features including a mouse-reactive particle background and celebration confetti.

---

## 🚀 Tech Stack

* **Core Framework**: React 19 + Vite
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion (staggered scroll reveals, hover effects, modal transitions)
* **Router**: React Router (`HashRouter` to prevent 404s on GitHub Pages reload)
* **Icons**: Lucide React
* **Interactions**: Canvas Confetti

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### Installation

1. Clone or download this project.
2. Open your terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL shown in your console).

---

## 🔧 Personalization Guidelines

To make the portfolio fully your own, update these items:

1. **Vite Base Path**: Update the `base` path in `vite.config.js` to match your GitHub repository name. (See [DEPLOY.md](file:///d:/Jagadeesh-Portfolio/DEPLOY.md) for details).
2. **Social Media Profiles**: Open `src/components/Footer.jsx` and `src/sections/Contact.jsx` to replace `https://github.com` and `https://linkedin.com` placeholders with your actual profile links.
3. **Resume File**: Place your actual resume PDF in the `public/` directory and rename it to `resume.pdf` (overwriting the placeholder).
4. **Profile Picture**: If you'd like to use a photo instead of your initials:
   * Drop your image file in `public/` (e.g. `avatar.jpg`).
   * In `src/sections/Hero.jsx`, search for `avatar.jpg` and uncomment the `<img>` tag block.

---

## 📦 Deployment

Deploying is automated using the `gh-pages` package:

```bash
npm run deploy
```

For a detailed step-by-step deploy workflow, read [DEPLOY.md](file:///d:/Jagadeesh-Portfolio/DEPLOY.md).

---

## 📂 Project Structure

```text
src/
├── assets/         # Project images and assets
├── components/     # Reusable layout and interactive components
│   ├── BackToTop.jsx
│   ├── CustomCursor.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ScrollProgress.jsx
│   └── ThemeToggle.jsx
├── hooks/          # Custom hooks
│   └── useTheme.js # Handles light/dark theme switching and persistence
├── sections/       # Distinct sections of the single-page website
│   ├── About.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx         # App assembly & background radial glows
├── index.css       # Tailwind entry point & design system utilities
└── main.jsx        # Main React entry point wrapping HashRouter
```
