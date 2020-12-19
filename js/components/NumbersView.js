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
          min-height: 0px;
          min-width: 0px;
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
      
        #imageArea {
          display: grid;
          grid-template-areas:
            "a . c"
            "e g f"
            "d . b";
          grid-row: 2;
          grid-column: 2;
          min-height: 0px;
          min-width: 0px;
          height: 100%;
          width: 100%;
        }

        img {
          max-height: 100%;
        }

        .imgWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          min-height: 0px;
          min-width: 0px;
        }

        .imgWrapper:nth-child(2) {
          grid-area: b;
        }

        .imgWrapper:nth-child(3) {
          grid-area: c;
        }
        
        .imgWrapper:nth-child(4) {
          grid-area: d;
        }

        .imgWrapper:nth-child(5) {
          grid-area: e;
        }

        .imgWrapper:nth-child(6) {
          grid-area: f;
        }
        
        .imgWrapper:nth-child(odd):last-child {
          grid-area: g;
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
      blueberries.push(html`<div class="imgWrapper"><img src=${`images/${this.category}/blueberry.png`}></div>`);
    }
    return blueberries;
  }

  render() {
    const result = [html`<div id="title">${this.category}</div>`];
    if (this.number) {
      result.push(html`
        <div id="number">${this.number}</div>
        <div id="imageArea">${this.renderBlueberries()}</div>
      `);
    }
    return result;
  }
}

customElements.define('numbers-view', NumbersView);
