/*
  Again learning by following the videos of Daniel Shiffman https://www.youtube.com/user/shiffman/
  This time: https://www.youtube.com/watch?v=8zMMOdI5SOk
*/
/*
Kitten image credits:
Photo by Matthew Larkin on Unsplash
Photo by Sarah Brink on Unsplash
Photo by Paul on Unsplash
*/

console.log("Kittens of the web: Unite!");
let kittenFiles = ["matthew-larkin-407257.jpg","paul-291714.jpg","sarah-brink-351501.jpg"];

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse){
  if(request.txt=="Kittens!"){
    let images = document.getElementsByTagName("img");

    let requestURL = "http://thecatapi.com/api/images/get?format=xml&results_per_page=" + images.length;
    var x = new XMLHttpRequest();
      x.open("GET", requestURL, true);
      console.log("Starting to retrieve kitten information.");
      x.onreadystatechange = function () {
        if (x.readyState == 4 && x.status == 200)
        {
          var doc = x.responseXML;
          console.log(doc);
          for (img of images){
            img.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
          }
        }
      };
  }
}

function chooseRandomElement(inputList){
  return inputList[Math.floor(Math.random() * inputList.length)];
}
