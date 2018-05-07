//G instructs the robot forward one step.
//L Instructs the Robot to turn left.
//R Instructs the Robot to turn Right.

// The Robot performs the Robot in a command sequence in an infinite loop. You want to know wether or not the robot goes in some sort of circle such that the robot always moves within this circle.

//must return YES or NO if the robot follows a circle or not

// gr-->gr
//  |   |
// gr-->gr

const robot = (instructions, x = 0, y = 0, count = 0, direction = 'up') => {
  const constants = {
    up: {
      G: 1, //y
      L: 'left',
      R: 'right'
    },
    down: {
      G: -1, //y
      L: 'right',
      R: 'left'
    },
    right: {
      G: 1, // x
      L: 'up',
      R: 'down'
    },
    left: {
      G: -1, // x
      L: 'down',
      R: 'up'
    }
  }

  //Base Case
  if (count > 1 && x === 0 && y === 0) {
    return 'YES'
  }
  if (count >= 1000) {
    return 'NO'
  }

  const array = instructions.split('');
  array.forEach((instruction) => {
    const currentDirection = direction
    if (instruction === 'L' || instruction === 'R') {
      direction = constants[currentDirection][instruction]
    }
    if (instruction === 'G') {
      if (currentDirection === 'up' || currentDirection === 'down') {
        y += constants[currentDirection][instruction]
      }
      if (currentDirection === 'left' || currentDirection === 'right') {
        x += constants[currentDirection][instruction]
      }
    }
  })
  count++
  return robot(instructions, x, y, count, direction)
};


console.log(robot('GGGRGGG')) //yes
console.log(robot('GGGLLGGG')) //yes
console.log(robot('GLGR')) //no
console.log(robot('GR')) //yes
console.log(robot('GL')) //yes
console.log(robot('LGRG')) //no
console.log(robot('GRLLRRGG')) //yes
console.log(robot('GRLRGRLRG')) //yes
console.log(robot('LGRGLGRGRGLGRGL')) //no