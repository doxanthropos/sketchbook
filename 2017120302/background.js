console.log("Background Running");

chrome.browserAction.onClicked.addListener(buttonCLicked);

function buttonCLicked(tab){
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id,msg);
}
