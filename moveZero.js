var moveZeros = function (arr) {
  const zeros = [];
  const numbers = arr.filter(el => {
    if (el === 0) {
      zeros.push(el);
    } else {
      return JSON.stringify(el);
    }
  });
  return [...numbers, ...zeros];
};

const moveZero = arr => {
  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
};



console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
console.log(moveZero([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]