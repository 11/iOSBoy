import { LitElement, html, css } from 'lit-element'
import "components/emu-gb-screen";



class GameboyView extends LitElement {
  static get styles() {
    return css`
      .wrapper {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: purple;
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