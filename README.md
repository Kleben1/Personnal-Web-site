<div align="center">
  <h1>🌌 Kieran Lelong — Modern Portfolio</h1>
  <p><i>L'élégance du code, la robustesse de l'infrastructure.</i></p>

  <img src="https://img.shields.io/badge/Astro-0C1328?style=for-the-badge&logo=astro&logoColor=orange" alt="Astro" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
</div>

<br />

Bienvenue sur le code source de mon portfolio interactif. 
Plus qu'un simple CV en ligne, ce site est une démonstration concrète de ma philosophie d'ingénierie : **fiabilité, performance et design premium.** 

L'architecture reflète mes 5 piliers d'expertise : **Développement**, **Réseau**, **Data**, **IA** et **Cybersécurité**.

---

## 🔥 Pourquoi cette architecture ? (Le choix technique)

Pour garantir des performances fulgurantes tout en gardant une interface hautement dynamique ("Deep Tech"), le choix s'est porté sur **Astro**. 

* **0 Javascript par défaut** : Le site est livré sous forme de HTML statique ultra-rapide.
* **Island Architecture** : Seuls les composants nécessitant de l'interactivité (comme la *SkillGrid* React ou le *Terminal* animé) sont hydratés côté client.
* **Vidéos Optimisées** : Utilisation de vidéos de fond en `.webm` pour une immersion totale sans sacrifier le temps de chargement des pages.
* **Esthétique de pointe** : L'interface repose sur du *Glassmorphism*, des dégradés subtils, et des micro-animations via [Framer Motion](https://www.framer.com/motion/).

## 🗂️ Structure du Projet

Le projet maintient une propreté clinique, pensé pour un déploiement CI/CD rapide (optimisé pour Vercel) :

```text
/
├── public/                 # Assets statiques exposés (Vidéos webm optimisées)
├── scripts/                # Scripts utilitaires (ex: compression de vidéos)
├── src/
│   ├── components/         # Composants isolés (Header, Footer, UI, Forms)
│   ├── config/             # Fichiers de configuration centraux (data, infos persos)
│   ├── layouts/            # Templates englobants (Masteplayout)
│   ├── pages/              # Routing & vues principales Astro
│   └── styles/             # Variables globales et utilitaires CSS (Tailwind)
└── package.json            # Dépendances du projet
```

## 🚀 Lancer le projet localement

Vous souhaitez cloner ce dépôt et tester par vous-même ? L'environnement de développement est prêt à l'emploi.

**1. Cloner le projet**
```bash
git clone https://github.com/Kleben1/Personnal-Web-site.git
cd Personnal-Web-site
```

**2. Installer les dépendances**
```bash
npm install
# ou avec pnpm : pnpm install
```

**3. Lancer le serveur local (Hot Reload)**
```bash
npm run dev
```
Le projet sera accessible sur `http://localhost:4321`.

**4. Build pour la production**
```bash
npm run build
```
Vous pourrez ensuite prévisualiser le build optimisé de production avec la commande `npm run preview`.

---

## ☁️ Déploiement

Ce portfolio est "Vercel-Ready". 
Il n'a aucune dépendance serveur superflue. Dès qu'un *push* est fait sur la branche `main` du dépôt GitHub lié, Astro va builder le site de manière statique et le distribuer sur le CDN mondial de Vercel en quelques secondes.

## 🤝 Contact

Une idée ? Un projet ? Envie d'explorer des synergies techniques conjointes ?
* 📧 E-mail : lelongkieran@gmail.com
* 🔗 Linktree : [https://linktr.ee/kieranlelong](https://linktr.ee/kieranlelong)

<p align="center">
  <i>Conçu et développé par Kieran Lelong.</i>
</p>
