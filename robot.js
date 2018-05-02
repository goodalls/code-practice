//G instructs the robot forward one step.
//L Instructs the Robot to turn left.
//R Instructs the Robot to turn Right.

// The Robot performs the Robot in a command sequence in an infinite loop. You want to know wether or not the robot goes in some sort of circle such that the robot always moves within this circle.

//must return YES or NO if the robot follows a circle or not

// gr-->gr
//  |   |
// gr-->gr

const robot = (instructions) => {
  let x = 0;
  let y = 0;
  let direction = 'up';
  const constants = {
    up: {
      G: y++,
      L: direction = 'left',
      R: direction = 'right'
    },
    down: {
      G: y--,
      L: direction = 'right',
      R: direction = 'left'
    },
    right: {
      G: x++,
      L: direction = 'up',
      R: direction = 'down'
    },
    left: {
      G: x--,
      L: direction = 'down',
      R: direction = 'up'
    }
  }

  for (let i = 0; i < 1000; i++){
    const instructionsArray = instructions[0].split('');
    instructionsArray.forEach(instruction => {
  
      constants[direction][instruction];
    });

    console.log(`
    x = ${x}
    y = ${y}
    `);
    
    if (x === 0 && y === 0) return 'YES'
  }
  return 'NO'
};


console.log(robot(['GGGRGGG']))
console.log(robot(['GGGLLGGG']))
console.log(robot(['GR', 'GLR', 'GRLLRRGG', 'GRLRGRLRG', 'LGRGLGRGRGLGRGL']))

// a) If current direction is up, then ‘G’ increments y and doesn’t change x.
// b) If current direction is right, then ‘G’ increments x and doesn’t change y.
// c) If current direction is down, then ‘G’ decrements y and doesn’t change x.
// d) If current direction is left, then ‘G’ decrements x and doesn’t change y.

// a) If current direction is up, then ‘L’ changes direction to left and ‘R’ changes to right
// b) If current direction is right, then ‘L’ changes direction to up and ‘R’ changes to down
// c) If current direction is down, then ‘L’ changes direction to right and ‘R’ changes to left
// d) If current direction is left, then ‘L’ changes direction to down and ‘R’ changes to up.