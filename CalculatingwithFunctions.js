const zero = (f) => !f ? 0 : Math.floor(eval(0 + f[1] + f[0]))
const one = (f) => !f ? 1 : Math.floor(eval(1 + f[1] + f[0]))
const two = (f) => !f ? 2 : Math.floor(eval(2 + f[1] + f[0]))
const three = (f) => !f ? 3 : Math.floor(eval(3 + f[1] + f[0]))
const four = (f) => !f ? 4 : Math.floor(eval(4 + f[1] + f[0]))
const five = (f) => !f ? 5 : Math.floor(eval(5 + f[1] + f[0]))
const six = (f) => !f ? 6 : Math.floor(eval(6 + f[1] + f[0]))
const seven = (f) => !f ? 7 : Math.floor(eval(7 + f[1] + f[0]))
const eight = (f) => !f ? 8 : Math.floor(eval(8 + f[1] + f[0]))
const nine = (f) => !f ? 9 : Math.floor(eval(9 + f[1] + f[0]))

const plus = (f) => [f, '+']
const minus = (f) => [f, '-']
const times = (f) => [f, '*']
const dividedBy = (f) => [f, '/']

console.log(seven(times(five())))//, 35);
console.log(four(plus(nine())))//, 13);
console.log(eight(minus(three())))//, 5);
console.log(six(dividedBy(two())))//, 3);)//