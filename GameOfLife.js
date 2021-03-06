/*
The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbors dies, as if by under population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by overpopulation.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

O=Dead
X=Alive
*/

const gameOfLife = (board = undefined, generation = 0) => {
  generation++
  //Base Case
  if (generation === 100) {
    return console.log('complete')
  }
  // if board doesn't exist
  if (board === undefined) {
    let array = [];
    for (let i = 0; i < 100; i++) {
      let random = Math.round(Math.random())
      array.push(random ? 'X' : 'O')
    }
    board = array
  }
  //iterate over board elements following rules until nothing changes in the board anymore.
  //run rules to create new board 
  newBoard = board.map((cell, index) => {
    let count = countOf(index, board)

    if (count === 3) {
      return 'X'
    }

    if (cell === 'X') {
      if (count < 2) {
        return 'O'
      }
      if (count === 2) {
        return 'X'
      }
      if (count > 3) {
        return 'O'
      }
    } else {
      return cell
    }

  });
  //return board in a grid to display in terminal
  console.log(displayBoard(newBoard))

  return gameOfLife(newBoard, generation)
}

const countOf = (index, board) => {
  let neighbors = 0
  if (board[index - 1] === 'X') {
    neighbors++
  }
  if (board[index + 1] === 'X') {
    neighbors++
  }
  if (board[index - 11] === 'X') {
    neighbors++
  }
  if (board[index - 10] === 'X') {
    neighbors++
  }
  if (board[index - 9] === 'X') {
    neighbors++
  }
  if (board[index + 9] === 'X') {
    neighbors++
  }
  if (board[index + 10] === 'X') {
    neighbors++
  }
  if (board[index + 11] === 'X') {
    neighbors++
  }
  console.log(neighbors);
  return neighbors;
}

const displayBoard = (array) => {
  var results = [];
  while (array.length) {
    results.push([array.splice(0, 10).join('')]);
  }
  return results;
}

console.log(gameOfLife())