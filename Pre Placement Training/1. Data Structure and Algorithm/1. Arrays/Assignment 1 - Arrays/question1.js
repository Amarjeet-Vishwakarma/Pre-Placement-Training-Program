// Question 1


//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**

// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][












//  Solution



var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++){
        let index = nums.findIndex(item => item === target - nums[i])
        if(index != -1 && index != i){
            return [i , index]
        }
    }
};
console.log(twoSum([2,7,11,15], 9));