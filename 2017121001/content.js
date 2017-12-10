var lightColors = ['#FF00FF','#6699ff'];
var darkColors = ['#000099','#660066'];
console.log("Chrome Extension Ready to Go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse){
  if(request.txt=="hello"){
    let paragraphs = document.getElementsByTagName("p");
    document.body.style['backgroundColor'] = chooseRandomElement(darkColors);
    document.body.style['color'] = chooseRandomElement(lightColors);
    for (elt of paragraphs){
      elt.style['background-color'] = chooseRandomElement(lightColors);
      elt.style['color'] = chooseRandomElement(darkColors);
    }
  }
}

function chooseRandomElement(inputList){
  return inputList[Math.floor(Math.random() * inputList.length)];
}
