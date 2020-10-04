import words from './words.js';

const letterDiv = document.getElementById('letter');
const imageDiv = document.getElementById('image');
const wordDiv = document.getElementById('word');
const synth = window.speechSynthesis;
var voices;

function loadVoices() {
  voices = synth.getVoices();
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

window.addEventListener('keyup', (e) => {
  e.preventDefault();

  const letter = e.key;
  letterDiv.textContent = letter;

  const word = words[letter] ? words[letter] : letter;  
  wordDiv.textContent = word;
  
  imageDiv.src = `images/${word}.png`;
  
  const utterThis = new SpeechSynthesisUtterance(word);
  utterThis.voice = voices.find(v => v.name ==='Google US English');
  synth.speak(utterThis);
});