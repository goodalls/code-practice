function brackets(string) {
  let brackets = []
  string.split('').forEach((item) => {

    if (item === '(' || item === '{' || item === '[' || item === ')' || item === '}' || item === ']') {
      brackets.push(item)
    }
  })
  console.log(brackets)
  brackets.forEach((elem, index, array) => {
    if (elem === '(') {
      let remove = brackets.indexOf(')')
      if (remove !== '-1') {
        array.splice(remove, 1);
        array.splice(index, 1);
      }
    }
    if (elem === '{') {
      let remove = brackets.indexOf('}')
      if (remove !== '-1') {
        array.splice(remove, 1);
        array.splice(index, 1);

      }
    }
    if (elem === '[') {
      let remove = brackets.indexOf(']')
      if (remove !== '-1') {
        array.splice(remove, 1);
        array.splice(index, 1);

      }
    }
  })
  console.log(brackets)
  if (!brackets.length) {
    return true
  }
  return false
}

console.log(brackets('{]'));