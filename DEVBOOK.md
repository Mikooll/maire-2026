# DEVBOOK - Site Électoral Allegret 2026

## 📋 Vue d'ensemble
Site vitrine pour présenter le programme d'un parti politique pour les élections municipales.
**Stack technique :** Vue3/Nuxt3 + TypeScript

## 📊 Progression globale

### ✅ Phases complétées
- ✅ **Phase 1** : Initialisation et Configuration (5/5 étapes)
- ✅ **Phase 2** : Architecture et Layout (5/5 étapes)
- ✅ **Phase 3** : Page d'Accueil (5/5 étapes)
- ✅ **Phase 4** : Page Liste des Candidats (6/6 étapes)

### 🔄 Phases en cours
- 🔄 **Phase 5** : Page Programme - Structure de base (1/4 étapes + 1 bloquée)
- 🔄 **Phase 7** : Page Contact (5/6 étapes)
- 🔄 **Phase 8** : Système de Thème/Couleurs (3/4 étapes)
- 🔄 **Phase 9** : Optimisations et Finitions (1/6 étapes)

### ⏸️ Phases non commencées
- ⏸️ **Phase 6** : Page Programme - Interactivité (0/7 étapes)
- ⏸️ **Phase 10** : Déploiement (0/5 étapes)

**Avancement total : 31/59 étapes complétées (52.5%)**

---

## 🎯 Étapes du projet

### Phase 1 : Initialisation et Configuration
- [x] **1.1** Initialiser le projet Nuxt3 avec TypeScript
- [x] **1.2** Configurer la structure de dossiers (pages, components, composables, assets)
- [x] **1.3** Installer les dépendances essentielles (UI libraries si nécessaire)
- [x] **1.4** Mettre en place le système de gestion des couleurs (CSS variables ou configuration Tailwind)
- [x] **1.5** Créer le fichier de configuration des couleurs/thème

### Phase 2 : Architecture et Layout
- [x] **2.1** Créer le layout principal (header, footer, navigation)
- [x] **2.2** Implémenter le menu de navigation entre les 4 pages
- [x] **2.3** Créer le composant Header avec logo et navigation
- [x] **2.4** Créer le composant Footer avec mentions légales
- [x] **2.5** Mettre en place le système de routing pour les 4 pages

### Phase 3 : Page d'Accueil
- [x] **3.1** Créer la structure de la page d'accueil (`pages/index.vue`)
- [x] **3.2** Concevoir le hero/bannière principale
- [x] **3.3** Ajouter une section de présentation du parti/programme
- [x] **3.4** Créer des call-to-action vers les autres pages
- [x] **3.5** Optimiser le responsive design de la page

### Phase 4 : Page Liste des Candidats
- [x] **4.1** Créer la page candidats (`pages/candidats.vue`)
- [x] **4.2** Créer le composant carte candidat (`CandidateCard.vue`)
  - Photo du candidat
  - Nom et prénom
  - Poste à occuper
  - Travail actuel
- [x] **4.3** Mettre en place la grille de cartes responsive
- [x] **4.4** Créer le type TypeScript pour les données candidat
- [x] **4.5** Créer un fichier de données mock pour les candidats
- [x] **4.6** Ajouter des animations au survol des cartes

### Phase 5 : Page Programme - Structure de base
- [x] **5.1** Créer la page programme (`pages/programme.vue`)
- [⚠️] **5.2** Intégrer l'image de l'arbre (à recevoir - EN ATTENTE)
- [ ] **5.3** Créer le composant Arbre principal
- [ ] **5.4** Positionner les 5 zones cliquables sur les branches :
  - Soutien aux associations
  - L'eau
  - Mieux vivre en Chartreuse
  - Restaurer la déontologie
  - Finances

### Phase 6 : Page Programme - Interactivité
- [ ] **6.1** Implémenter la logique de clic sur les thèmes (branches)
- [ ] **6.2** Créer le composant "Fruits" (sous-thèmes)
- [ ] **6.3** Créer les animations d'apparition des fruits
- [ ] **6.4** Implémenter la logique de clic sur les fruits
- [ ] **6.5** Créer le composant InfoBulle/Tooltip
- [ ] **6.6** Créer les types TypeScript pour thèmes/sous-thèmes/détails
- [ ] **6.7** Créer un fichier de données pour le contenu du programme

### Phase 7 : Page Contact
- [x] **7.1** Créer la page contact (`pages/contact.vue`)
- [x] **7.2** Créer le formulaire de contact (nom, email, message)
- [x] **7.3** Ajouter la validation des champs
- [x] **7.4** Implémenter la logique d'envoi (mailto ou API)
- [x] **7.5** Ajouter les informations de contact (adresse, téléphone, réseaux sociaux)
- [ ] **7.6** Intégrer éventuellement une carte Google Maps

### Phase 8 : Système de Thème/Couleurs
- [x] **8.1** Finaliser le système de variables CSS pour les couleurs
- [x] **8.2** Documenter comment changer les couleurs du site
- [x] **8.3** Créer un fichier de configuration des couleurs centralisé
- [ ] **8.4** Tester le changement de thème sur toutes les pages

### Phase 9 : Optimisations et Finitions
- [ ] **9.1** Optimiser les images (compression, lazy loading)
- [x] **9.2** Ajouter les meta tags SEO pour chaque page
- [ ] **9.3** Tester la performance (Lighthouse)
- [ ] **9.4** Vérifier l'accessibilité (a11y)
- [ ] **9.5** Tester sur différents navigateurs
- [ ] **9.6** Tester sur différents appareils (mobile, tablette, desktop)

### Phase 10 : Déploiement
- [ ] **10.1** Configurer le build de production
- [ ] **10.2** Choisir et configurer l'hébergement (Vercel, Netlify, etc.)
- [ ] **10.3** Configurer le nom de domaine
- [ ] **10.4** Déployer le site
- [ ] **10.5** Tester le site en production

---

## 📦 Dépendances prévues
- Nuxt 3
- TypeScript
- Vue 3
- TailwindCSS (optionnel, pour le système de couleurs)
- VueUse (optionnel, pour les composables utilitaires)

---

## 🎨 Notes importantes
- **Système de couleurs** : Doit être facilement modifiable (variables CSS ou config Tailwind)
- **Image de l'arbre** : À recevoir avant la Phase 5
- **Contenu** : Prévoir des données mock pour développer, à remplacer par le contenu réel

---

## 📝 Légende
- [ ] À faire
- [x] Terminé
- [⏳] En cours
- [⚠️] Bloqué

---

*Dernière mise à jour : 3 novembre 2025*

