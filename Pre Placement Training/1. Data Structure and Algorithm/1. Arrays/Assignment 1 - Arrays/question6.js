// Question 6




// 💡 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]

// Output: true










// Solution





var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};
console.log(containsDuplicate([1,2,3,1]));