import { LitElement, html, css } from "lit-element";

export class DirectionalPad extends LitElement {
  static get styles() {
    return css`
      .wrapper {
        width: 40vw;
        border-radius: 100;
        background-color: red;
      }
    `;
  }

  render() {
  }
}

customElements.define("emu-gb-dpad", DirectionalPad);