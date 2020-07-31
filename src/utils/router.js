import Navigo from 'navigo';
import { html } from 'lit-element';

import "views/homepage-view";
import "views/gameboy-view";

export class Router {
  constructor() {
    this.route = '/';
    this.router = new Navigo(this.route, true, '#!');
    this._createRouteTable();
  }

  _createRouteTable() {
    this.router
      .on('gameboy', () => this.route=html`<emu-gameboy />`)
      .on('*', () => this.route=html`<emu-homepage />`);

    this.router.resolve();
  }

  navigate(route='/') {
    this.router.navigate(route);
    return html`${this.route}`;
  }
}
