function solution(matrix) {
  let matrixColumn = matrix.length;
  let matrixElementsRow = matrix[0].length;
  let sumMatrix = 0;
  
  for (let x = 0; x < matrixColumn; x++) {
    for (let y = 0; y < matrixElementsRow; y++) {
      
      if (matrix[y][x] === 0) {
        break;        
        }
      sumMatrix += matrix[x][y];
      }
      
    }
    return sumMatrix;
  }

  console.log(solution([[1, 0, 0, 2, 5], 
                        [0, 6, 0, 2, 1], 
                        [3, 2, 1, 3, 10]]));