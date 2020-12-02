import { LitElement, html, css } from 'lit-element';

class Navbar extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav></nav>
    `;
  }
}

customElements.define('emu-nav', Navbar);