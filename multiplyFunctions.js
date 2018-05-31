const make = (num, func) {
  func ? num : func(num)
}
const zero = (func) => make(0, func)
const one = (func) => make(1, func)
const two = (func) => make(2, func)
const three = (func) => make(3, func)
const four = (func) => make(4, func)
const five = (func) => make(5, func)
const six = (func) => make(6, func)
const seven = (func) => make(7, func)
const eight = (func) => make(8, func)
const nine = (func) => make(9, func)

const plus = (func) =>
  const minus = (func) =>
    const times = (func) =>
      const dividedBy = (func) =>

        console.log(seven(times(five())) //, 35);
          console.log(four(plus(nine())) //, 13);
            console.log(eight(minus(three())) //, 5);
              console.log(six(dividedBy(two())) //, 3);