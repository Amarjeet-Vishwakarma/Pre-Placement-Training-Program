// Question 8







// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:

// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.










// Solution





function minimumScore(nums, k) {
    let min_value = Infinity;
    for (let i = 0; i < nums.length; i++) {
      let potential_max = Math.max(...nums) - k;
      let potential_min = Math.min(...nums) + k;
      min_value = Math.min(min_value, potential_max - potential_min);
    }
    return min_value;
  }
  console.log(minimumScore([1], 0));
  



