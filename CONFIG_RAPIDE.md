# ⚡ Configuration Rapide - Déploiement Ionos

## 🎯 Ce qui a été fait

✅ Workflow GitHub Actions créé (`.github/workflows/deploy-ionos.yml`)  
✅ À chaque `git push`, votre site se déploie automatiquement sur Ionos

---

## 📋 Ce qu'il vous reste à faire (10 minutes)

### 1. Récupérer vos identifiants FTP Ionos

Connectez-vous sur [ionos.fr](https://www.ionos.fr) et notez :
- **Serveur FTP** (ex: `home123456789.1and1-data.host`)
- **Nom d'utilisateur FTP**
- **Mot de passe FTP**

### 2. Ajouter les secrets sur GitHub

Sur votre repo GitHub :
1. **Settings** → **Secrets and variables** → **Actions**
2. Cliquez **New repository secret**
3. Ajoutez ces 4 secrets :

| Nom | Valeur |
|-----|--------|
| `FTP_SERVER` | Votre serveur FTP Ionos |
| `FTP_USERNAME` | Votre nom d'utilisateur FTP |
| `FTP_PASSWORD` | Votre mot de passe FTP |
| `RESEND_API_KEY` | Votre clé API Resend |

### 3. Vérifier le dossier de destination

Si Ionos utilise `/htdocs/` ou `/public_html/` au lieu de `/`, modifiez la ligne 36 dans `.github/workflows/deploy-ionos.yml` :

```yaml
server-dir: /htdocs/  # ou /public_html/
```

### 4. Tester !

```bash
git add .
git commit -m "Configuration déploiement Ionos"
git push
```

Allez sur GitHub → onglet **Actions** pour voir le déploiement ! 🎉

---

## ✅ Résultat

Maintenant, à chaque `git push`, votre site se met à jour automatiquement sur Ionos !

---

📖 **Guide détaillé** : [`DEPLOIEMENT_IONOS.md`](DEPLOIEMENT_IONOS.md)

