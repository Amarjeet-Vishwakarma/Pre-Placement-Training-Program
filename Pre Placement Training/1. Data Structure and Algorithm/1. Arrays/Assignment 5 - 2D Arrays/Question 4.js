//  **Question 4**



// Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

// - answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
// - answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

// **Note** that the integers in the lists may be returned in **any** order.











// Solution




var findDifference = function(nums1, nums2) {
    let arr1 = [], arr2 = []; // initialize an empty array arr1 and arr2
    for(let i=0; i<nums1.length; i++){ // loop through the every element of array num1
        if(!nums2.includes(nums1[i])){ // if every element of num1 is not present in nums2
            arr1.push(nums1[i]); // then push the element of num1 in arr1
        }
    }
    for(let j=0; j<nums2.length; j++){ // loop through the every element of array num2
        if(!nums1.includes(nums2[j])){ // if every element of num2 is not present in nums1
            arr2.push(nums2[j]); // then push the element of num2 in arr1
        }
    }
    return [[...new Set(arr1)], [...new Set(arr2)]]; // return the unique element of arr1 and arr2 inside new array
};