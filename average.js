function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a, b) => a + b, 0) / classPoints.length <= yourPoints
}


console.log(betterThanAverage([2, 3], 5))//, true);
console.log(betterThanAverage([2, 3, 5, 10, 1, 2, 6, 8, 10], 5))//, false);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))//, true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 40))//, false);
