import { css, html } from '../../lit-element.js';
import Component from './Component.js';

class AlphabetText extends Component {
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
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 10vh;
          white-space: nowrap;
        }

        #firstLetter {
          color: var(--red);
          text-transform: uppercase;
        }
      `
    ];
  }

  render() {
    return html`
      <span id="firstLetter">${this.text[0]}</span><span>${this.text.substring(1)}</span>
    `;
  }
}

customElements.define('alphabet-text', AlphabetText);
