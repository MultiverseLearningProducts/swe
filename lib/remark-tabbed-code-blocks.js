const visit = require('unist-util-visit')
const h = require('hastscript')

const isTabbedCodeBlock = node => {
    return node.tagName === 'p' && node.children.some(({ value }) => {
        return String(value).match(/\|[JP](.+)\|/g)
    })
}

module.exports = function () {
    return function transformer(tree) {
        visit(tree, 'element', node => {
            if (!isTabbedCodeBlock(node)) return
            const tabs = node.children[0].value.split('|').slice(1, -1).map(tab => {
                return h('a', {href: `#${tab.toLowerCase()}`}, {type: 'text', value: tab})
            })
            Object.assign(node, h('nav.tabbed-code-block', {}, tabs))
        })
    }
}
