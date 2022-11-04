function solution(matrix) {
  let matrixColumn = matrix.length;
  let matrixElementsRow = matrix[0].length;
  let sumMatrix = 0;
  for (let x = 0; x < matrixColumn; x++) {
    for (let y = 0; y < matrixElementsRow; y++) {
      if (x == 0 && matrix[x][y] != 0) {
        console.log("Somou " + matrix[x][y]);
        sumMatrix += matrix[x][y];
      }
      if (x >= 2 && matrix[x - 1][y] == 0){
        console.log("Subtraiu " + matrix[x][y]);
        sumMatrix -= matrix[x][y];
      }
    }
  }
  return sumMatrix;
}