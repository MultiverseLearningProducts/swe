const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const doc = require('rehype-document')
const format = require('rehype-format')
const html = require('rehype-stringify')
const report = require('vfile-reporter')
const fs = require('fs')
const path = require('path')
const docs = path.join(__dirname, '..', 'docs')
module.exports = async function (file) {
    const { title = 'untitled', dirPath, fileName, content } = file
    unified()
    .use(markdown)
    .use(remark2rehype)
    .use(doc, {title, css: ['/swe/air.css', '/swe/style.css']})
    .use(format)
    .use(html)
    .process(content, async function (err, htmlfile) {
        fs.mkdir(path.join(docs, dirPath), { recursive: true }, err => {
            if (err) console.error(err)
            const writePath = path.join(docs, dirPath, fileName.replace('.md', '.html'))
            fs.writeFile(writePath, String(htmlfile), err => {
                if (err) console.error(err)
                console.log(writePath)
            })
        })
    })
}