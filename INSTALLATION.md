# 🚀 Installation et Démarrage - Site Maire 2026

## ✅ Ce qui a été fait

### Phase 1 à 4 : COMPLÉTÉES ✅

Le projet a été initialisé avec succès et les fondations sont en place :

1. **✅ Projet Nuxt3 + TypeScript** configuré et fonctionnel
2. **✅ TailwindCSS** installé avec système de couleurs personnalisables
3. **✅ Structure complète** : layouts, composants, pages, types
4. **✅ 4 pages créées** : Accueil, Candidats, Programme, Contact
5. **✅ Navigation** : Header responsive avec menu mobile
6. **✅ Footer** avec liens et informations de contact
7. **✅ Documentation** : README.md et THEME.md pour la personnalisation

## 📂 Localisation du projet

Le projet se trouve dans le dossier :
```
/Users/Mika/Desktop/Maire 2026/maire-2026/
```

## 🎯 Démarrage rapide

### 1. Ouvrir le dossier du projet
```bash
cd "/Users/Mika/Desktop/Maire 2026/maire-2026"
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

## 📄 Pages disponibles

- **/** - Page d'accueil avec hero et présentation
- **/candidats** - Liste des candidats avec cartes interactives
- **/programme** - Programme avec les 5 axes (version texte en attendant l'arbre)
- **/contact** - Formulaire de contact et informations

## 🎨 Personnaliser les couleurs

### Méthode 1 : Modifier Tailwind (Recommandé)
Fichier : `tailwind.config.js`

```javascript
colors: {
  primary: { 500: '#0ea5e9' },    // Bleu principal
  secondary: { 500: '#d946ef' },  // Violet secondaire
  accent: { 500: '#f97316' },     // Orange accent
}
```

### Méthode 2 : Variables CSS
Fichier : `assets/css/main.css`

```css
:root {
  --color-primary: #0ea5e9;
  --color-secondary: #d946ef;
  --color-accent: #f97316;
}
```

📖 Guide complet : `maire-2026/THEME.md`

## ✏️ Personnaliser le contenu

### Candidats
Fichier : `pages/candidats.vue`

Modifier le tableau `candidates` (lignes 28-58) avec vos vraies données :
```typescript
const candidates: Candidate[] = [
  {
    id: 1,
    firstName: 'Marie',
    lastName: 'DUPONT',
    position: 'Tête de liste',
    currentJob: 'Directrice d\'école',
    photo: '/images/candidates/marie-dupont.jpg',
  },
  // ...
]
```

### Photos des candidats
Placez les photos dans : `public/images/candidates/`

### Programme
Fichier : `pages/programme.vue`

Modifier le tableau `themes` avec votre contenu (ligne 76-137)

### Contact
Fichier : `pages/contact.vue`

Modifier les coordonnées (adresse, téléphone, email) aux lignes 156-187

## 📋 Suivi de l'avancement

Consultez le **DEVBOOK.md** pour voir :
- ✅ Les phases terminées (31/59 étapes - 52.5%)
- 🔄 Les phases en cours
- ⏸️ Les étapes à venir

## ⚠️ En attente

### Pour continuer le développement :
1. **Image de l'arbre** pour la page Programme (Phase 5.2)
2. **Photos des candidats** (remplacer les placeholders)
3. **Contenu réel** du programme détaillé
4. **Logo du parti** pour le header

## 🛠️ Commandes utiles

```bash
# Développement
npm run dev              # Démarrer le serveur de développement

# Production
npm run build           # Créer un build de production
npm run preview         # Prévisualiser le build

# Maintenance
npm install             # Installer/mettre à jour les dépendances
```

## 📞 Prochaines étapes

1. **Tester le site** : Lancer `npm run dev` et visiter http://localhost:3000
2. **Personnaliser les couleurs** : Suivre les instructions dans THEME.md
3. **Ajouter le contenu réel** : Photos, textes, coordonnées
4. **Page Programme interactive** : Fournir l'image de l'arbre pour continuer

## 💡 Conseils

- Le site est **responsive** : il s'adapte automatiquement aux mobiles et tablettes
- Toutes les pages ont des **meta tags SEO** configurés
- Le menu mobile fonctionne avec un **hamburger menu**
- Les couleurs sont **cohérentes** sur tout le site

---

**Développé avec ❤️ pour les élections municipales 2026**

