# 🚀 Déploiement automatique sur Ionos

## Configuration rapide (10 minutes)

### Étape 1 : Récupérer vos identifiants FTP Ionos

1. Connectez-vous sur [ionos.fr](https://www.ionos.fr)
2. Allez dans **Hébergement** → Votre pack
3. Notez ces informations :
   - **Serveur FTP** (ex: `home123456789.1and1-data.host` ou `ftp.votredomaine.com`)
   - **Nom d'utilisateur FTP** (ex: `u12345678`)
   - **Mot de passe FTP**
   - **Dossier de destination** (souvent `/` ou `/htdocs/` ou `/public_html/`)

### Étape 2 : Configurer les secrets GitHub

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche : **Secrets and variables** → **Actions**
4. Cliquez sur **New repository secret**

Ajoutez ces 4 secrets :

#### Secret 1
- **Nom** : `FTP_SERVER`
- **Valeur** : Votre serveur FTP Ionos (ex: `home123456789.1and1-data.host`)

#### Secret 2
- **Nom** : `FTP_USERNAME`
- **Valeur** : Votre nom d'utilisateur FTP

#### Secret 3
- **Nom** : `FTP_PASSWORD`
- **Valeur** : Votre mot de passe FTP

#### Secret 4
- **Nom** : `RESEND_API_KEY`
- **Valeur** : Votre clé API Resend (pour le formulaire de contact)

### Étape 3 : Ajuster le dossier de destination (si nécessaire)

Si Ionos utilise un dossier spécifique (comme `/htdocs/`), modifiez la ligne 36 dans `.github/workflows/deploy-ionos.yml` :

```yaml
server-dir: /htdocs/  # ou /public_html/ selon votre hébergement
```

### Étape 4 : Tester !

```bash
git add .
git commit -m "Configuration déploiement Ionos"
git push
```

Allez sur GitHub → onglet **Actions** pour voir le déploiement en cours !

---

## ✅ C'est tout !

Maintenant, à chaque `git push`, votre site se met automatiquement à jour sur Ionos ! 🎉

---

## 🔧 Dépannage

### Le dossier de destination n'est pas bon
Ionos utilise parfois `/`, `/htdocs/` ou `/public_html/`. 
Connectez-vous en FTP avec FileZilla pour vérifier le bon chemin.

### Erreur de connexion FTP
- Vérifiez vos identifiants dans les secrets GitHub
- Testez la connexion avec FileZilla d'abord
- Ionos utilise parfois le port 22 (SFTP) au lieu du port 21 (FTP)

### Le site ne s'affiche pas
- Vérifiez que les fichiers sont bien dans le bon dossier
- Attendez 5-10 minutes pour la propagation
- Videz le cache de votre navigateur

---

## 📱 Support Ionos

Si besoin d'aide sur les paramètres FTP :
- Support Ionos : 09 70 80 89 11
- [Centre d'aide Ionos](https://www.ionos.fr/assistance)

