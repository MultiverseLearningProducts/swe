const dirTree = require("directory-tree")
const path = require('path')
const {execSync} = require('child_process')
const fs = require('fs')
const writeHtmlFiles = require('./write')
const src = path.join(__dirname, '..', 'src')
const renderFile = file => {
    fs.readFile(file.path, 'utf8', async (err, content) => {
        writeHtmlFiles({
            title: content.split(/\\n/)[0].split('\n')[0].replace('#', ''),
            dirPath: file.path.replace(src, '').replace(file.name, '').split('/').filter(p => p.length).join('/'),
            fileName: file.name,
            content: content
        })
    })  
}

const renderTree = children => {
    children.filter(child => child.type === 'file').forEach(renderFile)
    children.filter(child => child.type === 'directory').forEach(f => renderTree(f.children))
}

const copyCss = () => {
    execSync(`cp ./src/*.css ./docs/`)
}

(async function () {
    const {children} = await dirTree(src)
    execSync(`rm -fr ${path.join(__dirname, '..', 'docs', '*')}`)
    renderTree(children)
    copyCss()
})()