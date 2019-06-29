const findShort = (s) => s.split(' ').sort((a,b) => a.length - b.length)[0].length

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))//.., 3);
console.log(findShort("hello world this is a wonderful place"))//.., 1);
console.log(findShort("turns out random test cases are easier than writing out basic ones"))//, 3); 
console.log(findShort("how now brown cow"))//, 3); 
