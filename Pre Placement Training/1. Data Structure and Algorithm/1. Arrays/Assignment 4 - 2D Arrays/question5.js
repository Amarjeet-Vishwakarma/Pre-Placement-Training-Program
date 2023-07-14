
// Question 5



// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.











// Solution


var arrangeCoins = function(n) {
    let count=0;
    while(n>=count){
        n -= count;
        count++;
    }
    return count-1;
};