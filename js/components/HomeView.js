import { css, html } from '../../lit-element.js';
import Component from './Component.js';
import './MenuCard.js';
import './CategoryView.js';
import './NumbersView.js';

class HomeView extends Component {
  static get properties() {
    return {
      categories: { type: Array }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: grid;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          min-height: 0;
          padding: 50px;
          grid-gap: 50px;
          box-sizing: border-box;
        }
      `
    ];
  }

  constructor() {
    super();
    this.categories = ['animals', 'produce', 'objects', 'numbers'];
    this.homeWords = {
      animals: 'dog',
      produce: 'apple',
      objects: 'car',
      numbers: 'blueberry'
    };
  }

  handleKeyup(e) {
    e.preventDefault();

    this.categories.forEach((c) => {
      if (c[0] === e.key.toLowerCase()) {
        let categoryView = document.createElement('category-view');
        if (c === 'numbers') {
          categoryView = document.createElement('numbers-view');
        }
        categoryView.category = c;
        document.body.appendChild(categoryView);
        document.body.removeChild(this);
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this._handleKeyup = this.handleKeyup.bind(this);
    window.addEventListener('keyup', this._handleKeyup);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keyup', this._handleKeyup);
  }

  render() {
    return this.categories.map((c) => html`<menu-card text=${c} word=${this.homeWords[c]}></menu-card>`);
  }
}

customElements.define('home-view', HomeView);
