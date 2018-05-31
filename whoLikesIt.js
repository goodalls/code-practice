function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }
}


console.log(likes([])) //'no one likes this';
console.log(likes(['Peter'])) //, 'Peter likes this');
console.log(likes(['Jacob', 'Alex'])) //, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])) //, 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //, 'Alex, Jacob and 2 others like this')

function findOutlier(integers) {
  const odd = [];
  const even = [];
  integers.forEach(int => int % 2 === 0 ? even.push(int) : odd.push(int))
  return odd.length === 1 ? odd[0] : even[0]
}

console.log(findOutlier([0, 1, 2])) //, 1)
console.log(findOutlier([1, 2, 3])) //, 2)
console.log(findOutlier([2, 6, 8, 10, 3])) //, 3)
console.log(findOutlier([0, 0, 3, 0, 0])) //, 3)
console.log(findOutlier([1, 1, 0, 1, 1])) //), 0)