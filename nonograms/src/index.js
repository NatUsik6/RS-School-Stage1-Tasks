"use strict";

import { createElement } from "./common.js";

const tableWidth = 5;
const tableHeight = 5;

const main = createElement("main", "main", document.querySelector("body"));

const createTable = () => {
  const table = createElement("table", "table", main);
  const firstRow = createElement("tr", "table-row", table);

  for (let index = 0; index < tableWidth + 1; index++) {
    createElement("th", "clue-cell clue-cell-vertical", firstRow);
  }

  for (let rowIndex = 0; rowIndex < tableHeight; rowIndex++) {
    const row = createElement("tr", "table-row", table);
    createElement("th", "clue-cell clue-cell-horizontal", row);

    for (let cellIndex = 0; cellIndex < tableWidth; cellIndex++) {
      createElement("td", "cell", row);
    }
  }
};

const fillClues = async () => {
  const response = await fetch("../resources/nonograms.json");
  const nonograms = await response.json();
  const nonogram = nonograms[0];
  const horizontalClues = [];

  for (let rowIndex = 0; rowIndex < nonogram.data.length; rowIndex++) {
    const row = nonogram.data[rowIndex];
    horizontalClues.push([0]);
    const clueRow = horizontalClues[rowIndex];
    
    for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
      const cell = row[cellIndex];
      
      if (cell === 0 && clueRow[clueRow.length - 1] !== 0) {
        clueRow.push(0);
      }

      if (cell === 1) {
        clueRow[clueRow.length - 1]++;
      }
    }
  }
}

createTable();
