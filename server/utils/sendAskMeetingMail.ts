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

export const sendAskMeetingMail = async (clientEmail: string, firstName: string, lastName: string, timestamp: number, message: string, id: any) => {
  try {
    const emailMessage = message.trim() === '' 
      ? 'Aucun message n\'a été ajouté à la demande de réunion.' 
      : message;

    const emailToNovincept = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NOVINCEPT_EMAIL,
      subject: 'Demande de réunion reçue',
      html: `
        <div style="font-family: 'DM Sans', sans-serif; color: #05070B;">
          <p>Bonjour,</p>
          <p>Une demande de réunion a été effectuée par <strong>${firstName} ${lastName}</strong> (Email: ${clientEmail}).</p>
          <div style="border: 1px solid #E4E4E7; padding: 10px; border-radius: 8px;">
            <p><strong>Date et heure de la réunion demandée :</strong> ${new Date(timestamp * 1000).toLocaleString()}</p>
            <p><strong>Message :</strong> ${emailMessage}</p>
          </div>
          <p>Veuillez accepter ou refuser la demande en cliquant sur le lien suivant :</p>
          <a href="http://localhost:3000/meeting/${id}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #4B3CE4; text-decoration: none; border-radius: 12px;">Gérer la demande</a>
          <p>Cordialement,<br>Novincept</p>
        </div>
      `,
    });

    console.log('Email sent:', emailToNovincept);

    const emailToClient = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: clientEmail,
      subject: 'Votre demande de réunion est en cours de traitement',
      html: `
        <div style="font-family: 'DM Sans', sans-serif; color: #05070B;">
          <p>Bonjour ${firstName} ${lastName},</p>
          <p>Nous avons bien reçu votre demande de réunion, et elle est actuellement en attente de traitement. Vous recevrez un email lorsque celle-ci sera confirmée. Voilà les détails:</p>
          <div style="border: 1px solid #E4E4E7; padding: 10px; border-radius: 8px;">
            <p><strong>Email :</strong> ${clientEmail}</p>
            <p><strong>Prénom :</strong> ${firstName}</p>
            <p><strong>Nom :</strong> ${lastName}</p>
            <p><strong>Date et heure :</strong> ${new Date(timestamp * 1000).toLocaleString()}</p>
            <p><strong>Message :</strong> ${emailMessage}</p>
          </div>
          <p>Cordialement,<br>Novincept</p>
        </div>
      `,
    });

    console.log('Email sent:', emailToClient);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};