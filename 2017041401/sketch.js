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

function loadSample(url,callback){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function(){
    var audioData = request.response;
    con.decodeAudioData(audioData, function(buffer){
      console.log(buffer);
      callback(buffer);
    });
  };
  request.send();
}
