/* global chrome */
(() => {
  try {
    const nodes = document.body.childNodes
    const isNotText = Object.keys(nodes).some((key) =>
      nodes[key].nodeName !== '#text'
    )
    if (!isNotText) {
      document.body.innerHTML = '<pre>' + document.body.innerHTML
    }
  } catch (ignore) { }
})()
