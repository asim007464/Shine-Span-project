import "dotenv/config";
import express from "express";
import cors from "cors";
import { sendAuthEmail } from "./emailService.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Supabase Auth Send Email Hook
// Configure this URL in Supabase: Authentication → Hooks → Send Email Hook
app.post("/auth/send-email", async (req, res) => {
  try {
    const { user, email_data } = req.body;

    if (!user?.email || !email_data?.token_hash || !email_data?.email_action_type) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    await sendAuthEmail({ user, emailData: email_data });
    res.status(200).json({});
  } catch (err) {
    console.error("Send email error:", err);
    res.status(500).json({ error: err.message || "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});
