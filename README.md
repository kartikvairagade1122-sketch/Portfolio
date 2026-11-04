# Kartik Vairagade — Personal Developer Portfolio

> **Production-grade, responsive, and recruiter-focused developer portfolio website.**  
> Built with semantic HTML5, modern CSS3 (with custom design tokens & glassmorphism), Bootstrap 5, JavaScript (ES6+), and jQuery.

---

## 👨‍💻 About Kartik Vairagade

* **Role:** Full-Stack Java & Web Developer | MCA Candidate
* **Education:** Master of Computer Applications (MCA) in Computer Science at GH Raisoni Skill Tech University, Nagpur; B.Sc. (2024)
* **Industry Experience:** Web Developer Intern at India Active Software Inc. (Nagpur)
* **Location:** Nagpur, Maharashtra, India
* **GitHub:** [@kartikvairagade1122-sketch](https://github.com/kartikvairagade1122-sketch)
* **LinkedIn:** [linkedin.com/in/kartik-vairagade](https://www.linkedin.com/in/kartik-vairagade/)
* **Email:** [kartikvairagade1122@gmail.com](mailto:kartikvairagade1122@gmail.com)

---

## 🌟 Key Features

1. **Curated Obsidian & Slate Dark Theme:** Custom-tailored dark color palette with subtle border illumination, high contrast, and zero eye fatigue.
2. **Interactive ScrollSpy & Dynamic Navbar:** Automatically updates active navigation pills and changes blur opacity as the visitor scrolls through sections.
3. **Verified Skill Taxonomy & Filter:** Filter skills dynamically across Programming Languages, Java Ecosystem, Backend, Frontend, and Tools without page reloads.
4. **Interactive 3D Card Hover Tilts:** Subtle perspective tilt micro-interactions that gracefully respect `prefers-reduced-motion` settings for accessibility.
5. **Authentic Project Showcase:** Detailed presentations for the 3 verified projects with tech stacks, architecture descriptions, and detailed preview modals.
6. **Real-time Validated Contact Form:** Full client-side validation (regex email verification, minimum character counts, dynamic character counter, and direct mail dispatch) with instant feedback alerts and toast notifications.
7. **1-Click Clipboard Utilities:** Quick copy buttons for email, phone, and links with animated toast confirmations.
8. **Responsive Cross-Device Architecture:** Flawlessly adapted for ultra-wide desktop monitors, standard laptops, tablets, and mobile smartphones.
9. **Zero-Dependency Build:** No Node.js / NPM build pipeline required — runs out-of-the-box in any browser or static web server.

---

## 🛠️ Technology Stack

| Layer | Technologies Used | Reason for Selection |
| :--- | :--- | :--- |
| **Markup & Semantics** | Semantic HTML5 | Optimized SEO structure, Open Graph tags, and WCAG accessibility standards. |
| **Styling & Design System** | Custom CSS3, Bootstrap 5.3 | Modular CSS variables (design tokens), flexbox, grid, glassmorphism, paired with Bootstrap's responsive utilities. |
| **Interactivity & DOM** | JavaScript (ES6+) & jQuery 3.7.1 | Fast DOM manipulation, scroll events, dynamic skills filtering, clipboard API, and client-side form validation. |
| **Typography** | Plus Jakarta Sans & JetBrains Mono | Modern, corporate-grade typography paired with developer-focused monospaced accents. |
| **Iconography** | Bootstrap Icons & Devicon | Official vector icons for Java, Spring, MySQL, PHP, HTML5, CSS3, JS, Git, etc. |

---

## 📂 Project Folder Structure

```text
Portfolio/
│
├── index.html                       # Semantic website structure & SEO metadata
├── README.md                        # Documentation & setup instructions
├── .gitignore                       # Clean Git exclusion rules
│
└── assets/
    ├── css/
    │   ├── style.css                # Design tokens, dark theme, hero, cards, toast system
    │   └── responsive.css           # Mobile & tablet breakpoint refinements
    │
    ├── js/
    │   ├── main.js                  # Scroll spy, skills filter, card hover tilts, toast helpers
    │   └── contact.js               # Live form validation, character counter, mailto dispatch
    │
    ├── img/
    │   ├── kartik.jpg               # Professional headshot portrait
    │   ├── favicon.svg              # Custom <KV/> geometric developer monogram
    │   └── projects/                # Visual SVG architecture previews
    │       ├── vendor-portal.svg    # Vendor Registration Portal mockup
    │       ├── walmart-clone.svg    # Walmart eCommerce Clone mockup
    │       └── smart-spend.svg      # Smart Spend JavaFX Desktop mockup
    │
    └── docs/
        └── Kartik_Vairagade_Resume.pdf  # Verified resume document for download
```

---

## 🚀 How HTML, CSS, and JavaScript Work Together

Understanding how the architecture connects:

1. **`index.html` (The Skeleton & Semantic Meaning):**  
   Defines the structure of each section (`#hero`, `#about`, `#skills`, `#experience`, `#projects`, `#education`, `#contact`, and `#footer`). It links the fonts, external stylesheets, icons, and your modular scripts.
2. **`assets/css/style.css` (The Presentation & Visual Identity):**  
   Contains CSS Custom Properties (`:root` variables) for all colors, gradients, and typography. Every component (like `.glass-card`, `.btn-custom`, `.skill-card`) references these variables, ensuring visual harmony across the entire page.
3. **`assets/css/responsive.css` (The Device Adaptability):**  
   Contains `@media` queries that adjust padding, grid layouts, and typography sizes when viewed on tablets (<992px) and mobile screens (<768px).
4. **`assets/js/main.js` (The Page Logic & Interactivity):**  
   Listens to window scroll events to update the fixed navigation bar and toggle active section indicators. It also handles category filtering for technical skills, provides subtle 3D card tilt effects, and coordinates toast notifications.
5. **`assets/js/contact.js` (The Form Engine):**  
   Monitors input fields in real time, computes message character counts, enforces regex validation rules, triggers feedback banners, and safely prepares email client dispatch.

---

## 💻 How to Run Locally

### Option 1: Direct File Launch (No server required)
Simply double-click `index.html` or right-click and choose **Open with > Chrome / Brave / Edge**.

### Option 2: Run with XAMPP (Recommended)
Since this repository is located in your XAMPP web root (`c:\xampp\htdocs\Portfolio`):
1. Open the **XAMPP Control Panel**.
2. Start the **Apache** server.
3. Open your browser and navigate to:
   ```text
   http://localhost/Portfolio/
   ```

### Option 3: VS Code Live Server
1. Open the `Portfolio` folder in **Visual Studio Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Customize Content

### 1. Adding a New Project
In `index.html`, navigate to the `<div class="projects-grid">` section (around line 340). You can duplicate any `<div class="glass-card project-card tilt-card">` block:

```html
<div class="glass-card project-card tilt-card">
  <div class="project-media-wrapper">
    <img src="assets/img/projects/your-project-image.svg" alt="Project Name" class="project-media-img">
    <span class="project-category-overlay">Backend Web App</span>
    <span class="project-date-overlay">2026</span>
  </div>
  <div class="project-body">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">
      Brief description of the problem solved and core functionality.
    </p>
    <ul class="project-features-list">
      <li>Core feature one.</li>
      <li>Core feature two.</li>
    </ul>
    <div class="project-tech-stack">
      <span class="project-tech-pill">Java</span>
      <span class="project-tech-pill">Spring Boot</span>
      <span class="project-tech-pill">MySQL</span>
    </div>
    <div class="project-footer-actions">
      <a href="https://github.com/kartikvairagade1122-sketch/your-repo" target="_blank" class="btn-custom btn-secondary-custom flex-grow-1">
        <i class="bi bi-github"></i>
        <span>View Source</span>
      </a>
    </div>
  </div>
</div>
```

### 2. Updating Your Resume
Whenever you update your resume, simply place your new PDF inside `assets/docs/` with the exact filename:
```text
assets/docs/Kartik_Vairagade_Resume.pdf
```
The "Download Resume" buttons in both the header and hero sections will automatically serve your latest document.

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages (100% Free & Fast)

1. Create a public repository on your GitHub account: `Portfolio` (or `kartikvairagade1122-sketch.github.io`).
2. Push your project files:
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern portfolio implementation"
   git branch -M main
   git remote add origin https://github.com/kartikvairagade1122-sketch/Portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings > Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your live portfolio will be deployed instantly at:
   ```text
   https://kartikvairagade1122-sketch.github.io/Portfolio/
   ```

### Deploy to Vercel (Alternative)
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New Project"** and import the `Portfolio` repository.
3. Keep the default settings and click **Deploy**.
4. Vercel will assign a production URL (e.g. `kartik-vairagade.vercel.app`) with automatic SSL.

---

## 📄 License & Credits

* **Author:** Kartik Vairagade  
* **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/) & [Devicon](https://devicon.dev/)  
* **Fonts:** [Google Fonts (Plus Jakarta Sans & JetBrains Mono)](https://fonts.google.com/)
