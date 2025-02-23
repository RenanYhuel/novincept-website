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

export const sendContactMail = async (
  clientEmail: string,
  firstName: string,
  lastName: string,
  company: string,
  message: string,
) => {
  try {
    const emailToNovincept = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NOVINCEPT_EMAIL,
      subject: 'Demande de contact reçue - ' + firstName + ' ' + lastName,
      html: `
        <div style="font-family: 'DM Sans', sans-serif; color: #05070B;">
          <p>Bonjour,</p>
          <p>Une demande de contact a été effectuée par <strong>${firstName} ${lastName}</strong> (Email: ${clientEmail}).</p>
          <div style="border: 1px solid #E4E4E7; padding: 10px; border-radius: 8px;">
            <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> ${clientEmail}</p>
            <p><strong>Entreprise :</strong> ${company}</p>
            <p><strong>Message :</strong> ${message}</p>
          </div>
          <p>Merci de traiter cette demande dès que possible.</p>
          <p>Cordialement,<br>Novincept</p>
        </div>
      `,
    });

    console.log('Email sent:', emailToNovincept);

    const emailToClient = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: clientEmail,
      subject: 'Confirmation de votre demande de contact',
      html: `
        <div style="font-family: 'DM Sans', sans-serif; color: #05070B;">
          <p>Bonjour ${firstName} ${lastName},</p>
          <p>Merci d'avoir pris contact avec nous. Nous avons bien reçu votre demande et nous vous confirmons qu'elle est en cours de traitement. Vous recevrez un email d'un de nos agents sous peu.</p>
          <p>Voici les détails de votre demande :</p>
          <div style="border: 1px solid #E4E4E7; padding: 10px; border-radius: 8px;">
            <p><strong>Email :</strong> ${clientEmail}</p>
            <p><strong>Prénom :</strong> ${firstName}</p>
            <p><strong>Nom :</strong> ${lastName}</p>
            <p><strong>Entreprise :</strong> ${company}</p>
            <p><strong>Message :</strong> ${message}</p>
          </div>
          <p>Si vous avez des questions en attendant, vous pouvez nous contacter directement à ${process.env.NOVINCEPT_EMAIL}.</p>
          <p>Cordialement,<br>Novincept</p>
        </div>
      `,
    });

    console.log('Email sent:', emailToClient);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
