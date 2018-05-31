//A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  const string = n.toString()
  if (string.length === 1) {
    return n
  }
  const sum = string.split('').reduce((acc, num) => acc += Number(num), 0)
  return digital_root(sum)
}