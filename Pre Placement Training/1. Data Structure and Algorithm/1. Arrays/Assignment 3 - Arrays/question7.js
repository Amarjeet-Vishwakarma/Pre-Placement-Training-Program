// Question 7










// You are given an inclusive range [lower, upper] and a sorted unique integer array
// nums, where all elements are within the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in
// nums.

// Return the shortest sorted list of ranges that exactly covers all the missing
// numbers. That is, no element of nums is included in any of the ranges, and each
// missing number is covered by one of the ranges.

// Example 1:
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

// Explanation: The ranges are:
// [2,2]
// [4,49]
// [51,74]
// [76,99]










// Solution








function findMissingRanges(nums, lower, upper) {
    const ranges = [];
  
    // Helper function to add range to the result
    const addRange = (start, end) => {
      ranges.push([start, end]);
    };
  
    // Check for missing ranges before the first number
    if (lower < nums[0]) {
      addRange(lower, nums[0] - 1);
    }
  
    // Check for missing ranges between consecutive numbers
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 1) {
        addRange(nums[i - 1] + 1, nums[i] - 1);
      }
    }
  
    // Check for missing ranges after the last number
    if (nums[nums.length - 1] < upper) {
      addRange(nums[nums.length - 1] + 1, upper);
    }
  
    return ranges;
  }
console.log(findMissingRanges([0,1,3,50,75],0,99));
 
  