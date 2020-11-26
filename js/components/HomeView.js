import { css, html } from '../../lit-element.js';
import Component from './Component.js';
import './MenuCard.js';

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
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      `
    ];
  }

  constructor() {
    super();
    this.categories = ['animals', 'produce'];
  }

  handleKeyup(e) {
    e.preventDefault();

    this.categories.forEach((c) => {
      if (c[0] === e.key) {
        const categoryView = document.createElement('category-view');
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
    return this.categories.map((c) => html`<menu-card text=${c}></menu-card>`);
  }
}

customElements.define('home-view', HomeView);
