var audio = document.getElementById("myaudio");
var playBtn = document.getElementById("play_pause");

playBtn.addEventListener("click", function(){
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "Pause";
    } else {
        audio.pause();
        playBtn.innerHTML = "Play";
    }
});