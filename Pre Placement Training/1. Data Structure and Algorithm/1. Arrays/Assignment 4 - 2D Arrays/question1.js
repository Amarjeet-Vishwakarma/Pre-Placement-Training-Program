//  **Question 1**




// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.










// Solution








function commonElements(arr1, arr2, arr3) {
    let p1 = 0, p2 = 0, p3 = 0;
    const result = [];
  
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
      if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
        result.push(arr1[p1]);
        p1++;
        p2++;
        p3++;
      } else if (arr1[p1] < arr2[p2]) {
        p1++;
      } else if (arr2[p2] < arr3[p3]) {
        p2++;
      } else {
        p3++;
      }
    }
  
    return result;
  }
console.log(commonElements( [1,2,3,4,5],  [1,2,5,7,9], [1,3,4,5,8]));  