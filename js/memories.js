$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
// loadAudioFile('music/1.mp3');
function swap_music() {
                var oAudio = document.getElementById('myaudio');
                if (oAudio.paused) {
                    oAudio.play();
                }
                else {
                    oAudio.pause();
                }
            }