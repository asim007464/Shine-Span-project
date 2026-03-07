# Shine & Span – Email Server (Nodemailer)

Sends Supabase Auth emails (verification, password reset, etc.) via Nodemailer instead of Supabase's built-in SMTP.

## Setup

1. **Install dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your values:
   - `SUPABASE_URL` – Your Supabase project URL (e.g. `https://xxx.supabase.co`)
   - `SMTP_*` – Your email provider settings (Gmail, Mailtrap, etc.)

3. **Gmail**
   - Use an [App Password](https://support.google.com/accounts/answer/185833), not your normal password
   - `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`

4. **Run the server**
   ```bash
   npm run dev
   ```

## Supabase configuration

1. Supabase Dashboard → **Authentication** → **Hooks**
2. Enable **Send Email Hook**
3. Set the hook URL to your server, e.g.:
   - Local: `http://localhost:3001/auth/send-email` (use ngrok for Supabase to reach it)
   - Production: `https://your-domain.com/auth/send-email`

4. **Disable** or leave empty the built-in SMTP – the hook will handle all auth emails.

## Local testing with ngrok

Supabase must be able to reach your hook. For local dev:

```bash
ngrok http 3001
```

Use the ngrok URL in Supabase: `https://xxx.ngrok.io/auth/send-email`
