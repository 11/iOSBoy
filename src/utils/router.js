import Navigo from 'navigo';
import { html } from 'lit-element';

import "views/emu-view-homepage";
import "views/emu-view-gameboy";


export class Router {
  constructor() {
    this.view = null;
    this.router = this._createRoutingTable();
  }

  _createRoutingTable() {
    let router = new Navigo('/', true, '#!');
    router
      .on('gameboy', () => this.view = html`<emu-view-gameboy />`)
      .on('*', () => this.view = html`<emu-view-homepage />`);
    router.resolve();

    return router;
  }

  _navigate(route='/') {
    this.router.navigate(route);
    this.history.push(route);
    return this.result;
  }

  render() {
    return this.view;
  }
}