// Input >> Output Examples
// 1- minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

function minSum(arr) {
  const sum = [];
  while (arr.length > 1) {
    const high = Math.max(...arr);
    const low = Math.min(...arr);
    const multiply = high * low
    sum.push(multiply)
    arr.splice(arr.indexOf(high), 1);
    arr.splice(arr.indexOf(low), 1);
  }
  return sum.reduce((a, b) => a + b, 0)
}

console.log(minSum([5, 4, 2, 3])) //, 22);
console.log(minSum([12, 6, 10, 26, 3, 24])) //, 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])) //, 74);