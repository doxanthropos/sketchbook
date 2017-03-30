var audio_context = window.AudioContext || window.webkitAudioContext;

var notes = {
  /* "white" keys */
  "y": 523.25, /* C */
  "x": 587.33, /* D */
  "c": 659.25, /* E */
  "v": 698.46, /* F */
  "b": 783.99, /* G */
  "n": 880.00, /* A */
  "m": 987.77, /* H */
  ",": 1046.50, /* C */
  /* "black" keys */
  "s": 554.37,/* Cis */
  "d": 622.25,/* Dis */
  "g": 739.99,/* Fis */
  "h": 830.61,/* Gis */
  "j": 932.33,/* Ais */
};
var con = new audio_context();
var osc = con.createOscillator();
var filter = con.createBiquadFilter();
osc.frequency.value = 600;
osc.type = "sawtooth";
osc.connect(filter);
filter.connect(con.destination);
osc.start();

function playNote(key){
  osc.frequency.value = notes[key];
}

function changeFilter(mx,my){
  filter.frequency.value = mx * 10;
  filter.Q.value = my / 5;
}
