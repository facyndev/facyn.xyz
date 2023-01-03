require('dotenv').config()
const fs = require('fs');
const path = require('path');
const algoliasearch = require('algoliasearch')
const parseString = require('xml2js').parseString;

const rss = fs.readFileSync(path.resolve(__dirname, '../public/rss/rss.xml'), 'utf-8')

parseString(rss, function (err, result) {
    rssJSON = result.rss.channel[0].item
});

const ALGOLIA_APPLICATION_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID;
const ALGOLIA_ADMIN_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

const posts = rssJSON.map(post => ({...post}));
let postArrayFix = [];
posts.forEach((post) => {
    postArrayFix.push({
        objectID: post.link[0],
        title: post.title[0],
        description: post.description[0],
        link: post.link[0],
        guid: post.guid[0],
        pubDate: post.pubDate[0],
    })
})
index.saveObjects(postArrayFix)
.then(objectIDs => {
    console.log(`[Facyn] Se han guardado los posts en ALGOLIA.`)
})
.catch(err => {
    console.log(err)
})



