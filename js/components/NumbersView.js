import { css, html } from '../../lit-element.js';
import Component from './Component.js';

class NumbersView extends Component {
  static get properties() {
    return {
      category: { type: String },
      number: { type: String }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: grid;
          grid-template-rows: auto 1fr;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          align-items: center;
          height: 100%;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        #title {
          text-transform: capitalize;
          font-size: 10vh;
          grid-row: 1;
          grid-column: 1/3;
          color: grey;
        }
        
        #number {
          grid-row: 2;
          grid-column: 1;
          color: var(--red);
          text-transform: capitalize;
          text-align: center;
          font-size: 15vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      
        #imageWrapper {
          grid-row: 2;
          grid-column: 2;
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

    const number = parseInt(e.key);
    
    if (!number) {
      return;
    }

    this.number = number;
    
    this._audio.src = `audio/${this.category}/${number}.mp3`;
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

  renderBlueberries() {
    const blueberries = [];
    for (let i = 0; i < this.number; i += 1) {
      blueberries.push(html`<img src=${`images/${this.category}/blueberry.png`}>`);
    }
    return blueberries;
  }

  render() {
    const result = [html`<div id="title">${this.category}</div>`];
    if (this.number) {
      result.push(html`
        <div id="number">${this.number}</div>
        <div id="imageWrapper">${this.renderBlueberries()}</div>
      `);
    }
    return result;
  }
}

customElements.define('numbers-view', NumbersView);
