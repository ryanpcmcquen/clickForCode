/* global chrome */
(() => {
  const formatMe = `
      document.body.innerHTML = '<pre>' + document.body.innerHTML
    `
  try {
    chrome.browserAction.onClicked.addListener(() => {
      chrome.tabs.executeScript({
        code: formatMe
      })
    })
  } catch (ignore) { }
})()
