

//  **Question 7**



// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return *the number of maximum integers in the matrix after performing all the operations*













// Solution



var maxCount = function(m, n, ops) {
    var min_row = m;
    var min_col = n;
    for (let i=0; i<ops.length; i++){
        if (ops[i][0]<min_row) min_row=ops[i][0];
        if (ops[i][1]<min_col) min_col=ops[i][1];
    }        
    return min_row*min_col;
};