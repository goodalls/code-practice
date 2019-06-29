function isIsogram(str) {
  const isDup = str.toLowerCase().split('').reduce((acc, val) => {
    if (acc[val]) (
      acc[val] = acc[val] + 1
    )

    if (!acc[val]) {
      acc[val] = 1
    }
    return acc
  }, {})
  return Object.values(isDup).filter(v => v > 1).length < 1
}

console.log( isIsogram("Dermatoglyphics"))//, true );
console.log( isIsogram("isogram"))//, true );
console.log( isIsogram("aba"))//, false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"))//, false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"))//, false );
console.log( isIsogram(""))//, true, "an empty string is a valid isogram" );