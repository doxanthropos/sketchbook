/*
  The snare sound is from:
   https://freesound.org/people/duskstep/sounds/160863/
 */

var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();

var snare;

loadSample('sounds/snare.wav', function(buffer){
  snare = buffer;
});

function playSnare(){
  var player = con.createBufferSource();
  player.buffer = snare;
  player.start();
  player.loop = false;
  player.connect(con.destination);
}

var snare_seq = [1,0,1,1,0];
var step = 0;
setInterval(function(){
  if(snare_seq[step%snare_seq.length]==1){
    playSnare();
  }
  step ++;
},250);

function loadSample(url,callback){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function(){
    var audioData = request.response;
    con.decodeAudioData(audioData, function(buffer){
      callback(buffer);
    });
  };
  request.send();
}
