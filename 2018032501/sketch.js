window.onload = function(){
  const textNode = document.querySelector('.opening-text');
  const splitTextArr = textNode.innerText.split(" ");

  let finalMarkup = "";
  splitTextArr.forEach(buildMarkup);

  function buildMarkup(text, index){
    let spanText;

    (index === 2) ?
      spanText = "<span>" + text + "</span><br />" :
      spanText = "<span>" + text + "</span> ";

    return finalMarkup += spanText;
  }
  textNode.innerHTML = finalMarkup;
}
