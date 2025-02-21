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

export const sendAcceptMeetingMail = async (clientEmail: string, firstName: string, lastName: string, timestamp: number, id: any) => {
  try {
    // Envoi du mail à hello@novincept.com
    const emailToNovincept = await transporter.sendMail({
      from: process.env.SMTP_USER,  // Utilisation de la variable d'environnement
      to: process.env.NOVINCEPT_EMAIL,  // Utilisation de la variable d'environnement
      subject: 'Réunion acceptée',
      html: `Bonjour,<br><br>La réunion demandée par ${firstName} ${lastName} (Email: ${clientEmail}) a été acceptée.<br><br>Date et heure de la réunion : ${new Date(timestamp * 1000).toLocaleString()}<br><br>Veuillez gérer la réunion en cliquant sur le lien suivant :<br><br><a href="http://localhost:3000/meeting/${id}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Gérer la réunion</a><br><br>Cordialement,<br>Novincept`,
    });

    console.log('Email sent:', emailToNovincept);

    // Envoi du mail au client
    const emailToClient = await transporter.sendMail({
      from: process.env.SMTP_USER,  // Utilisation de la variable d'environnement
      to: clientEmail,
      subject: 'Votre demande de réunion a été acceptée',
      text: `Bonjour ${firstName},\n\nNous avons le plaisir de vous informer que votre demande de réunion a été acceptée. Voici les détails de la réunion :\n\nDate et heure : ${new Date(timestamp * 1000).toLocaleString()}\n\nCordialement,\nNovincept`,
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