function toCamelCase(str){
  return str.split((/[ \-_]+/)).map((el, index)=>{
    if(index !== 0){
      let firstLetter = el.slice(0,1).toUpperCase()
      return firstLetter + el.slice(1)
    } else {
      return el
    }
  }).join('');
}

console.log(toCamelCase("The-Stealth-Warrior"))//, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("the-Stealth-Warrior"))//, "theStealthWarrior", "toCamelCase('the-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"))//, "ABC", "toCamelCase('A-B-C') did not return correct value")
console.log(toCamelCase("I-am-a-programmer"))//, "IAmAProgrammer")
console.log(toCamelCase("i-am-a-programmer"))//, "iAmAProgrammer")