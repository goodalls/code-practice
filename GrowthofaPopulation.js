const nbYear = (p0, percent, aug, p) => {
  let year = 0;
  let pop = p0
  while (pop < p) {
    pop = pop + (pop * percent / 100 + aug)
    year++
  }
  return year
}

function LnbYear(p0, percent, aug, p) {
  if (p0 >= p) {
    return 0;
  } else {
    return 1 + LnbYear(p0 * (1 + percent / 100) + aug, percent, aug, p);
  }
}

console.log(nbYear(1500, 5, 100, 5000))//, 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000))//, 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000))//, 94);

console.log(LnbYear(1500, 5, 100, 5000))//, 15);
console.log(LnbYear(1500000, 2.5, 10000, 2000000))//, 10);
console.log(LnbYear(1500000, 0.25, 1000, 2000000))//, 94);