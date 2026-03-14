export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { content } = req.body;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO = process.env.GITHUB_REPO || 'ALLFUKING13/MEZANA-MARKET';
    const FILE_PATH = 'products.js';

    if (!GITHUB_TOKEN) {
        return res.status(500).json({ error: 'GitHub token (GITHUB_TOKEN) muhit o\'zgaruvchisiga o\'rnatilmagan.' });
    }

    if (!content) {
        return res.status(400).json({ error: 'Missing content' });
    }

    const url = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`;

    try {
        // 1. Get the current file SHA
        const getRes = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        let sha;
        if (getRes.ok) {
            const data = await getRes.json();
            sha = data.sha;
        }

        // 2. Update the file
        // Base64 encode the content correctly supporting utf-8
        const encodedContent = Buffer.from(content, 'utf-8').toString('base64');

            body: JSON.stringify({
                message: 'Update Database (Products + CRM) via Admin Panel',
                content: encodedContent,
                sha: sha
            })

        if (!updateRes.ok) {
            const errorText = await updateRes.text();
            throw new Error(`GitHub API Error: ${updateRes.status} ${errorText}`);
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Update Error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
