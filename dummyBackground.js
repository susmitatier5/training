chrome.browserAction.onClicked.addListener(clickTheButton);

function clickTheButton(tab) {
    console.log(tab);
    console.log(tab.active);
    console.log(tab.id);
    console.log(tab.height);
    console.log(tab.index);
    console.log(tab.windowId);
    let msg = {
        txt: "dummy"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}