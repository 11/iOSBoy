import { LitElement, html, css } from 'lit-element'
const rust = import('pkg/emus4iOS');

class GameboyView extends LitElement {
  constructor() {
    super();

    this.handleLoad = this.handleLoad.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('load', this.handleLoad);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    // set canvas' resolution to the same as the original gameboy
    // the original gameboy's resolution are 160 x 144 pixels
    const canvas = this.shadowRoot.getElementById('gameboy-canvas');
    canvas.width = 160;
    canvas.height = 144;
  }

  render() {
    return html`
      <link rel="stylesheet" href="./style.css">

      <div class="wrapper">
        <canvas id="gameboy-canvas"></canvas>
        <div class="controller-container">
          <div class="arrow-pad">
            <div class="up-button"></div>
            <div class="down-button"></div>
            <div class="right-button"></div>
            <div class="left-button"></div>
          </div>

          <div class="console-buttons">
            <div class="start-button">
            <div class="select-button">
          </div>

          <div class="controller-buttons">
            <div class="a-button">
            <div class="b-button">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('emu-view-gameboy', GameboyView);