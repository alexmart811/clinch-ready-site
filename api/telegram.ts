import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Только POST запросы
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, message } = req.body;

  // Валидация
  if (!name || !phone) {
    return res.status(400).json({ error: "Имя и телефон обязательны" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatIds) {
    console.error("Telegram credentials not configured");
    return res.status(500).json({ error: "Сервер не настроен" });
  }

  const text = `
📩 *Новая заявка с сайта*

👤 *Имя:* ${name}
📱 *Телефон:* ${phone}
${message ? `💬 *Сообщение:* ${message}` : ""}

📅 _${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}_
  `.trim();

  // Поддержка нескольких chat_id через запятую
  const chatIdList = chatIds.split(",").map((id) => id.trim());

  try {
    const results = await Promise.all(
      chatIdList.map((chatId) =>
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        }).then((r) => r.json())
      )
    );

    const anySuccess = results.some((r) => r.ok);

    if (anySuccess) {
      return res.status(200).json({ ok: true });
    } else {
      console.error("Telegram errors:", results);
      return res.status(500).json({ error: "Не удалось отправить" });
    }
  } catch (error) {
    console.error("Telegram send error:", error);
    return res.status(500).json({ error: "Ошибка сервера" });
  }
}

