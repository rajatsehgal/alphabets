import { css, html } from '../../lit-element.js';
import Component from './Component.js';
import words from '../words.js';

class CategoryView extends Component {
  static get properties() {
    return {
      category: { type: String },
      letter: { type: String },
      word: { type: String }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          align-items: center;
          height: 100%;
          width: 100%;
        }

        #title {
          text-transform: capitalize;
          font-size: 10vh;
          grid-row: 1;
          grid-column: 1/3;
        }
        
        #letter, #word {
          text-transform: capitalize;
          text-align: center;
          font-size: 15vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        #letter {
          grid-row: 2;
          grid-column: 1;
          color: var(--red);
        }
      
        #imageWrapper {
          grid-row: 2;
          grid-column: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          min-height: 0;
          min-width: 0;
        }
      
        #image {
          max-width: 100%;
          max-height: 100%;
        }
        
        #word {
          grid-row: 3;
          grid-column: 1/3;
          white-space: nowrap;
        }
      `
    ];
  }

  handleKeyup(e) {
    e.preventDefault();

    if (e.key === 'Escape') {
      const homeView = document.createElement('home-view');
      document.body.appendChild(homeView);
      document.body.removeChild(this);
    }

    const letter = e.key;
    const word = words[this.category][letter];
    
    if (!word) {
      return;
    }

    this.letter = letter;
    this.word = word;
    
    this._audio.src = `audio/${this.category}/${word}.mp3`;
    this._audio.play();
  }

  connectedCallback() {
    super.connectedCallback();

    this._audio = new Audio();
    this._handleKeyup = this.handleKeyup.bind(this);
    window.addEventListener('keyup', this._handleKeyup);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keyup', this._handleKeyup);
  }

  render() {
    let result = '';
    if (this.word) {
      result = html`
        <div id="title">${this.category}</div>
        <div id="letter">${`${this.letter}${this.letter}`}</div>
        <div id="imageWrapper"><img id="image" src=${`images/${this.category}/${this.word}.png`}></div>
        <div id="word">${this.word}</div>
      `;
    }
    return result;
  }
}

customElements.define('category-view', CategoryView);
