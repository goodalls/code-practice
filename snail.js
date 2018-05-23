
/*

Snail Sort

 Given an `n x n` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

 ```
 array = [[1,2,3],
 [4,5,6],
 [7,8,9]]
 snail(array) #=> [1,2,3,6,9,8,7,4,5]
 ```

 For better understanding, please follow the numbers of the next array consecutively:

 ```
 array = [[1,2,3],
 [8,9,4],
 [7,6,5]]
 snail(array) #=> [1,2,3,4,5,6,7,8,9]
 ```

 This image will illustrate things more clearly:

 <img src="http://www.haan.lu/files/2513/8347/2456/snail.png" />

 NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
 */

 const snail = (array) => {

  let solution = [];

  while (array.length) {
    //top row
    solution.push(...array.shift());
    //rightside row
    array.forEach(arr=>solution.push(...arr.splice(-1)));
    //bottom row
    // solution.push(...array.pop()||[].reverse());
    solution.push(...array.slice(-1)||[].reverse());
    //leftside
    // array.forEach(arr=>solution.push(...arr.splice(0)));
    for (let i = array.length-1; i >= 0; i--) {
      solution.push(...array[i].splice(0))
    }
  }
  return solution
 }

// const snail = (array) => {
//   let result = [];

//   while (array.length) {

//     // Steal the first row
//     result = [...result, ...array.shift()];

//     // Steal the right items
//     for (let i = 0; i < array.length; i++) {
//       result.push(array[i].pop());
//     }

//     // Steal the bottom row
//     // result = result.concat((array.pop() || []).reverse());
//     result = [...result, ...array.pop()||[].reverse()]
//     // Steal the left items
//     for (let i = array.length - 1; i >= 0; i--) {
//       result.push(array[i].shift());
//     }
//   }
//   return result;
// }

console.log(snail([[]]))//, []);

console.log(snail([[1]]))//, [1]);

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))//, [1, 2, 3, 6, 9, 8, 7, 4, 5]);

console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))//, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);