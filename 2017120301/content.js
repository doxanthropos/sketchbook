console.log("Chrome Extension Ready to Go!");

let paragraphs = document.getElementsByTagName("p");

for (elt of paragraphs){
  elt.style['background-color'] = '#FF00FF';
}
