var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();

function playSynth(){
  var osc = con.createOscillator();
  var amp = con.createGain();
  amp.gain.value = 0;
  osc.frequency.value = Math.random() * 500;
  osc.connect(amp);
  var now = con.currentTime;

  amp.gain.linearRampToValueAtTime(0.1, now + 2);
  amp.gain.linearRampToValueAtTime(0, now + 4);
  amp.connect(con.destination);
  osc.start();
  osc.stop(now + 4.1);
}
