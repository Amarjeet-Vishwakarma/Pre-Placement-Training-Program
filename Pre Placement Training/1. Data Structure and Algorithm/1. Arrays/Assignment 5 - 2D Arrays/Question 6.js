
// **Question 6**



// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.
















// Solution



var findDuplicates = function(nums) {
    if(nums.length === 0) return [];
    var index, ans =[];
    for(var i = 0; i < nums.length; i++){
        index = Math.abs(nums[i]);
        if(nums[index-1] < 0){
            ans.push(index);
        } else {
            nums[index-1] *= -1;
        }
    }
    return ans;
};