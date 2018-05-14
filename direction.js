function dirReduc(arr){
  const object = arr.reduce((acc, direction)=>{
  if (!acc[direction]){
    acc[direction] = 0
  }
  acc[direction]++
  return acc
  },{})
 }

