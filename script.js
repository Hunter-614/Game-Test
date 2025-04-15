
function playSound(action) {
  let soundId = {
    start: 'sound-start',
    connect: 'sound-connect',
    settings: 'sound-settings'
  }[action];
  
  let sound = document.getElementById(soundId);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
