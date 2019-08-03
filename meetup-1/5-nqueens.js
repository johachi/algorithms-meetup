function nQueens(numberOfTiles) {
  if (numberOfTiles < 3)
    throw new Error(
      "ERROR! nQueens.js: nQueens() can only be called with argument bigger than 3."
    );

  if (numberOfTiles < 5) return numberOfTiles - 1;

  const queensOnBottom = Math.ceil(numberOfTiles / 2);
  const queensOnTop = Math.floor(numberOfTiles / 2);

  return queensOnBottom + queensOnTop;
}

module.exports = nQueens;
