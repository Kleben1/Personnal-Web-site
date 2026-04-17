<div align="center">
  <h1>🌌 Kieran Lelong — Modern Portfolio</h1>
  <p><i>Code elegance meets infrastructure robustness.</i></p>

  <img src="https://img.shields.io/badge/Astro-0C1328?style=for-the-badge&logo=astro&logoColor=orange" alt="Astro" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
</div>

<br />
**DISCLAIMER** This website is created with Google Antigravity. It's not made from "Scratch". However, the architecture and features were fixed by myself. It's not just prompting and deploy despite the quality.


Welcome to the source code of my interactive portfolio.  
More than just an online CV, this site is a concrete demonstration of my engineering philosophy: **reliability, performance, and premium design.** The architecture reflects my 5 core pillars of expertise: **Development**, **Networking**, **Data**, **AI**, and **Cybersecurity**.

---

## 🔥 Why this architecture? (Technical Stack)

To guarantee lightning-fast performance while maintaining a highly dynamic "Deep Tech" interface, I chose **Astro**.  

* **Zero JS by default**: The site is delivered as ultra-fast static HTML.
* **Island Architecture**: Only components requiring interactivity (such as the React *SkillGrid* or the animated *Terminal*) are hydrated client-side.
* **Optimized Media**: High-quality `.webm` background videos ensure total immersion without sacrificing page load times.
* **Cutting-edge Aesthetics**: The UI relies on *Glassmorphism*, subtle gradients, and micro-animations powered by [Framer Motion](https://www.framer.com/motion/).

## 🗂️ Project Structure

The project maintains a clinical organization, designed for rapid CI/CD deployment (optimized for Vercel):

```text
/
├── public/                 # Exposed static assets (Optimized webm videos)
├── scripts/                # Utility scripts (e.g., video compression)
├── src/
│   ├── components/         # Isolated components (Header, Footer, UI, Forms)
│   ├── config/             # Centralized config files (data, personal info)
│   ├── layouts/            # Page templates (Master layout)
│   ├── pages/              # Astro routing & main views
│   └── styles/             # Global variables & CSS utilities (Tailwind)
└── package.json            # Project dependencies
```

##☁️ Deployment
This portfolio is Vercel-Ready.

It has no unnecessary server dependencies. As soon as a push is made to the main branch of the linked GitHub repository, Astro builds the site statically and distributes it across Vercel's global CDN in seconds.

##🤝 Contact
Have an idea? A project? Want to explore technical synergies?

##📧 Email: lelongkieran@gmail.com

##🔗 Linktree: https://linktr.ee/kieranlelong

<p align="center">
<i>Designed and developed by Kieran Lelong.</i>
</p>
