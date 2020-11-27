require("babel-core/register")
require("babel-polyfill")
const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const doc = require('rehype-document')
const format = require('rehype-format')
const html = require('rehype-stringify')
const iframes = require('remark-iframes')
const tabbedCodeBlocks = require('./remark-tabbed-code-blocks')
const fs = require('fs')
const path = require('path')
const docs = path.join(__dirname, '..', 'docs')
module.exports = async function (file) {
    const { title = 'untitled', dirPath, fileName, content } = file
    unified()
    .use(markdown, {gfm: true})
    .use(iframes, {
        'docs.google.com': {
            tag: 'iframe',
            width: 776,
            height: 467,
            allowfullscreen: true,
            frameborder: "2"
        },
        'www.youtube.com': {
            tag: 'iframe',
            width: 776,
            height: 467,
            allowfullscreen: true,
            frameborder: "2",
            replace: [
                ['watch?v=', 'embed/'],
                ['http://', 'https://']
            ],
            thumbnail: {
            format: 'http://img.youtube.com/vi/{id}/0.jpg',
            id: '.+/(.+)$'
            },
            removeAfter: '&'            
        }
    })
    .use(remark2rehype)
    .use(tabbedCodeBlocks)
    .use(doc, {
        title,
        css: ['/swe/modest.css', '/swe/prism.css', '/swe/style.css'],
        js: ['/swe/prism.js', '/swe/tabbed-code-blocks.js'],
        link: [{rel: 'shortcut icon', type: 'image/x-icon', href: '/swe/favicon.ico'}]
    })
    .use(format)
    .use(html)
    .process(content, async function (err, htmlfile) {
        fs.mkdir(path.join(docs, dirPath), { recursive: true }, err => {
            if (err) console.error(err)
            const writePath = path.join(docs, dirPath, fileName.replace('.md', '.html'))
            fs.writeFile(writePath, String(htmlfile), err => {
                if (err) console.error(err)
                // console.log(writePath)
            })
        })
    })
}