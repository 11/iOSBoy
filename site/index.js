import { LitElement } from 'lit-element';
import { Router } from 'utils/router';


class AppRoot extends LitElement {
  constructor() {
    super();
    this.router = new Router();
  }

  render() {
    return this.router.render();
  }
}

customElements.define('app-root', AppRoot);