const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

async function generateJson() {
    const root = process.cwd();
    const posts = fs.readdirSync(path.join(root, 'data'))
    let postDataArray = [];
    posts.map((post) => {
        const postContent = fs.readFileSync(path.join(root, 'data', post))
        const frontmatter = matter(postContent);
        let postDataObj = {
            title: frontmatter.data.title,
            description: frontmatter.data.description,
            date: frontmatter.data.date,
            author: frontmatter.data.author,
            url: `https://www.facyn.xyz/posts/${post.replace(/\.mdx?/, '')}`
        }
        postDataArray.push(postDataObj);
    })
    fs.writeFileSync("./public/json/posts.json", JSON.stringify(postDataArray))
    console.log('[Facyn] JSON Generado.')
}

return generateJson();