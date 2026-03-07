import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const ACTION_LABELS = {
  signup: "Confirm your email",
  recovery: "Reset your password",
  magiclink: "Sign in to your account",
  invite: "You've been invited",
  email_change: "Confirm your new email",
  reauthentication: "Re-authenticate",
  password_changed_notification: "Password changed",
  email_changed_notification: "Email changed",
  phone_changed_notification: "Phone changed",
};

function getSubject(emailActionType) {
  return ACTION_LABELS[emailActionType] || "Action required";
}

function getHtmlBody({ emailActionType, verifyUrl, userEmail }) {
  const subject = getSubject(emailActionType);
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #334155; max-width: 480px; margin: 0 auto; padding: 24px;">
  <div style="background: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
    <h1 style="color: #0f172a; font-size: 20px; margin: 0 0 16px;">${subject}</h1>
    <p style="margin: 0 0 20px;">Hello,</p>
    <p style="margin: 0 0 20px;">Please click the button below to complete your request:</p>
    <a href="${verifyUrl}" style="display: inline-block; background: #2563eb; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin: 0 0 20px;">Continue</a>
    <p style="margin: 0; font-size: 13px; color: #64748b;">If you didn't request this, you can safely ignore this email.</p>
  </div>
  <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">Shine & Span</p>
</body>
</html>
  `.trim();
}

export async function sendAuthEmail({ user, emailData }) {
  const { email } = user;
  const { token_hash, redirect_to, email_action_type } = emailData;
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");

  if (!supabaseUrl) {
    throw new Error("SUPABASE_URL is not configured");
  }

  const verifyUrl = `${supabaseUrl}/auth/v1/verify?token_hash=${encodeURIComponent(token_hash)}&type=${encodeURIComponent(email_action_type)}&redirect_to=${encodeURIComponent(redirect_to)}`;

  const subject = getSubject(email_action_type);
  const html = getHtmlBody({
    emailActionType: email_action_type,
    verifyUrl,
    userEmail: email,
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject,
    html,
  });
}
