export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { content, fileName } = req.body;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
    const REPO = process.env.GITHUB_REPO || 'ALLFUKING13/MEZANA-MARKET';
    const FILE_PATH = `jpgs/${fileName}`;
    const authHeader = req.headers.authorization;

    if (!GITHUB_TOKEN) {
        return res.status(500).json({ error: 'GitHub token (GITHUB_TOKEN) muhit o\'zgaruvchisiga o\'rnatilmagan.' });
    }

    if (!ADMIN_TOKEN) {
        return res.status(500).json({ error: 'Admin token (ADMIN_TOKEN) muhit o\'zgaruvchisiga o\'rnatilmagan.' });
    }

    if (authHeader !== `Bearer ${ADMIN_TOKEN}`) {
        return res.status(401).json({ error: 'Ruxsat berilmadi: Noto\'g\'ri parol.' });
    }

    if (!content || !fileName) {
        return res.status(400).json({ error: 'Missing content or fileName' });
    }

    const url = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`;

    try {
        const updateRes = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Upload image ${fileName} via Admin Panel`,
                content: content // The GitHub API expects base64 encoded string for file content
            })
        });

        if (!updateRes.ok) {
            const errorText = await updateRes.text();
            throw new Error(`GitHub API (Upload) Error: ${updateRes.status} ${errorText}`);
        }

        res.status(200).json({ success: true, path: FILE_PATH });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
