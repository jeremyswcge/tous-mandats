# Tous Mandats — refonte

Refonte du site [tous-mandats.ch](https://tous-mandats.ch) en Next.js 14 (App Router) + Tailwind CSS.
Direction esthétique : **Swiss editorial luxury** — typographie serif Fraunces, palette ink/bone/verdigris/copper, mise en page magazine, micro-textures grain.

## Stack

- **Next.js 14** (App Router, Server Components, RSC images)
- **TypeScript strict**
- **Tailwind CSS 3** + tokens custom
- **Fraunces** (display) + **Manrope** (body) + **JetBrains Mono** (UI labels)
- Déployé sur **Vercel**

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
npm run start    # serve production build
```

## Pages

- `/` — Accueil (hero éditorial, manifeste, services, bien à la une)
- `/fiscalite` — Trois segments + expertises immobilières détaillées
- `/immobilier` — Catalogue + typologies
- `/immobilier/[slug]` — Fiche bien
- `/equipe` — Famille Buclin + mandataire
- `/contact` — Formulaire + coordonnées

## Données

Source unique : `lib/data.ts` (services, équipe, biens, segments fiscaux, expertises).

## Déploiement

Push sur `main` → déploiement automatique Vercel.
