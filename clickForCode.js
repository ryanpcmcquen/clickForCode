chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.executeScript({
        code:
            `document.body.innerHTML = '<pre>' + document.body.innerHTML`
    })
})
