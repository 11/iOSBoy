import { LitElement, html, css } from 'lit-element'

const rust = import('pkg/emus4iOS');

const Wrapper = css`
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;

    width: 100%;
    height: 100%;

    background-color: #C4BFBA;
  }
`;

const Canvas = css`
  canvas {
    border-radius: 5px;
    background-color: green;
    width: 100%;
  }
`;

const ControllerContainer = css`
  .controller-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

const ArrowPad = css`
  .arrow-pad div {
    border-radius: 100px;
    background-color: #A12C5E;
    width: 25px;
    height: 25px;
  }
`;

const ControllerButtons = css`
  .controller-buttons div {
    border-radius: 100px;
    background-color: #A12C5E;
    width: 25px;
    height: 25px;
    padding-right: 2px;
  }
`;


class GameboyView extends LitElement {
  static get styles() {
    return [
      Wrapper,
      Canvas,
      ControllerContainer,
      ControllerButtons,
      ArrowPad,
    ];
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

    debugger;
    rust.then(m => m.say_hello_from_rust())
      .catch(console.error);
  }

  render() {
    return html`
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

customElements.define('emu-gameboy', GameboyView);