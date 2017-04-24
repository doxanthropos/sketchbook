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
var interval = 0.125/2;
var wait_time = 0.5;
var got_up_to;
setInterval(function(){
  var now = con.currentTime;
  var max_future_time = now + (wait_time * 1.5);
  if (got_up_to > now ){
    now = got_up_to;
  }

  while ( now <= max_future_time){
    if(snare_seq[step % snare_seq.length]==1){
      playSnare();
    }
    now += interval;
  }
  got_up_to = now;
},wait_time*1000);

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
