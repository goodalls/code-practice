function dirReduc(arr) {
  var opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  };
  return arr.reduce((acc, direction) => {
   if (acc[acc.length -1] === opposite[direction])
    acc.pop()
    else
    acc.push(direction)
    return acc;
  }, []);
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //, ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) //, ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) //, [])