// create modules or iife or something similar upon organizing files, not sure exact structure yet


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

  function status() {
    if(!mmedia.ended) {
      var size = parseInt(mmedia.currentTime * maxProg / mmedia.duration);
      progress.style.width = size + "px";
    } else {
      progress.style.width = "0px";
      play.innerHTML = "Play"
      clearInterval(loop);
    }
  }

  function move(e) {
    if(!mmedia.paused && !mmedia.ended) {
      var mouse = e.pageX - bar.offsetLeft;
      var newTime = mouseX * mmedia.duration / maxim;
      mmedia.currentTime = newTime;
      progress.style.width = mouseX + "px";
    }
  }

  function sound() {
    if(mute.value == "Mute") {
      mmedia.muted = true;
      mute.value = "Sound";
    } else {
      mmedia.muted = false;
      mute.value = "Mute";
    }
  }

  function level() {
    mmedia.volume = volume.value;
  }

  addEventListener("load", init);
