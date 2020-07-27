import { LitElement, css, html } from 'lit-element';

class Homepage extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`<p> emus4iOS </p>`;
  }

}

customElements.define('emu-homepage', Homepage);