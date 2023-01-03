const fs = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');
const RSS = require('rss');

async function generateRss() {
    const feed = new RSS({
        title: 'Blog • Facyn',
        description: 'Articulos de tu preferencia, guías, diseños y demás sobre el desarrollo web.',
        site_url: 'https://www.facyn.xyz',
        feed_url: 'https://www.facyn.xyz/rss/rss.xml',
        webMaster: 'Facyn',
        copyright: `${new Date().getFullYear()} ©️ Facyn`,
        languague: 'es'
    });

    const root = process.cwd();
    const posts = await fs.readdir(path.join(root, 'data'));

    await Promise.all(
        posts.map(async (file) => {
            const content = await fs.readFile(path.join(root, 'data', file));
            const frontmatter = matter(content);
            const item = {
                title: frontmatter.data.title,
                description: frontmatter.data.description,
                url: `https://www.facyn.xyz/posts/${file.replace(/\.mdx?/, '')}`,
                date: frontmatter.data.date
            }

            feed.item(item)
        })
    );

    await fs.writeFile("./public/rss/rss.xml", feed.xml({ indent: true }));
    console.log('[Facyn] RSS Generado.')
}

return generateRss()