// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

function findEvenIndex(arr) {
  const map = arr.map((ele, index, array) => {
    const left = array.slice(0, index + 1).reduce((a, b) => a + b, 0);
    const right = array.slice(index).reduce((a, b) => a + b, 0);
    if (left === right) {
      return index
    };
  })
  return map.filter(Boolean).pop() || -1
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) //, 3, 
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) //, 1, 
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) //, -1, 
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])) //, 3,