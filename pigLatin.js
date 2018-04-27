function pigIt(str){
  const array = str.split(' ')
  return array.map(word=>{
    return word.slice(1) + word[0] + 'ay'
  }).join(' ')
}

console.log(pigIt('Pig latin is cool'))//,'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'))//,'hisTay siay ymay tringsay')