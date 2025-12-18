# 🐙 Créer et pousser sur GitHub

## Étape 1 : Créer le repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Connectez-vous (ou créez un compte si vous n'en avez pas)
3. Cliquez sur le **+** en haut à droite → **New repository**
4. Remplissez :
   - **Repository name** : `maire-2026` (ou le nom que vous voulez)
   - **Description** : "Site de campagne municipale 2026"
   - Choisissez **Private** (pour ne pas rendre public avant d'être prêt)
   - **NE cochez PAS** "Initialize with README" (vous avez déjà le code)
5. Cliquez sur **Create repository**

## Étape 2 : Pousser votre code

GitHub va vous afficher une page avec des commandes. Utilisez celles-ci dans votre terminal :

```bash
# Allez dans votre dossier projet
cd "/Users/Mika/Desktop/Maire 2026/maire-2026"

# Initialisez git (si pas déjà fait)
git init

# Ajoutez tous les fichiers
git add .

# Créez votre premier commit
git commit -m "Premier commit - Configuration déploiement Ionos"

# Ajoutez le lien vers votre repository GitHub
# (Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/maire-2026.git

# Renommez la branche en main (si nécessaire)
git branch -M main

# Poussez le code sur GitHub
git push -u origin main
```

## Étape 3 : Configurer les secrets

Une fois que le code est sur GitHub :

1. Sur votre repository GitHub, cliquez sur **Settings**
2. Dans le menu de gauche : **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret**
4. Ajoutez les 4 secrets :
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
   - `RESEND_API_KEY`

## Étape 4 : Tester le déploiement

Maintenant, faites un petit changement et poussez :

```bash
# Faites une petite modification (par exemple dans README.md)

# Ajoutez et commitez
git add .
git commit -m "Test déploiement automatique"

# Poussez
git push
```

Allez sur GitHub → onglet **Actions** → Vous verrez le workflow se lancer ! 🎉

---

## 🔐 Note sur l'authentification GitHub

Si GitHub vous demande un mot de passe lors du push, il faut utiliser un **Personal Access Token** :

1. Allez sur GitHub → **Settings** (votre profil) → **Developer settings**
2. **Personal access tokens** → **Tokens (classic)**
3. **Generate new token (classic)**
4. Cochez au minimum : `repo` (tous les sous-items)
5. Copiez le token généré
6. Utilisez ce token comme mot de passe quand vous faites `git push`

Ou mieux, configurez SSH : https://docs.github.com/fr/authentication/connecting-to-github-with-ssh

