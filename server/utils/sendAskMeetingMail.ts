import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,  // Utilisation de la variable d'environnement
  port: Number(process.env.SMTP_PORT),  // Utilisation de la variable d'environnement
  secure: false,
  auth: {
    user: process.env.SMTP_USER,  // Utilisation de la variable d'environnement
    pass: process.env.SMTP_PASS,   // Utilisation de la variable d'environnement
  },
});

export const sendAskMeetingMail = async (clientEmail: string, firstName: string, lastName: string, timestamp: number, message: string, id: any) => {
  try {
    // Si le message est vide, on utilise un message par défaut
    const emailMessage = message.trim() === '' 
      ? 'Aucun message n\'a été ajouté à la demande de réunion.' 
      : message;

    // Envoi du mail à hello@novincept.com
    const emailToNovincept = await transporter.sendMail({
      from: process.env.SMTP_USER,  // Utilisation de la variable d'environnement
      to: process.env.NOVINCEPT_EMAIL,  // Utilisation de la variable d'environnement
      subject: 'Demande de réunion reçue',
      html: `Bonjour,<br><br>Une demande de réunion a été effectuée par ${firstName} ${lastName} (Email: ${clientEmail}).<br><br>Date et heure de la réunion demandée : ${new Date(timestamp * 1000).toLocaleString()}\n\nMessage : ${emailMessage}<br><br>Veuillez accepter ou refuser la demande en cliquant sur le lien suivant :<br><br><a href="http://localhost:3000/meeting/${id}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Gérer la demande</a><br><br>Cordialement,<br>Novincept`,
    });

    console.log('Email sent:', emailToNovincept);

    // Envoi du mail au client
    const emailToClient = await transporter.sendMail({
      from: process.env.SMTP_USER,  // Utilisation de la variable d'environnement
      to: clientEmail,
      subject: 'Votre demande de réunion est en attente',
      text: `Bonjour ${firstName},\n\nNous avons bien reçu votre demande de réunion, et elle est actuellement en attente de traitement. Vous recevrez un email lorsque celle-ci sera confirmée.\n\nCordialement,\nNovincept`,
    });

    return {
      success: true,
      messageIds: {
        novinceptMail: emailToNovincept.messageId,
        clientMail: emailToClient.messageId,
      },
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    return { success: false, error };
  }
};
