import { LitElement, html, css } from 'lit-element'
import "components/emu-gb-screen";

const rust = import('pkg/emus4iOS');


class GameboyView extends LitElement {
  static get styles() {
    return css`
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

      .controller-buttons div {
        border-radius: 100px;
        background-color: #A12C5E;
        width: 25px;
        height: 25px;
        padding-right: 2px;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="wrapper">
        <emu-gb-screen></emu-gb-screen>
      </div>
    `;
  }
}

customElements.define('emu-view-gameboy', GameboyView);