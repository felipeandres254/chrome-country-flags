/**
 * Gets an array of the text nodes contained by the specified element.
 * @param  {!Element} element The DOM element which will be traversed.
 * @return {!Array.<!Node>}
 */
const ELEMENT_NODES = [Node.ELEMENT_NODE, Node.DOCUMENT_NODE, Node.DOCUMENT_TYPE_NODE]
function getTextNodes(element) {
    if (!element)
        return []
    return Array.from(element.childNodes).reduce((nodes, node) => {
        if (node.nodeType == Node.TEXT_NODE)
            nodes.push(node)
        else if (ELEMENT_NODES.includes(node.nodeType))
            nodes = nodes.concat(getTextNodes(node))
        return nodes
    }, [])
}

Object.keys(COUNTRY_FLAG_EMOJIS).forEach((unicode) => {
    getTextNodes(document.querySelector('body')).forEach((node) => {
        if (node.data.includes(unicode)) {
            const size = window.getComputedStyle(node.parentElement, null).getPropertyValue('font-size')
            const img = `<img style="width: ${size}; height: ${size}; display: inline;" src="${COUNTRY_FLAG_EMOJIS[unicode]}">`
            node.parentElement.innerHTML = node.parentElement.innerHTML.replace(new RegExp(unicode, 'g'), img)
        }
    })
})
