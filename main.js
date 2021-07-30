
//add click event on keys and run function to play audio with each click
window.addEventListener('click', function(e){
  const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`); //get the audio equal to pressed key (using dataset)
  audio.currentTime = 0; //use audio.currentTime, to set the current position of the audio playback to 0 (second)
  audio.play(); //play audio
  document.querySelector('.notes').textContent = e.target.textContent + " - " + e.target.dataset.key; //display notes (kliked keys) on screen
})