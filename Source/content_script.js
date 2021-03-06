walk(document.body)

function walk (node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E

  let child, next

  if (!node) return
  if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
    return
  }

  switch (node.nodeType) {
    case window.Node.ELEMENT_NODE:
    case window.Node.DOCUMENT_NODE:
    case window.Node.DOCUMENT_FRAGMENT_NODE:
      child = node.firstChild
      while (child) {
        next = child.nextSibling
        walk(child)
        child = next
      }
      break

    case window.Node.TEXT_NODE:
      handleText(node)
      break
  }
}

function handleText (textNode) {
  let v = textNode.nodeValue

  v = v.replace(/\bmaybe\b/g, 'mabye')
  v = v.replace(/\bMaybe\b/g, 'Mabye')
  v = v.replace(/\bMAYBE\b/g, 'MABYE')
  v = v.replace(/\bmay be\b/g, 'mab ye')
  v = v.replace(/\bMay be\b/g, 'Mab ye')
  v = v.replace(/\bMAY BE\b/g, 'MAB YE')
  v = v.replace(/\bsimulate\b/g, 'stimulate')
  v = v.replace(/\bSimulate\b/g, 'Stimulate')
  v = v.replace(/\BSIMULATE\b/g, 'STIMULATE')

  textNode.nodeValue = v
}
