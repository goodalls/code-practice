
const findSmallestInt = (args) => {
    return Math.min(...args)
  }

const findSmallestIntSort = (args) => {
  let sort = args.sort((a,b) => a-b)
  return sort[0];
}
console.log('------------------------------------')
  console.log(findSmallestInt([78,56,232,12,8]))//8
  console.log(findSmallestInt([78,56,232,12,18]))//12
  console.log(findSmallestInt([78,56,232,412,228]))//56
  console.log(findSmallestInt([78,56,232,12,0]))//0
  console.log(findSmallestInt([1,56,232,12,8]))//1
 console.log('------------------------------------')
  console.log(findSmallestIntSort([78,56,232,12,8]))//8
  console.log(findSmallestIntSort([78,56,232,12,18]))//12
  console.log(findSmallestIntSort([78,56,232,412,228]))//56
  console.log(findSmallestIntSort([78,56,232,12,0]))//0
  console.log(findSmallestIntSort([1,56,232,12,8]))//1
console.log('------------------------------------')