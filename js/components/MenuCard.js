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
          display: flex;
          flex-direction: column;
          padding: 20px;
          margin: 20px;
          align-items: center;
          justify-content: center;
        }

        #grid {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-rows: repeat(5, 50px);
          grid-template-columns: repeat(5, 50px);
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }

        #firstLetter {
          color: var(--red);
        }

        #text {
          text-transform: capitalize;
          font-size: 30px;
        }
      `
    ];
  }

  render() {
    const images = [];
    const letters = Object.keys(words[this.text]);
    letters.forEach((l, i) => {
      if (i < 25) {
        images.push(html`<img src="images/${this.text}/${words[this.text][l]}.png"}>`);
      }
    });

    return html`
      <div id="grid">
        ${images}
      </div>
      <div id="text"><span id="firstLetter">${this.text[0]}</span><span>${this.text.substring(1)}</span></div>
    `;
  }
}

customElements.define('menu-card', MenuCard);
