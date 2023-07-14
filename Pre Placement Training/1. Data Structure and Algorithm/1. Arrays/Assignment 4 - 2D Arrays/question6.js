
// Question 6


// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.














// Solution




var sortedSquares = function(nums) {
    
    let output = [];
  for (let i = 0; i < nums.length; i++) {
    let squr = nums[i] * nums[i];
    output.push(squr);
  }
  output.sort((a, b) => a - b);
  return output;
};