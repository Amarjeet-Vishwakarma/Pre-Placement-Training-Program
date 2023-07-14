
// **Question 8**



// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.
















// Solution




var findOriginalArray = function(changed) {
    changed = changed.sort(function(a, b) {
       return a - b;
   });

   let hash = {};
   let cnt = 0;
   let ans = [];

   // counting occurrence of the number
   for (let i = 0; i < changed.length; i++) {
       hash[changed[i]] = hash[changed[i]] ? hash[changed[i]] + 1 : 1;
   }

   for (let i = 0; i < changed.length; i++) {

       // if we have zero in the changed array
       if (changed[i] === 0 && hash[changed[i]] > 1) {
           cnt++;
           hash[changed[i]] -= 2;
           ans.push(changed[i]);
       }

       // if we don't have zero
       if (hash[changed[i]] > 0 && hash[changed[i] * 2] > 0 && changed[i] !== 0) {
           cnt++;
           ans.push(changed[i]);
           hash[changed[i]] -= 1;
           hash[changed[i] * 2] -= 1;
       }

       // checking doubled array size divide by 2 to find original size
       if (cnt === changed.length / 2) {
           return ans;
       }
   }

   // original array not found
   return [];
};