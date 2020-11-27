import { css, html } from '../../lit-element.js';
import Component from './Component.js';
import words from '../words.js';

class MenuCard extends Component {
  static get properties() {
    return {
      text: { type: String }
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
          font-size: 15vh;
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
        <img src="images/${this.text}/${words[this.text].a}.png"}>
      </div>
      <div id="text"><span id="firstLetter">${this.text[0]}</span><span>${this.text.substring(1)}</span></div>
    `;
  }
}

customElements.define('menu-card', MenuCard);
