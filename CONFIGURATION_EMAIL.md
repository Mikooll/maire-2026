# Configuration de l'envoi d'emails avec Resend

Ce guide vous explique comment configurer l'envoi d'emails pour le formulaire de contact.

## 📧 Pourquoi Resend ?

- ✅ **3 000 emails gratuits par mois**
- ✅ Simple et moderne
- ✅ Parfait pour un site de campagne
- ✅ Excellente délivrabilité

## 🚀 Étapes de configuration

### 1. Créer un compte Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à votre compte Resend
2. Allez dans la section **API Keys**
3. Cliquez sur **Create API Key**
4. Donnez-lui un nom (ex: "Maire 2026 Contact")
5. Copiez la clé (elle commence par `re_`)

### 3. Configurer votre domaine (Recommandé)

Pour envoyer des emails depuis votre propre domaine :

1. Dans Resend, allez dans **Domains**
2. Cliquez sur **Add Domain**
3. Entrez votre domaine (ex: `unispourleslaurentinois.fr`)
4. Suivez les instructions pour ajouter les enregistrements DNS
5. Attendez la vérification (quelques minutes à quelques heures)

**Note :** Sans domaine vérifié, vous pouvez quand même tester avec `onboarding@resend.dev` comme expéditeur.

### 4. Créer le fichier .env

Dans le dossier `maire-2026`, créez un fichier `.env` :

```bash
# Dans le terminal, à la racine du projet maire-2026
touch .env
```

Ajoutez-y votre clé API :

```env
RESEND_API_KEY=re_votre_cle_api_ici
```

**⚠️ Important :** Ce fichier est déjà dans `.gitignore`, il ne sera jamais envoyé sur Git.

### 5. Personnaliser les emails

Modifiez le fichier `server/api/contact.post.ts` pour :

1. **Changer l'adresse d'expédition** (ligne 23 et 39) :
   ```typescript
   from: 'contact@votredomaine.fr', // Remplacez par votre domaine vérifié
   ```

2. **Changer l'adresse de réception** (ligne 24) :
   ```typescript
   to: 'votre-email@exemple.com', // Où vous voulez recevoir les messages
   ```

3. **Personnaliser les templates HTML** (facultatif)

## 🧪 Tester en local

1. Assurez-vous que votre fichier `.env` est configuré
2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
3. Allez sur la page contact : `http://localhost:3000/contact`
4. Envoyez un message de test

## 🌐 Déploiement sur Vercel

### Configuration des variables d'environnement

1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez :
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_votre_cle_api_ici`
   - **Environments:** Production, Preview, Development

4. Redéployez votre site

## 📱 Et pour les SMS ?

Pour l'instant, nous n'avons pas mis en place l'envoi de SMS car :
- ❌ Aucune solution gratuite n'existe
- 💰 Les SMS coûtent environ 0,04€ - 0,08€ par envoi

### Solutions SMS possibles (payantes) :

1. **Twilio** (~0,08€/SMS)
   - Plus populaire
   - Crédit gratuit initial de ~15€
   - [twilio.com](https://twilio.com)

2. **OVH SMS** (~0,04€/SMS)
   - Moins cher
   - Service français
   - [ovh.com/fr/sms](https://www.ovh.com/fr/sms/)

### Alternative recommandée :

Au lieu d'envoyer des SMS automatiques :
- ✅ Vous recevez un email avec le numéro de téléphone
- ✅ Vous pouvez appeler la personne directement si nécessaire
- ✅ C'est gratuit et plus personnel !

## 🔧 Dépannage

### Erreur "RESEND_API_KEY is not defined"
→ Vérifiez que votre fichier `.env` existe et contient la clé API

### Les emails ne sont pas envoyés
→ Vérifiez que votre domaine est vérifié dans Resend
→ Vérifiez vos quotas (3000 emails/mois sur le plan gratuit)

### Les emails arrivent en spam
→ Configurez les enregistrements SPF, DKIM et DMARC (Resend vous guide)
→ Utilisez un domaine vérifié

## 📊 Monitoring

Dans votre dashboard Resend, vous pouvez :
- 📈 Voir le nombre d'emails envoyés
- ✅ Vérifier le statut de livraison
- 📧 Consulter l'historique complet

## 🆘 Besoin d'aide ?

- Documentation Resend : [resend.com/docs](https://resend.com/docs)
- Support Resend : [resend.com/support](https://resend.com/support)

