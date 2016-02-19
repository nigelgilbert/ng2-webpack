"use strict";

import { Component, Inject, provide } from "angular2/core";
import { Ticker } from "./ticker/ticker.component";
import { SymbolsService } from "../services/symbols"

@Component({
  selector: "app",
  directives: [Ticker],
  providers: [SymbolsService],
  template: `
  <h3>Angular 2</h3>
    <ul>
      <li *ngFor="#symbol of symbols">
        <ticker [symbol]=symbol></ticker>
      </li>
    </ul>
  `
})
export class App {
  static get parameters() {
    return [[SymbolsService]];
  }
  constructor(service) {
    this.symbols = service.getData();
  }
}