
var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();

osc.frequency.value = 150;

osc.connect(con.destination);
/*osc.start();*/

var slider1;
nx.onload = function(){
    slider1.on('*', slider1Changed)
}

function slider1Changed(data){
    osc.frequency.value = data.value;
}
