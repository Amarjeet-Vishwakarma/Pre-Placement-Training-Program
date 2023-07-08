// Question 1




// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).






// Solution





var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
let n = nums.length;
let closest_sum = nums[0] + nums[1] + nums[2]; // initialize closest sum
for (let i = 0; i < n - 2; i++) {
    let left = i + 1, right = n - 1;
    while (left < right) { // two-pointer approach
        let sum = nums[i] + nums[left] + nums[right];
        if (sum == target) { // sum equals target, return immediately
            return sum;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
        if (Math.abs(sum - target) < Math.abs(closest_sum - target)) { // update closest sum
            closest_sum = sum;
        }
    }
}
return closest_sum;

};
console.log(threeSumClosest([-1,2,1,-4], 1));