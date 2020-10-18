import words from './words.js';

const letterDiv = document.getElementById('letter');
const imageDiv = document.getElementById('image');
const wordDiv = document.getElementById('word');

const audio = new Audio();

window.addEventListener('keyup', (e) => {
  e.preventDefault();

  const letter = e.key;
  const word = words[letter];
  
  if (!word) {
    return;
  }

  letterDiv.textContent = letter;
  wordDiv.textContent = word;
  
  imageDiv.src = `images/${word}.png`;
  audio.src = `audio/${word}.mp3`;
  audio.play();
});