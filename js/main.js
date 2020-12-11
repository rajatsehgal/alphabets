import './components/HomeView.js';

function preventDefault(e) {
  e.preventDefault();
}

window.addEventListener('keydown', preventDefault);
window.addEventListener('keypress', preventDefault);
window.addEventListener('contextmenu', preventDefault);
