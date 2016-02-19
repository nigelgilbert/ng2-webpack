"use strict";

import { Component } from "angular2/core";
import "./ticker.css";

@Component({
  selector: "ticker",
  inputs: ["symbol"],
  template: `
    <div class="container">
      <div></div>
      {{ symbol }}
    <div>
   `
})
export class Ticker {
  constructor() {}
}