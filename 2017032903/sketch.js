var audio_context = window.AudioContext || window.webkitAudioContext;

var notes = {
  /* "white" keys */
  "y": 130.81, /* C */
  "x": 146.83, /* D */
  "c": 164.81, /* E */
  "v": 174.61, /* F */
  "b": 196.00, /* G */
  "n": 220.00, /* A */
  "m": 246.94, /* H */
  ",": 261.63, /* C */
  /* "black" keys */
  "s": 138.59,/* Cis */
  "d": 155.56,/* Dis */
  "g": 185.00,/* Fis */
  "h": 207.65,/* Gis */
  "j": 233.08,/* Ais */
};
var con = new audio_context();
var osc = con.createOscillator();
osc.frequency.value = 150;
osc.start();

function playNote(key){
  osc.connect(con.destination);
  osc.frequency.value = notes[key];
}

function endNote(){
  osc.disconnect();
}
