

//  **Question 5**




// Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.















// Solution





var findTheDistanceValue = function(arr1, arr2, d) {
    arr1.sort((a,b)=>a-b); arr2.sort((a,b)=>a-b);
   let l=r=0, count=0;
   for(let i=0; i<arr1.length; i++){
       // l: first index IN the LB.
       while(arr2[l]<arr1[i]-d){l++};
       // r: first index OUT of UB.
       while(arr2[r]<=arr1[i]+d){r++};
       count+=(r==l);
   }
   return count;
};