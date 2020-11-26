import './components/HomeView.js';
import './components/CategoryView.js';

function preventDefault(e) {
  e.preventDefault();
}

window.addEventListener('keydown', preventDefault);
window.addEventListener('keypress', preventDefault);
window.addEventListener('contextmenu', preventDefault);
