// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

function order(words) {
  if (!words) {
    return ''
  }
  const object = words.split(' ').reduce((acc, word) => {
    let order = word.match(/\d+/)[0];
    if (!acc[order]) {
      acc[order] = word
    }
    return acc
  }, {})
  return Object.keys(object).map((key, index) => object[key]).join(' ');
}

console.log(order("is2 Thi1s T4est 3a")) //, "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //, "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) //, ""