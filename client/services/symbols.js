"use strict";

export class SymbolsService {
  constructor() {
    this._symbols = ["AAPL", "GOOG", "NFLX"];
  }
  getData() {
    return this._symbols;
  }
}