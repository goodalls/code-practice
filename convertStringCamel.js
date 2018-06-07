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

console.log(toCamelCase("The-Stealth-Warrior"))//, "TheStealthWarrior"
console.log(toCamelCase("the-Stealth-Warrior"))//, "theStealthWarrior"
console.log(toCamelCase("A-B-C"))//, "ABC", 
console.log(toCamelCase("I-am-a-programmer"))//, "IAmAProgrammer")
console.log(toCamelCase("i-am-a-programmer"))//, "iAmAProgrammer")