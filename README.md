# Mehrez BEN AMEUR - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing my work as a Full-Stack Developer & Data Science Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB)
![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-06B6D2)

## 🚀 Features

- **Modern Design** - Sleek, dark-themed portfolio with smooth animations
- **Responsive** - Fully responsive across all devices
- **Fast Performance** - Built with Vite for optimal loading speed
- **Interactive Elements** - Smooth scrolling, hover effects, and animations
- **Contact Form** - Integrated with Formspree for email submissions

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Form:** Formspree
- **Build Tool:** Vite

## 📋 Prerequisites

Before running the project, make sure you have:
- Node.js (v18 or higher)
- npm or yarn

## 🏃‍♂️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/subaru7958/portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── C.V.pdf              # Resume/CV file
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedBorderButton.jsx
│   │   └── Button.jsx
│   ├── docs/
│   │   └── C.V.pdf         # CV document
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Contact Form
The contact form uses Formspree. Update the form action URL in `src/sections/Contact.jsx`:
```javascript
fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

### Environment Variables
Create a `.env` file in the root directory if needed:
```env
VITE_FORM_ID=your_formspree_form_id
```

## 📱 Sections

- **Hero** - Introduction with name, title, and call-to-action buttons
- **About** - Education background and technical skills
- **Projects** - Featured projects with descriptions and links
- **Experience** - Work experience and timeline
- **Testimonials** - Client/peer recommendations
- **Contact** - Contact form and information

## 🎯 Skills

### Programming Languages
- Python, Java, JavaScript, PHP, C#

### Frontend
- React.js, HTML, CSS, Tailwind CSS

### Backend
- Node.js, Spring Boot, REST API

### Databases
- MySQL, Oracle, MongoDB

### Other Tools
- Git/GitLab, Unity, Android Studio

## 📄 License

This project is for personal portfolio use.

## 📧 Contact

- **Email:** mehrez1251@gmail.com
- **Phone:** +216 51431300
- **Location:** Tunis, Tunisia
- **GitHub:** https://github.com/subaru7958

---

Built with ❤️ by [Mehrez BEN AMEUR](https://github.com/subaru7958)
