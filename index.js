import fetch from "node-fetch";

const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN;   // from Render env
const TG_CHAT  = process.env.TELEGRAM_CHAT_ID;     // from Render env

if (!TG_TOKEN || !TG_CHAT) {
  console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
  process.exit(1);
}

const TG_URL = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;

(async () => {
  const text = "Server test ✅ (hello from ivasms-scraper)";
  const res = await fetch(TG_URL, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({ chat_id: TG_CHAT, text })
  });
  const json = await res.json();
  console.log("Telegram response:", json);
})();
