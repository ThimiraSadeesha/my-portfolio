import { createTransport } from 'nodemailer';

export const sendMail = async function (
  name: string,
  email: string | 'SELF',
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error('sendMail: GMAIL_USER or GMAIL_APP_PASSWORD env var is not set');
    return { status: 500, message: 'Mail service is not configured' };
  }

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user,
    to: user,
    subject: `Portfolio: [${subject}]`,
    html: `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
    replyTo: email === 'SELF' ? user : email,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error('sendMail error:', error.message);
        resolve({ status: 500, message: 'Failed to send mail' });
      } else {
        resolve({ status: 200, message: 'Mail sent successfully' });
      }
    });
  });
};
