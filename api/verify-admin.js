export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { code } = req.body;
    const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

    if (!ADMIN_TOKEN) {
        return res.status(500).json({ error: 'Admin token (ADMIN_TOKEN) muhit o\'zgaruvchisiga o\'rnatilmagan.' });
    }

    if (code === ADMIN_TOKEN) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, error: 'Noto\'g\'ri parol.' });
    }
}
