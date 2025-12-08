# Guide du Thème - Unis pour les laurentinois

Ce document décrit la palette de couleurs et la typographie utilisées dans le projet Unis pour les laurentinois.

## Typographie

### Police : Montserrat

Le site utilise la police **Montserrat** de Google Fonts avec les graisses suivantes :

#### Utilisation dans Tailwind :
- `font-bold` (700) : **Montserrat Bold** - Pour les titres secondaires et textes importants
- `font-extrabold` (800) : **Montserrat ExtraBold** - Pour les titres principaux et éléments d'emphase

#### Exemples d'utilisation :
```vue
<!-- Titre principal avec ExtraBold -->
<h1 class="text-4xl font-extrabold text-secondary-500">
  Titre principal
</h1>

<!-- Titre secondaire avec Bold -->
<h2 class="text-2xl font-bold text-secondary-500">
  Sous-titre
</h2>

<!-- Texte normal (Regular 400 par défaut) -->
<p class="text-base">Contenu du texte</p>
```

## Palette de Couleurs

### Couleur Principale (Primary)
**Terracotta - #C06736**
- RGB: (192, 103, 54)
- Utilisation: Boutons principaux, liens, éléments d'action, accents visuels importants

Nuances disponibles (Tailwind):
- `primary-50`: #fdf6f1 (très clair)
- `primary-100`: #fbeadd
- `primary-200`: #f6d4ba
- `primary-300`: #f0b88e
- `primary-400`: #e09461
- `primary-500`: #C06736 ⭐ (couleur de base)
- `primary-600`: #a8552b
- `primary-700`: #8d4524
- `primary-800`: #733921
- `primary-900`: #5f301f (très foncé)

### Couleur du Texte (Secondary)
**Marron - #7A5F44**
- RGB: (122, 95, 68)
- Utilisation: Texte principal, titres, éléments de navigation

Nuances disponibles (Tailwind):
- `secondary-50`: #f8f6f3 (très clair)
- `secondary-100`: #efe9e3
- `secondary-200`: #ded3c6
- `secondary-300`: #c8b5a1
- `secondary-400`: #a98b6f
- `secondary-500`: #7A5F44 ⭐ (couleur de base)
- `secondary-600`: #6a5139
- `secondary-700`: #574230
- `secondary-800`: #49372a
- `secondary-900`: #3d2f24 (très foncé)

### Couleur d'Accent (Accent)
**Terracotta - #C06736**
- Identique à la couleur principale
- Utilisation: Éléments d'emphase, highlights, badges

## Comment Utiliser les Couleurs

### Dans les composants Vue (avec Tailwind)

```vue
<!-- Bouton principal -->
<button class="bg-primary-500 hover:bg-primary-600 text-white">
  Cliquer ici
</button>

<!-- Texte avec la couleur secondaire -->
<p class="text-secondary-500">
  Votre texte ici
</p>

<!-- Bordure avec couleur d'accent -->
<div class="border-2 border-accent-500">
  Contenu
</div>
```

### Avec les variables CSS

```css
.mon-element {
  color: var(--color-text);
  background-color: var(--color-primary);
  border-color: var(--color-accent);
}
```

## Classes Utilitaires Personnalisées

- `.btn-primary`: Bouton avec le style principal
- `.btn-secondary`: Bouton avec le style secondaire
- `.card`: Carte avec ombre et bordures arrondies

## Modification des Couleurs

Pour modifier les couleurs du site:

1. **Tailwind Config** (`tailwind.config.js`): Modifiez les valeurs dans la section `colors`
2. **Variables CSS** (`assets/css/main.css`): Mettez à jour les variables `:root`

## Accessibilité

Les couleurs ont été choisies pour assurer un bon contraste et une lisibilité optimale:
- Contraste texte principal (#7A5F44) sur fond blanc: Excellent ✓
- Contraste boutons (#C06736) avec texte blanc: Bon ✓
