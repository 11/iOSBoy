import { LitElement, html } from 'lit-element';

import 'components/emu-rom-input'

class Homepage extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <p> iOSBoy </p>
      <emu-rom-input></emu-rom-input>
    `;
  }

}

customElements.define('emu-view-homepage', Homepage);