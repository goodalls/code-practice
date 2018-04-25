const paren = (string) => {
  const solution = string.split('');
  const stack = [];
  const opening = ['(', '{', '['];
  const closing = [')', '}', ']'];

  solution.forEach(item => {
    if (opening.indexOf(item) !== -1) {
      stack.push(item)
    }
    if (closing[closing.indexOf(item)] !== -1) {
      if (stack[stack.length - 1] === closing[closing.indexOf(item)]) {
        stack.pop()
      }
    }
  });
  return stack.length === 0
}

console.log(paren('(())()')) // true
console.log(paren('()(()))')) // false
console.log(paren('))((')) // false