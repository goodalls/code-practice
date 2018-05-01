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

function validParentheses(parens) {
  const stack = [];
  parens.split('').forEach(el => {
    if (el === '(') {
      stack.push(el)
    }
    if (el === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    }
    else if (el === ')' && !stack.length) {
      stack.push(el)
    }
  })
  return stack.length ? false : true
}

console.log(paren('(())()')) // true
console.log(paren('()(()))')) // false
console.log(paren('))((')) // false

console.log(validParentheses("()"))//, true)
console.log(validParentheses("())"))//, false);
console.log(validParentheses('(())()')) // true
console.log(validParentheses('()(()))')) // false
console.log(validParentheses('))((')) // false