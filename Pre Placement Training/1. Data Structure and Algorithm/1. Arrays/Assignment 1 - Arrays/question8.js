// Question 8





// 💡 You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// **Example 1:**
// Input: nums = [1,2,2,4]
// Output: [2,3]

















// Solution




var findErrorNums = function(nums) {
    let N = nums.length, dupe, sum = N * (N + 1) / 2,
       seen = new Uint8Array(N+1)
   for (let i = 0; i < N; i++) {
       let num = nums[i]
       sum -= num
       if (seen[num]) dupe = num
       seen[num]++
   }
   return [dupe, sum + dupe]
};
console.log(findErrorNums([1,2,2,4]));