
var resettimer = 0;
var x = document.getElementById("soundtrack25m");


function pauseSoundtrack() {
  x.pause();
}

function playSoundtrack(){
  x.play();

}

function stopSoundtrack(){
  x.pause();
  x.currentTime = 0.0;

}

var isPlaying = false;

function playBgSound(sound, image) {

  myAudio = document.getElementById(sound);
  myImage = document.getElementById(image);

  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }

  if (myImage.src.includes("speakeroff.png")) {
    myImage.src = "speakeron.png"
  } else {
    myImage.src = "speakeroff.png"
  }

  myAudio.onplaying = function() {
    isPlaying = true;
  };
  myAudio.onpause = function() {
    isPlaying = false;
  };
};
