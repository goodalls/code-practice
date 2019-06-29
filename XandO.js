const XO = (str) => {
  const reduced = str.toLowerCase().split('')
  .reduce((acc, val) => {
      if (val === 'o' && !acc['o']) {
        acc['o'] = 1
      } else if (val === 'o') {
        acc['o'] = acc['o'] + 1
      }
      if (val === 'x' && !acc['x']){
        acc['x'] = 1
      } else if (val === 'x') {
        acc['x'] = acc['x'] + 1
      };
    
    return acc;
  }, {})
  if (reduced.x === reduced.o){
    return true
  } else {
    return false
  }
}

const XXOO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO('xo'))//,true));
console.log(XO("xxOo"))//,true));
console.log(XO("xxxm"))//false));
console.log(XO("Oo"))//false));
console.log(XO("ooom"))//false));

console.log(XXOO('xo'))//,true));
console.log(XXOO("xxOo"))//,true));
console.log(XXOO("xxxm"))//false));
console.log(XXOO("Oo"))//false));
console.log(XXOO("ooom"))//false));