import { LitElement, html } from 'lit-element';

class RomInput extends LitElement {
  constructor() {
    super();

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload = event => {
    console.log('made it here')
  }

  render() {
    return html`
      <link rel="stylesheet" href="./style.css">

      <input
        type="file"
        id="rom-files"
        accept=".gb, .gbc, .gba"
        @input=${this.handleFileUpload}
      />
    `;
  }
}

customElements.define('emu-rom-input', RomInput);