# 🔧 Réorganiser le projet Git

## Le problème
Le .git est dans `/Users/Mika/Desktop/Maire 2026/`
Mais le code est dans `/Users/Mika/Desktop/Maire 2026/maire-2026/`

GitHub ne voit donc pas le dossier `.github/workflows/` !

## ✅ Solution : Déplacer tout le contenu à la racine

```bash
cd "/Users/Mika/Desktop/Maire 2026"

# Déplacer tout le contenu de maire-2026 vers la racine
mv maire-2026/* .
mv maire-2026/.github .
mv maire-2026/.gitignore .gitignore-maire

# Fusionner les .gitignore si besoin
cat .gitignore-maire >> .gitignore
rm .gitignore-maire

# Supprimer le dossier maire-2026 maintenant vide
rmdir maire-2026

# Vérifier que tout est bon
ls -la | grep -E "\.github|package.json|pages"

# Commiter et pousser
git add .
git commit -m "Réorganisation: déplacement du code à la racine"
git push
```

Maintenant GitHub Actions devrait fonctionner ! 🎉


