var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();
var osc = con.createOscillator();
var lfo = con.createOscillator();
var lfo_amp = con.createGain();
var oscs = {};
var amps = {};



lfo_amp.gain.value = 200;
lfo.frequency.value = 150;

osc.frequency.value = 150;

lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency);
osc.connect(con.destination);
lfo.start();

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
    if(data.on > 0){
	oscs[data.note] = con.createOscillator();
	amps[data.note] = con.createGain();
	amps[data.note].gain.value = 0;
	oscs[data.note].frequency.value = Math.pow(2,(data.note -69) /12)*440;
	lfo_amp.connect(oscs[data.note].frequency);
	oscs[data.note].connect(amps[data.note]);
	var now = con.currentTime;
	amps[data.note].gain.linearRampToValueAtTime(0.1, now + 0.2);
	amps[data.note].connect(con.destination);
	oscs[data.note].start();
    } else {
	var now = con.currentTime;
	amps[data.note].gain.linearRampToValueAtTime(0, now + 2);
    }
    /* frequency to midi note conversion follows this article:
     * https://newt.phys.unsw.edu.au/jw/notes.html */
}
