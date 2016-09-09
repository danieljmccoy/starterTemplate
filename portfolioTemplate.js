// create modules or iife or something similar upon organizing files, not sure exact structure yet

(function() {
  // video player logic
  var maxProg, mmedia, play, bar, progress, mute, voulume, loop;

  function init() {

    maxProg = 450; // max size of progress bar
    mmedia = document.getElementById("media");
    play = document.getElementById("play");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");
    mute = document.getElementById("mute");
    volume = document.getElementById("volume");


    play.addEventListener("click", push);
    mute.addEventListener("click", sound);
    bar.addEventListener("click", move);
    volume.addEventListener("change", level);

  }

  function push() {
    if (!mmedia.paused && !media.ended) {
      mmedia.pause();
      play.value = "Play";
      clearInterval(loop);
    } else {
      mmedia.play();
      play.value = "Pause";
      loop = setInterval(status, 1000);
    }
  }
  
})
