var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();
osc.connect(con.destination);
osc.frequency.value = 150;
osc.start();

function setNote(key){
/* mapping notes to keys */
  switch(key){
  case "y":
    osc.frequency.value = 130.81;
    break;
  case "x":
    osc.frequency.value = 146.83;
    break;
  case "c":
    osc.frequency.value = 164.81;
    break;
  case "v":
    osc.frequency.value = 174.61;
    break;
  case "b":
    osc.frequency.value = 196.00;
    break;
  case "n":
    osc.frequency.value = 220.00;
    break;
  case "m":
    osc.frequency.value = 246.94;
    break;
 /* if another key is pressed try to make a frequency out of it */
  default:
    osc.frequency.value = Number(key + "00");
  }
}
