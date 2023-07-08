// Question 5



// 💡 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// **Example 1:**
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// **Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

















// Solution





var merge = function(nums1, m, nums2, n) {
    // Initialize i and j to store indices of the last element of 1st and 2nd array respectively...
   let i = m - 1 , j = n - 1;
   // Initialize a variable k to store the last index of the 1st array...
   let k = m + n - 1;
   // Create a loop until either of i or j becomes zero...
   while(i >= 0 && j >= 0) {
       if(nums1[i] >= nums2[j]) {
           nums1[k] = nums1[i];
           i--;
       } else {
           nums1[k] = nums2[j];
           j--;
       }
       k--;
   // Either of i or j is not zero, which means some elements are yet to be merged.
   // Being already in a sorted manner, append them to the 1st array in the front.
   }
   // While i does not become zero...
   while(i >= 0)
       nums1[k--] = nums1[i--];
   // While j does not become zero...
   while(j >= 0)
       nums1[k--] = nums2[j--];
   // Now 1st array has all the elements in the required sorted order...
   return;
};
 
