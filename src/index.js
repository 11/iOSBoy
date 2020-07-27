import { LitElement, html, } from 'lit-element';
import Navigo from 'navigo';

import "views/HomepageView";
import "views/GameboyView";


class AppRoot extends LitElement {
  static get properties() {
    return {
      route: { type: Object }
    }
  }

  constructor() {
    super();

    // TODO update router to detect property change -- put router in route/routes
    const router = new Navigo('/', true, '#!');
    router
      .on('about', () => this.route=html`<about-view />`)
      .on('gameboy', () => this.route=html`<emu-gameboy />`)
      .on('*', () => this.route=html`<emu-homepage />`);
    router.resolve();
  }

  render() {
    return html`${this.route}`;
  }
}

customElements.define('app-root', AppRoot);