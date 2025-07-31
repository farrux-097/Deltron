const BOT_TOKEN = "7583461546:AAEOzC8MgijaGZNZu2oiwXVqXHpHvNsUybI";
const CHAT_ID = "-1002859063317";


export const chekOut = async (sms) => {
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: sms,
            parse_mode: "HTML"
          }),
        });
      } catch (error) {
          console.error("Telegramga yuborishda xatolik:", error);
     }
 };