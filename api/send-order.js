export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const orderData = req.body.orderData;
    const BOT_TOKEN = process.env.BOT_TOKEN;
    const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

    if (!BOT_TOKEN || !ADMIN_CHAT_ID) {
        return res.status(500).json({ error: 'Bot token or Chat ID not configured' });
    }

    if (!orderData) {
        return res.status(400).json({ error: 'Missing orderData' });
    }

    // Format the message
    let message = `🛒 **Yangi Buyurtma!**\n\n`;
    message += `👤 **Mijoz:** ${orderData.user.name}\n`;
    message += `📞 **Tel:** ${orderData.user.phone}\n`;
    message += `📍 **Manzil:** ${orderData.user.address}\n\n`;
    message += `📦 **Mahsulotlar:**\n`;

    orderData.items.forEach(item => {
        message += `- ${item.name} x ${item.qty} (${(item.price * item.qty).toLocaleString()} ${orderData.currency || 'so\'m'})\n`;
    });

    message += `\n💰 **Jami:** ${orderData.total.toLocaleString()} ${orderData.currency || 'so\'m'}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: ADMIN_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        const result = await response.json();
        if (result.ok) {
            res.status(200).json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to send message to Telegram', details: result });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
