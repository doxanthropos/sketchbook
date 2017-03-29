var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();
osc.connect(con.destination);
osc.frequency.value = 150;
osc.start();

