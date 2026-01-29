# Smita Bharath - Portfolio Website

A modern, responsive portfolio website showcasing experience, skills, and projects in AI Engineering and Machine Learning.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Smooth scrolling navigation

## 📋 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation with active section highlighting
- ✅ Modern, clean, professional aesthetic
- ✅ Subtle animations and hover effects
- ✅ Semantic HTML for accessibility
- ✅ Optimized performance with Vite

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx   # Navigation bar
│   │   ├── Hero.jsx     # Hero/intro section
│   │   ├── About.jsx    # About me section
│   │   ├── Skills.jsx   # Technical skills
│   │   ├── Experience.jsx # Work experience
│   │   ├── Projects.jsx  # Featured projects
│   │   ├── Education.jsx # Education section
│   │   └── Contact.jsx   # Contact information
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Design Decisions

- **React + Vite**: Chosen for fast development experience and excellent performance
- **Tailwind CSS**: Provides utility-first styling for rapid development and easy maintenance
- **Component-based architecture**: Each section is a separate component for better organization and reusability
- **Responsive-first**: Mobile-first approach ensures great experience on all devices
- **Accessibility**: Semantic HTML and proper ARIA labels for screen readers

## 📝 Customization

To update content, edit the respective component files in `src/components/`:
- Personal information: `Hero.jsx` and `Contact.jsx`
- About section: `About.jsx`
- Skills: `Skills.jsx`
- Experience: `Experience.jsx`
- Projects: `Projects.jsx`
- Education: `Education.jsx`

## 🌐 Deployment

The site can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- **AWS S3**: Upload the `dist` folder contents

## 📄 License

Personal portfolio - All rights reserved.
