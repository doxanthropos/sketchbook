console.log("Chrome Extension Ready to Go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse){
  if(request.txt=="hello"){
    let paragraphs = document.getElementsByTagName("p");

    for (elt of paragraphs){
      elt.style['background-color'] = '#FF00FF';
    }    
  }
}
