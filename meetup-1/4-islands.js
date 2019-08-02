function countIslands(map) {
  let countedIslands = 0;

  const visitedTiles = [];
  for (let row = 0; row < map.length; ++row) {
    visitedTiles.push([]);

    const currentRow = map[row];
    for (let col = 0; col < currentRow.length; ++col) {
      visitedTiles[row].push(false);
    }
  }

  const visitTile = (row, col) => {
    const visitNeighbours = (row, col) => {
      if (row < 0 || col < 0) return;
      if (row >= map.length || col >= map[row].length) return;

      if (!visitedTiles[row][col]) {
        visitedTiles[row][col] = true;
        if (map[row][col] === 1) {
          visitNeighbours(row - 1, col);
          visitNeighbours(row + 1, col);
          visitNeighbours(row, col + 1);
          visitNeighbours(row, col - 1);
        }
      }
    };

    visitedTiles[row][col] = true;
    if (map[row][col] === 1) {
      countedIslands++;
      visitNeighbours(row - 1, col);
      visitNeighbours(row + 1, col);
      visitNeighbours(row, col + 1);
      visitNeighbours(row, col - 1);
    }
  };
  for (let row = 0; row < map.length; ++row) {
    const currentRow = map[row];
    for (let col = 0; col < currentRow.length; ++col) {
      visitedTiles[row][col] || visitTile(row, col);
    }
  }

  return countedIslands;
}

module.exports = countIslands;
