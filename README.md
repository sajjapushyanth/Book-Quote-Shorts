# 📚 Book Quote Shorts

A simple React + Vite application that displays short, inspiring book quotes.  
Users can play quotes automatically, like them, and share them.  

🌐 **Live Demo** → https://subtle-puppy-57697b.netlify.app/ 

---

## ✨ Features

- 🎬 **Quote Player** with autoplay & manual navigation  
- ❤️ **Like / Unlike** your favorite quotes  
- 📤 **Share** quotes (mock share function)  
- 🎨 Clean UI with custom CSS (no Tailwind)  
- ⚡ Built with **React 19 + Vite** for fast development & builds  

---

## 📂 Project Structure

Book-Quote-Shorts/
├─ public/
│ └─ index.html
├─ src/
│ ├─ components/
│ │ └─ QuotePlayer.jsx
│ ├─ data/
│ │ └─ sampleQuotes.js
│ ├─ App.jsx
│ ├─ App.css
│ ├─ index.css
│ └─ main.jsx
├─ package.json
├─ vite.config.js
├─ netlify.toml
├─ .nvmrc
└─ README.md



🌐 Deployment (Netlify)

This project is configured for Netlify.

netlify.toml settings:

[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"


Build command: npm run build

Publish directory: dist

**🛠️ Tech Stack**

**React 19**
 – UI Library

**Vite**
 – Fast build tool

**Axios**
 – API requests

**Netlify**
 – Deployment

**📖 Sample Quotes Data**

Quotes are fetched from:

http://localhost:5000/api/quotes

Screenshots
<img width="1867" height="922" alt="image" src="https://github.com/user-attachments/assets/d1754eb7-80f7-46d6-a004-6fd07dfcc026" />


👨‍💻 Author

Developed by Sajja Pushyanth

GitHub: sajjapushyanth
