import { LitElement, css } from '../../lit-element.js';

export default class Component extends LitElement {
  static get styles() {
    return css`
      :host([hidden]) {
        display: none;
      }

      :host {
        font-family: "Helvetica Neue";
      }

      ::-webkit-scrollbar {
        height: 3px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb);
      }
      
      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    `;
  }

  fire(name, detail) {
    this.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail,
    }));
  }
}
