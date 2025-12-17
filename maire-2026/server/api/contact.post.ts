import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  try {
    // Récupérer les données du formulaire
    const body = await readBody(event)
    const { name, email, phone, subject, message } = body

    // Validation basique
    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs obligatoires doivent être remplis',
      })
    }

    // Initialiser Resend avec la clé API
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email de notification pour l'équipe
    const notificationEmail = await resend.emails.send({
      from: 'wawamika0@gmail.com',
      to: 'wawamika0@gmail.com',
      subject: `[Contact Site] ${subject}`,
      html: `
        <h2>Nouveau message du formulaire de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Email de confirmation pour l'utilisateur
    const confirmationEmail = await resend.emails.send({
      from: 'wawamika0@gmail.com',
      to: email,
      subject: 'Confirmation de réception de votre message',
      html: `
        <h2>Bonjour ${name},</h2>
        <p>Nous avons bien reçu votre message et nous vous remercions de votre intérêt.</p>
        <p>Notre équipe reviendra vers vous dans les plus brefs délais.</p>
        <hr />
        <p><strong>Récapitulatif de votre message :</strong></p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>Cordialement,<br />L'équipe Unis pour les Laurentinois</p>
      `,
    })

    return {
      success: true,
      message: 'Votre message a été envoyé avec succès',
      notificationId: notificationEmail.data?.id,
      confirmationId: confirmationEmail.data?.id,
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    
    throw createError({
      statusCode: (error as { statusCode?: number }).statusCode || 500,
      statusMessage: (error as Error).message || 'Erreur lors de l\'envoi du message',
    })
  }
})

