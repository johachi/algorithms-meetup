function matrixRotater(matrix) {
  const rotatedMatrix = [];

  for (let x = 0; x < matrix[0].length; x++) {
    rotatedMatrix.push([]);
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      rotatedMatrix[y][matrix.length - 1 - x] = matrix[x][y];
    }
  }

  return rotatedMatrix;
}

module.exports = matrixRotater;
