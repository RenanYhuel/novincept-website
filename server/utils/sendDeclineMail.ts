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

export const sendRefuseMeetingMail = async (
    clientEmail: string,
    firstName: string,
    lastName: string,
    timestamp: number
) => {
    try {
        console.log(timestamp);
        console.log();
        const emailToNovincept = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.NOVINCEPT_EMAIL,
            subject: 'Réunion refusée',
            html: `Bonjour,<br><br>La réunion demandée par ${firstName} ${lastName} (Email: ${clientEmail}) a été refusée.<br><br>Date et heure de la réunion : ${new Date(timestamp).toLocaleString()}<br><br>Veuillez gérer la réunion selon les instructions.<br><br>Cordialement,<br>Novincept`,
        });

        const emailToClient = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: clientEmail,
            subject: 'Votre demande de réunion a été refusée',
            html: `Bonjour ${firstName} ${lastName},<br><br>
            Nous regrettons de vous informer que votre demande de réunion a été refusée. Voici les détails de la réunion initiale :<br><br>
            <strong>Date et heure :</strong> ${new Date(timestamp).toLocaleString()}<br><br>
            Si vous souhaitez reprogrammer la réunion, merci de nous contacter directement via notre site.<br><br>
            Cordialement,<br>
            Novincept`,
        });

    } catch (error) {
        console.error('Error sending email:', error);
    }
};
