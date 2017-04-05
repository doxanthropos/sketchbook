var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();
var lfo = con.createOscillator();
var lfo_amp = con.createGain();

lfo_amp.gain.value = 200;
lfo.frequency.value = 150;

osc.frequency.value = 150;

lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency);
osc.connect(con.destination);
lfo.start();
osc.start();

var slider1, slider2 , keyboard;
nx.onload = function(){
    slider1.on('*', slider1Changed);
    slider2.on('*', slider2Changed);
    keyboard.on('*', keyboardChanged);
}

function slider1Changed(data){
    lfo.frequency.value = data.value;
}

function slider2Changed(data){
    lfo_amp.gain.value = data.value;
}

function keyboardChanged(data){
    console.log(data);
    /* frequency to midi note conversion follows this article:
     * https://newt.phys.unsw.edu.au/jw/notes.html */
    osc.frequency.value = Math.pow(2,(data.note -69) /12)*440;
}
