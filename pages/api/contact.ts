import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(455).json({
      success: false,
      message: 'Méthode non autorisée. Utilisez POST.',
    });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Veuillez remplir tous les champs obligatoires (nom, email, objet, message).',
    });
  }

  // Perform validation on email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Veuillez saisir une adresse email valide.',
    });
  }

  // Here, in a production app, you would integrate with an email provider
  // (e.g. Resend, SendGrid, Nodemailer) or a database to save the message.
  // For this template, we will log the message to the console and return success.
  console.log('--- Nouveau Message de Contact ---');
  console.log(`De: ${name} (${email})`);
  console.log(`Objet: ${subject}`);
  console.log(`Message: ${message}`);
  console.log('----------------------------------');

  return res.status(200).json({
    success: true,
    message: 'Votre message a été enregistré avec succès !',
  });
}
