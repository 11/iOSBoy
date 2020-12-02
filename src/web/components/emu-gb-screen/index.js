import { LitElement, html, css } from 'lit-element';
const rust = import('pkg/iOSBoy');


class GameboyScreen extends LitElement {
  static get styles() {
    return css`
      .panel {
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
        border-width: 4vh 3vw;
        border-style: solid;

        background-color: green;
        width: 96vw;
        height: 40vh;
      }
    `;
  }

  constructor() {
    super();

    this.initializeScreen = this.initializeScreen.bind(this);
  }


  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('load', this.initializeScreen);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('load', this.initializeScreen);
  }

  initializeScreen = () => {
    rust.then(m => {

      // set up canvas width and height
      const canvas = this.shadowRoot.getElementById('gameboy-canvas');
      canvas.width = 160;
      canvas.height = 144;

      // set up FPS limit to the canvas
      const FPS_THROTTLE = 1000.0/60.0;
      let lastDrawTime = -1;

      const client = new m.Client();

      const render = () => {
        window,requestAnimationFrame(render);

        const currTime = Date.now();
        if (currTime >= lastDrawTime + FPS_THROTTLE) {
          lastDrawTime = currTime;

          client.update();
          client.render();
        }
      }
      // render();
    });
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