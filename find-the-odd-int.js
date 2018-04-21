function findOdd(A) {
  const reduce = A.reduce((acc, num) => {
    if (!acc[num]) {
      acc[num] = 0;
    }
    acc[num]++;
    return acc;
  }, {});
  return Number(Object.keys(reduce).find(key => reduce[key] % 2 !== 0));
}

function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

const findOdd = A => {
  const obj = {};
  A.forEach(num => (obj[num] ? obj[num]++ : (obj[num] = 1)));

  for (num in obj) {
    if (obj[num] % 2 !== 0) {
      return Number(num);
    }
  }
};