import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendAcceptMeetingMail = async (
  clientEmail: string,
  firstName: string,
  lastName: string,
  timestamp: number,
  id: any,
  meetingLink: string,
  meetingCode: string,
  meetingPassword: string
) => {
  try {
    const emailToNovincept = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NOVINCEPT_EMAIL,
      subject: 'Réunion acceptée',
      html: `Bonjour,<br><br>La réunion demandée par ${firstName} ${lastName} (Email: ${clientEmail}) a été acceptée.<br><br>Date et heure de la réunion : ${new Date(timestamp).toLocaleString()}<br><br>Veuillez gérer la réunion en cliquant sur le lien suivant :<br><br><a href="http://localhost:3000/meeting/${id}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Gérer la réunion</a><br><br>Cordialement,<br>Novincept`,
    });


    const emailToClient = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: clientEmail,
      subject: 'Votre demande de réunion a été acceptée',
      html: `Bonjour ${firstName} ${lastName},<br><br>
      Nous avons le plaisir de vous informer que votre demande de réunion a été acceptée. Voici les détails de la réunion :<br><br>
      <strong>Date et heure :</strong> ${new Date(timestamp).toLocaleString()}<br><br>
      <strong>Lien de la réunion :</strong> <a href="${meetingLink}" style="color: #007bff; text-decoration: none;">${meetingLink}</a><br><br>
      Vous pouvez également vous rendre sur <a href="https://kmeet.infomaniak.com" style="color: #007bff; text-decoration: none;">kmeet.infomaniak.com</a> et entrer le code de réunion : <strong>${meetingCode}</strong><br><br>
      <strong>Mot de passe :</strong> ${meetingPassword}<br><br>
      <a href="${meetingLink}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">
        Rejoindre la réunion
      </a><br><br>
      Cordialement,<br>
      Novincept`,
    });

  } catch (error) {
    console.error('Error sending email:', error);
  }
};