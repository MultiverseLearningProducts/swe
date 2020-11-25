const visit = require('unist-util-visit')
const mdastToHast = require('mdast-util-to-hast')

function blockTokenizer(eat, value, silent) {
    if (!value.startsWith('|Javascript|Java|')) return
    if (silent) return true

    return eat('')({
        type: 'tabs'
    })
}

function tabs(node) {
    return node.tagName === 'p' && node.children.some(({ value }) => value.includes('|Javascript|Java|'))
}

module.exports = [
    function () {
        const Parser = this.Parser
        const Compiler = this.Compiler
        const { blockTokenizers, blockMethods } = Parser.prototype
        blockTokenizers.tabs = blockTokenizer
        blockMethods.splice(blockMethods.indexOf('blockquote') + 1, 0, 'tabs')

        return function (tree) {
            visit(tree, 'tabs', node => {
                node.type = 'tabs'
                node.tabs = ['Javascript', 'Java']
            })
        }
    },
    function (opts = {}) {
        return function transform(tree) {
            visit(tree, 'tabs', node => {
                console.log(node)
            })
        }
    }
]
