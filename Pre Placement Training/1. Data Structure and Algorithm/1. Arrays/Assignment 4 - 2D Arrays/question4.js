// Question 4



// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.










// Solution



var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b)
  var sum = 0
  for(var i = 0; i<nums.length; i+= 2){
      sum += nums[i]
  }
  return sum
};