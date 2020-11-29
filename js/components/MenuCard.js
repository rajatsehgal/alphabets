import { css, html } from '../../lit-element.js';
import Component from './Component.js';
import './AlphabetText.js';

class MenuCard extends Component {
  static get properties() {
    return {
      text: { type: String },
      word: { type: String }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: grid;
          height: 100%;
          width: 100%;
          align-items: center;
          justify-content: center;
          grid-template-rows: 1fr auto;
          grid-template-columns: 1fr;
          min-height: 0;
          padding: 10px;
          box-sizing: border-box;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }

        #imgWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          min-height: 0;
          min-width: 0;
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }

        #firstLetter {
          color: var(--red);
          text-transform: uppercase;
        }

        #text {
          font-size: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      `
    ];
  }

  render() {
    return html`
      <div id="imgWrapper">
        <img src="images/${this.text}/${this.word}.png"}>
      </div>
      <alphabet-text text=${this.text}></alphabet-text>
    `;
  }
}

customElements.define('menu-card', MenuCard);
