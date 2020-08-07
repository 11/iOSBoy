import { LitElement, html, css } from 'lit-element';


class GameboyScreen extends LitElement {
  static get styles() {
    return css`
      .panel{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: black;
      }

      canvas {
        border-color: black;
        border-radius: 5px;
        border-width: 3vh 4vw;
        border-style: solid;

        background-color: green;
        width: 96vw;
        height: 40vh;
      }
    `;
  }

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
      <div class="panel">
        <canvas id="gameboy-canvas"></canvas>
      </div>
    `;
  }
}

customElements.define('emu-gb-screen', GameboyScreen);