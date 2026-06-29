# Hema Sai Siddula - Personal Portfolio Website

This is a modern, professional, and fully responsive personal portfolio website built for **Hema Sai Siddula, Cloud & DevOps Engineer**. It serves as a digital resume showcasing technical skills, professional history, education, and contact details.

## Tech Stack & Architecture
- **Structure:** Semantic HTML5
- **Style:** Custom Vanilla CSS3 (Electric Dark theme optimized for DevOps/Cloud professionals)
- **Interactivity:** Vanilla ES6 JavaScript (includes scroll observer reveals, mobile navigation toggling, and contact form validation)
- **Assets:** Google Fonts (`Inter`, `JetBrains Mono`), Font Awesome Icons v6

---

## Directory Structure
```
├── index.html                  # Main website landing page
├── style.css                   # Custom global styling rules
├── script.js                   # Client-side validation & interactivity script
├── README.md                   # Setup and deployment documentation
├── Hemasai_DevOps_Resume.pdf   # Original resume PDF (source of truth)
└── assets/
    └── images/
        └── profile.png         # Headshot profile picture (generated)
```

---

## Customizing Placeholders
Since the original resume did not specify distinct project files, cert numbers, or awards, these sections are styled as realistic **Placeholders** marked with a yellow `Placeholder` badge. 

To personalize these sections, search for the term `placeholder-badge` or look for the section comments in `index.html`:
1. **Projects:** Update the card titles, technology tags, and description sentences inside `<section id="projects">`. Remove the `<span class="placeholder-badge">Placeholder</span>` tags.
2. **Certifications:** Update the credential names, issuers, and IDs in `<section id="certs-edu">`.
3. **Achievements:** Edit the achievements card contents in `<section id="achievements">`.
4. **Social Links:** Search for `class="social-icon"` inside the `<section id="contact">` section and replace the `#` links with your actual LinkedIn and GitHub profile URLs.

---

## Deployment Guide

### Option 1: Deploying to GitHub Pages (Recommended)
GitHub Pages hosts static websites directly from your GitHub repository for free.

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com/) and create a new public repository (e.g., `hemasai-portfolio`).
2. **Push the Files to GitHub:**
   - Initialize git in your local directory and commit:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of portfolio codebase"
     ```
   - Connect to your remote repository and push:
     ```bash
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/hemasai-portfolio.git
     git push -u origin main
     ```
3. **Enable GitHub Pages:**
   - Go to your repository settings page on GitHub.
   - Click on the **Pages** tab in the left sidebar.
   - Under **Build and deployment**, set the Source to **Deploy from a branch**.
   - Select the `main` branch and the `/ (root)` folder, then click **Save**.
   - Your site will be live at `https://YOUR_USERNAME.github.io/hemasai-portfolio/` in a couple of minutes!

### Option 2: Deploying to Netlify
Netlify offers instantaneous drag-and-drop deployments.

1. **Build Deployment:**
   - Compress the workspace files (`index.html`, `style.css`, `script.js`, `Hemasai_DevOps_Resume.pdf`, and the `assets` folder) into a single `.zip` archive.
2. **Upload to Netlify:**
   - Go to [Netlify Drop](https://app.netlify.com/drop).
   - Drag and drop your `.zip` archive into the upload area.
3. **Finish:**
   - Netlify will compile and host your site instantly. You can customize the free subdomain (e.g., `hemasai-devops.netlify.app`) under the Site Settings panel.
