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

const gameOfLife = (board = null) => {
//Base Case
if (board === newBoard){
  return console.log(complete)
}
  // should be class??

  //should be a method of class
  if(board) {
    let board = [];
  for(let i = 0; i < 100; i++) {
    let random = Math.round(Math.random())
    board.push(random?'X':'O')
  }
}
//iterate over board elements following rules until nothing changes in the board anymore.
//run rules to create new board 


//return board in a grid to dispaly in terminal
console.log(newBoard)

return gameOfLife(newBoard)

}

console.log(gameOfLife())
