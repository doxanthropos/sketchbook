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

var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();

function playSynth(key){
  var osc = con.createOscillator();
  var amp = con.createGain();
  amp.gain.value = 0;
  osc.frequency.value = notes[key];
  osc.connect(amp);
  var now = con.currentTime;

  amp.gain.linearRampToValueAtTime(0.1, now + 0.2);
  amp.gain.linearRampToValueAtTime(0, now + 2);
  amp.connect(con.destination);
  osc.start();
  osc.stop(now + 2.1);
}
