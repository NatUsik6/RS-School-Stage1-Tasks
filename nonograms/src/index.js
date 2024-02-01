"use strict";

import { createElement, createPreElement } from "./common.js";

const tableWidth = 5;
const tableHeight = 5;

const main = createElement("main", "main", document.querySelector("body"));
const table = createElement("table", "table", main);

const clueTableRows = [];
const tableRows = [];
let nonograms = [];

const getNonograms = async () => {
  const response = await fetch("resources/nonograms.json");
  nonograms = await response.json();
}

const createTable = async () => {
  await getNonograms();

  for (let rowIndex = 0; rowIndex < tableHeight; rowIndex++) {
    const row = createElement("tr", "table-row", table);
    tableRows.push(row);

    for (let cellIndex = 0; cellIndex < tableWidth; cellIndex++) {
      createElement("td", "cell", row);
    }
  }

  const verticalClues = getVerticalClues();
  fillVerticalClueCells(verticalClues);

  const horizontalClues = getHorizontalClues();
  fillHorizontalClueCells(horizontalClues);
};

const getVerticalClues = () => {
  const nonogram = nonograms[0];
  const verticalClues = [];

  for (let columnIndex = 0; columnIndex < nonogram.data[0].length; columnIndex++) {
    const clueColumn = [0];

    for (let cellIndex = 0; cellIndex < nonogram.data.length; cellIndex++) {
      const cell = nonogram.data[cellIndex][columnIndex];

      if (cell === 0 && clueColumn[clueColumn.length - 1] !== 0) {
        clueColumn.push(0);
      }

      if (cell === 1) {
        clueColumn[clueColumn.length - 1]++;
      }
    }

    verticalClues.push(clueColumn.filter(item => item !== 0).reverse());
  }

  return verticalClues;
}

const getHorizontalClues = () => {
  const nonogram = nonograms[0];
  const horizontalClues = [];

  for (let rowIndex = 0; rowIndex < nonogram.data.length; rowIndex++) {
    const row = nonogram.data[rowIndex];
    const clueRow = [0];
    
    for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
      const cell = row[cellIndex];
      
      if (cell === 0 && clueRow[clueRow.length - 1] !== 0) {
        clueRow.push(0);
      }

      if (cell === 1) {
        clueRow[clueRow.length - 1]++;
      }
    }

    horizontalClues.push(clueRow.filter(item => item !== 0).reverse());
  }

  return horizontalClues;
}

const fillVerticalClueCells = (verticalClues) => {
  const maxCluesCount = verticalClues.reduce((maxCount, cluesColumn) => {
    return maxCount > cluesColumn.length ? maxCount : cluesColumn.length;
  }, 0);

  for (let rowIndex = 0; rowIndex < maxCluesCount; rowIndex++) {
    const row = createPreElement("tr", "table-row", table);
    clueTableRows.unshift(row);

    for (let index = 0; index < tableWidth; index++) {
      const verticalClueCell = createElement("th", "clue-cell clue-cell-vertical", row);
      const cellValue = verticalClues[index][rowIndex];

      if (cellValue) {
        verticalClueCell.textContent = cellValue;
      }
    }
  }
}

const fillHorizontalClueCells = (horizontalClues) => {
  const maxCluesCount = horizontalClues.reduce((maxCount, cluesColumn) => {
    return maxCount > cluesColumn.length ? maxCount : cluesColumn.length;
  }, 0);

  for (const clueRow of clueTableRows) {
    for (let index = 0; index < maxCluesCount; index++) {
      createPreElement("th", "clue-cell", clueRow);
    }
  }

  for (let rowIndex = 0; rowIndex < tableRows.length; rowIndex++) {
    const row = tableRows[rowIndex];

    for (let cellIndex = 0; cellIndex < maxCluesCount; cellIndex++) {
      const horizontalClueCell = createPreElement("th", "clue-cell clue-cell-horizontal", row);
      const cellValue = horizontalClues[rowIndex][cellIndex];

      if (cellValue) {
        horizontalClueCell.textContent = cellValue;
      }
    }
  }
}

createTable();
