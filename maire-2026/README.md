# Site Électoral - Unis pour les laurentinois

Site vitrine pour présenter le programme d'un parti politique pour les élections municipales de 2026.

## 🚀 Technologies utilisées

- **Nuxt 3** - Framework Vue.js pour applications web
- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - Langage de programmation typé
- **TailwindCSS** - Framework CSS utilitaire
- **Vite** - Build tool ultra-rapide

## 📦 Installation

```bash
# Installer les dépendances
npm install
```

## 🛠️ Développement

```bash
# Lancer le serveur de développement sur http://localhost:3000
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 🏗️ Build de production

```bash
# Créer un build de production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📁 Structure du projet

```
unis-pour-les-laurentinois/
├── app/                    # Dossier principal de l'application
│   └── app.vue            # Composant racine
├── assets/                # Ressources (CSS, images)
│   └── css/
│       └── main.css       # Styles globaux et configuration Tailwind
├── components/            # Composants Vue réutilisables
│   ├── Header.vue        # En-tête et navigation
│   ├── Footer.vue        # Pied de page
│   └── CandidateCard.vue # Carte candidat
├── layouts/              # Layouts de page
│   └── default.vue       # Layout par défaut
├── pages/                # Pages de l'application (routing automatique)
│   ├── index.vue         # Page d'accueil
│   ├── candidats.vue     # Page liste des candidats
│   ├── programme.vue     # Page programme
│   └── contact.vue       # Page contact
├── types/                # Définitions TypeScript
│   └── candidate.ts      # Type Candidate
├── public/               # Fichiers statiques
├── nuxt.config.ts        # Configuration Nuxt
├── tailwind.config.js    # Configuration Tailwind
└── tsconfig.json         # Configuration TypeScript
```

## 🎨 Personnalisation des couleurs

Le site utilise un système de couleurs facilement modifiable. Consultez le fichier `THEME.md` pour plus d'informations sur la personnalisation des couleurs.

### Méthode rapide

Modifiez les couleurs principales dans `tailwind.config.js` :

```javascript
colors: {
  primary: {
    500: '#C06736', // Couleur principale - Terracotta
  },
  secondary: {
    500: '#7A5F44', // Couleur secondaire - Marron
  },
  accent: {
    500: '#C06736', // Couleur d'accent
  },
}
```

## 📄 Pages

### 1. Page d'accueil (`/`)
- Hero avec présentation du projet
- Section vision et engagements
- Les 5 piliers du programme
- Call-to-action

### 2. Page Candidats (`/candidats`)
- Grille de cartes présentant les candidats
- Photo, nom, poste et activité actuelle

### 3. Page Programme (`/programme`)
- Présentation des 5 axes du programme
- Interface interactive avec l'arbre (à venir)

### 4. Page Contact (`/contact`)
- Formulaire de contact
- Informations de contact
- Horaires de permanence

## 🔄 Statut du projet

Consultez le fichier `../DEVBOOK.md` à la racine du projet pour suivre l'avancement détaillé de toutes les phases de développement.

**Phases complétées :**
- ✅ Initialisation et Configuration
- ✅ Architecture et Layout
- ✅ Page d'Accueil
- ✅ Page Liste des Candidats

**En cours :**
- 🔄 Page Programme (en attente de l'image de l'arbre)
- 🔄 Page Contact (fonctionnelle, optimisations à venir)
- 🔄 Système de Thème/Couleurs (fonctionnel, tests à venir)

## 📝 À faire

### Prochaines étapes prioritaires :
1. Recevoir l'image de l'arbre pour la page Programme
2. Implémenter l'interactivité de la page Programme (arbre cliquable)
3. Ajouter les vraies photos des candidats
4. Remplacer le contenu mock par le contenu réel
5. Tests et optimisations

### Données à fournir :
- [ ] Image de l'arbre pour la page Programme
- [ ] Photos des candidats
- [ ] Contenu détaillé du programme
- [ ] Coordonnées réelles de contact
- [ ] Logo du parti

## 🤝 Contribution

Pour contribuer au projet :
1. Consultez le `DEVBOOK.md` pour voir les étapes à réaliser
2. Marquez les étapes complétées avec `[x]`
3. Documentez toute modification importante

## 📞 Support

Pour toute question concernant le développement du site, contactez l'équipe de développement.

---

*Dernière mise à jour : 3 novembre 2025*
