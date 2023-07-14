










// Question 3


// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.











// Solution





var transpose = function(matrix) {
    let m = matrix.length;
let n = matrix[0].length;
let arr = [];
for(let i = 0; i < n; i++) {
    arr[i] = [];
    for(let j = 0; j < m; j++) {
        arr[i][j] = matrix[j][i]; 
    }
}
return arr;
};
