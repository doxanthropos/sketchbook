var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();
var lfo = con.createOscillator();

var lfo_amp = con.createGain();

lfo_amp.gain.value = 200;

osc.frequency.value = 300;
lfo.frequency.value = 150;

lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency);
osc.connect(con.destination);

osc.start();
lfo.start();
