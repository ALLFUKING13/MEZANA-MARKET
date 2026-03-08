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
    message += `📦 <b>Mahsulotlar:</b>\n\n`;

    const itemsWithText = orderData.items.map((item, idx) => {
        const itemText = `${idx + 1}. <b>${item.name}</b>\n   Soni: ${item.qty} x ${item.price.toLocaleString()} = ${(item.price * item.qty).toLocaleString()} ${orderData.currency || 'so\'m'}\n`;
        return { ...item, text: itemText };
    });

    itemsWithText.forEach(item => {
        message += item.text;
    });

    message += `\n💰 <b>Jami:</b> ${orderData.total.toLocaleString()} ${orderData.currency || 'so\'m'}`;

    try {
        // Send main message
        const textPayload = {
            chat_id: ADMIN_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        };

        if (THREAD_ID) {
            textPayload.message_thread_id = parseInt(THREAD_ID);
        }

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(textPayload)
        });

        // Send product photos
        const baseUrl = process.env.SITE_URL || 'https://marketkr.uz';
        
        for (const item of orderData.items) {
            if (item.image) {
                const photoUrl = `${baseUrl}/${item.image}`;
                const photoCaption = `<b>${item.name}</b>\nSoni: ${item.qty} x ${item.price.toLocaleString()} = ${(item.price * item.qty).toLocaleString()} ${orderData.currency || 'so\'m'}`;
                
                const photoPayload = {
                    chat_id: ADMIN_CHAT_ID,
                    photo: photoUrl,
                    caption: photoCaption,
                    parse_mode: 'HTML'
                };

                if (THREAD_ID) {
                    photoPayload.message_thread_id = parseInt(THREAD_ID);
                }

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(photoPayload)
                });

                // Add small delay to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
