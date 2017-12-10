chrome.browserAction.onClicked.addListener(buttonCLicked);

function buttonCLicked(tab){
  let msg = {
    txt: "Kittens!"
  }
  chrome.tabs.sendMessage(tab.id,msg);
}
