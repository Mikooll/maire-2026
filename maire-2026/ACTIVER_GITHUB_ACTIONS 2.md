# 🔧 Activer GitHub Actions

## Le problème

Vous voyez "Get started with GitHub Actions" → GitHub Actions n'est pas activé ou ne détecte pas votre workflow.

## ✅ Solutions à essayer dans l'ordre

### 1. Activer GitHub Actions sur votre repository

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche, cliquez sur **Actions** → **General**
4. Dans "Actions permissions", sélectionnez :
   - ✅ **Allow all actions and reusable workflows**
5. Scrollez en bas et cliquez sur **Save**

### 2. Vérifier que le fichier est bien poussé

Sur GitHub, naviguez manuellement vers :
- Votre repo → cliquez sur le dossier `.github`
- Puis `workflows`
- Vous devriez voir `deploy-ionos.yml`

**Si vous ne voyez pas le fichier** :
```bash
cd "/Users/Mika/Desktop/Maire 2026/maire-2026"
git add .github/workflows/deploy-ionos.yml
git commit -m "Ajout workflow GitHub Actions"
git push
```

### 3. Forcer le déclenchement du workflow

Une fois que Actions est activé, faites un nouveau push :

```bash
cd "/Users/Mika/Desktop/Maire 2026/maire-2026"

# Créez un fichier vide pour déclencher un commit
touch .github/workflows/.trigger

# Commitez et poussez
git add .
git commit -m "Déclenchement workflow"
git push
```

### 4. Vérifier l'onglet Actions

1. Allez sur votre repo GitHub
2. Cliquez sur l'onglet **Actions** (à côté de Pull requests)
3. Vous devriez maintenant voir :
   - Sur la gauche : "Déploiement Ionos" (le nom du workflow)
   - Au centre : L'historique des exécutions

### 5. Si le repo est privé

Pour les repos privés, vérifiez que vous avez des minutes Actions disponibles :
- GitHub → Settings (votre profil, pas le repo) → Billing
- Vérifiez que vous avez des minutes gratuites (2000/mois normalement)

---

## 🎯 Checklist

- [ ] J'ai activé "Allow all actions" dans Settings → Actions
- [ ] Je vois le fichier `.github/workflows/deploy-ionos.yml` sur GitHub
- [ ] J'ai fait un nouveau `git push`
- [ ] J'ai configuré les 4 secrets (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, RESEND_API_KEY)
- [ ] Le workflow apparaît maintenant dans l'onglet Actions

---

## 📸 Ce que vous devriez voir

Dans l'onglet **Actions**, vous devriez voir :

```
Workflows
├─ Déploiement Ionos    ← Votre workflow
└─ All workflows

Workflow runs
├─ Déploiement Ionos
│  └─ [commit message]  ← L'exécution
```

Si vous voyez ça, c'est bon ! 🎉

