
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

//countdown
var timeristopped = 0;
// Update the count down every 1 second
function timerStart(){
  // Set the date we're counting down to
  var in25minutes = new Date(new Date().getTime() + 25*60000);

  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = in25minutes - now;

    // Time calculations for minutes and seconds

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id=""
    document.getElementById("timer-countdown").innerHTML = minutes + ":" + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer-countdown").innerHTML = "TAKE A BREAK!";
    }

  }, 1000);
  }

  function timerStop(){
   timeristopped = 1;
  }
