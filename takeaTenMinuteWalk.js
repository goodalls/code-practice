function isValidWalk(walk) {
  let distance = 0
  walk.forEach(v => {
    switch (v) {
      case 'n': distance++
        break
      case 's': distance--
        break
      case 'e': distance++
        break
      case 'w': distance--
        break
    }
  })
  return distance === 0 && walk.length === 10
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))//, 'should return true');
console.log(isValidWalk(['e','w','e','w','w','e','e','e','w','w']))//, 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))//, 'should return false');
console.log(isValidWalk(['w']))//, 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))// 'should return false');
