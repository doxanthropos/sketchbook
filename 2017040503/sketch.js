var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();

osc.frequency.value = 150;

osc.connect(con.destination);
osc.start();

var tilt , keyboard;
nx.onload = function(){
    tilt.on('*', tiltChanged);
}

function tiltChanged(data){
    console.log(data);
    osc.frequency.value = data.x * 1000;
}
