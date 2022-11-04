const matrix2 = [[1, 0, 0, 2, 5], 
                 [0, 6, 0, 2, 1], 
                 [3, 2, 1, 3, 10]];

function solution(matrix) {

  let matrixRows = matrix.length;
  let matrixColumns = matrix[0].length;
  let sumMatrix = 0;

  console.log("Número de colunas: "+matrixColumns);
  console.log("Número de linhas: "+matrixRows);


  for (var x = 0; x < matrixColumns; x++) {
    for (var y = 0; y < matrixRows; y++) {
      
      if (matrix[y][x] === 0) {
        break;
      }
      
      sumMatrix += matrix[y][x];
      }
      
    }
    return sumMatrix;
  }

  console.log(solution(matrix2));