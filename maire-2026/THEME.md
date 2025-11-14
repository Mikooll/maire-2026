# 🎨 Guide de personnalisation des couleurs

Ce guide explique comment modifier facilement les couleurs du site.

## Méthode 1 : Modifier les couleurs dans Tailwind (Recommandé)

Ouvrez le fichier `tailwind.config.js` et modifiez les valeurs hexadécimales dans la section `colors` :

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // ← Modifiez cette valeur pour changer la couleur principale
    // Utilisez un générateur de palette pour créer les variantes (50-900)
  },
  secondary: {
    500: '#d946ef', // ← Couleur secondaire
  },
  accent: {
    500: '#f97316', // ← Couleur d'accent
  },
}
```

### Générateurs de palettes recommandés :
- [Tailwind Color Palette Generator](https://uicolors.app/create)
- [Coolors.co](https://coolors.co/)

## Méthode 2 : Modifier les variables CSS

Ouvrez le fichier `assets/css/main.css` et modifiez les variables CSS :

```css
:root {
  --color-primary: #0ea5e9;     /* Couleur principale */
  --color-secondary: #d946ef;   /* Couleur secondaire */
  --color-accent: #f97316;      /* Couleur d'accent */
  --color-background: #ffffff;  /* Couleur de fond */
  --color-text: #1f2937;        /* Couleur du texte */
}
```

## Utilisation dans les composants

### Avec les classes Tailwind :
```vue
<button class="bg-primary-500 hover:bg-primary-600">Mon bouton</button>
```

### Avec les classes utilitaires personnalisées :
```vue
<button class="btn-primary">Mon bouton</button>
```

### Avec les variables CSS :
```vue
<style scoped>
.mon-element {
  background-color: var(--color-primary);
}
</style>
```

## 💡 Conseils

1. **Cohérence** : Utilisez toujours `primary` pour les actions principales, `secondary` pour les actions secondaires, et `accent` pour attirer l'attention
2. **Contraste** : Assurez-vous d'avoir un bon contraste entre le texte et le fond (ratio minimum 4.5:1)
3. **Accessibilité** : Testez votre palette avec un vérificateur de contraste comme [WebAIM](https://webaim.org/resources/contrastchecker/)

