export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const orderData = req.body.orderData;
    const BOT_TOKEN = process.env.BOT_TOKEN;
    const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;
    const THREAD_ID = process.env.TELEGRAM_THREAD_ID;

    if (!BOT_TOKEN || !ADMIN_CHAT_ID) {
        return res.status(500).json({ error: 'Bot token or Chat ID not configured' });
    }

    if (!orderData) {
        return res.status(400).json({ error: 'Missing orderData' });
    }

    let message = `🛒 <b>Yangi Buyurtma!</b>\n\n`;
    message += `👤 <b>Mijoz:</b> ${orderData.user.name}\n`;
    message += `📞 <b>Tel:</b> ${orderData.user.phone}\n`;
    message += `📍 <b>Manzil:</b> ${orderData.user.address}\n\n`;
    message += `📦 <b>Mahsulotlar:</b>\n`;

    orderData.items.forEach(item => {
        message += `- ${item.name} x ${item.qty} (${(item.price * item.qty).toLocaleString()} ${orderData.currency || 'so\'m'})\n`;
    });

    message += `\n💰 <b>Jami:</b> ${orderData.total.toLocaleString()} ${orderData.currency || 'so\'m'}`;

    try {
        const payload = {
            chat_id: ADMIN_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        };

        if (THREAD_ID) {
            payload.message_thread_id = parseInt(THREAD_ID);
        }

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.ok) {
            res.status(200).json({ success: true });
        } else {
            console.error('Telegram Error:', result);
            res.status(500).json({
                error: result.description || 'Failed to send message to Telegram',
                details: result
            });
        }
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
