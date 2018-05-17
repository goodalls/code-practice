function persistence(num, count = 0) {
  const array = num.toString().split('')
  if (array.length === 1)
    return count
  count++
  const solution = array.reduce((acc, number) => number * acc, 1)
  return persistence(Number(solution), count)
}


console.log(persistence(39)) //,3);
console.log(persistence(4)) //,0);
console.log(persistence(25)) //,2);
console.log(persistence(999)) //,4);