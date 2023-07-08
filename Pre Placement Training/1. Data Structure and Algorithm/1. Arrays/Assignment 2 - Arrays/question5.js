// Question 5





// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6









// Solution





var maximumProduct = function(nums) {
    nums = nums.sort((a,b) => b-a)
    return Math.max(nums[0]*nums[1]*nums[2], nums[nums.length-1]*nums[nums.length-2]*nums[0])
};
console.log(maximumProduct([1,2,3]));