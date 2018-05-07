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
      G: (() => y += 1)(),
      L: (() => direction = 'left')(),
      R: (() => direction = 'right')()
    },
    down: {
      G: (() => y += -1)(),
      L: (() => direction = 'right')(),
      R: (() => direction = 'left')()
    },
    right: {
      G: (() => x += 1)(),
      L: (() => direction = 'up')(),
      R: (() => direction = 'down')()
    },
    left: {
      G: (() => x += -1)(),
      L: (() => direction = 'down')(),
      R: (() => direction = 'up')()
    }
  }
  
  if (count > 2 && x === 0 && y === 0) {
    return 'YES'
  }
  if (count >= 1000) {
    return 'NO'
  }

  const array = instructions.split('');
  array.forEach((el)=>{
    const currentDirection = direction
    if (el === 'L' || el === 'R') {
      direction = constants[currentDirection][el]
    }
    if (el === 'G') {

    }
  })
  
  count++
  console.log(`
  x = ${x}
  y = ${y}
  count = ${count}
  direction = ${direction}
  `);
  
  return robot(instructions, x, y, count, direction)
};


console.log(robot('GGGRGGG'))
console.log(robot('GGGLLGGG'))//yes
console.log(robot('GLGRG'))//no
console.log(robot('GR'))
console.log(robot('GLR'))
console.log(robot('GRLLRRGG'))
console.log(robot('GRLRGRLRG'))
console.log(robot('LGRGLGRGRGLGRGL'))
