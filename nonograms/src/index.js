"use strict";

import { createElement } from "./common";

const tableWidth = 5;
const tableHeight = 5;

const main = createElement("main", "main_22", document.querySelector("body"));

const createTable = () => {
  const table = createElement("table", "table", main);
  const firstRow = createElement("tr", "table-row", table);

  for (let index = 0; index < tableWidth + 1; index++) {
    createElement("th", "clue-cell", firstRow);
  }

  for (let rowIndex = 0; rowIndex < tableHeight; rowIndex++) {
    const row = createElement("tr", "table-row", table);
    createElement("th", "clue-cell", row);

    for (let cellIndex = 0; cellIndex < tableWidth; cellIndex++) {
      createElement("td", "cell", row);
    }
  }
};

createTable();
