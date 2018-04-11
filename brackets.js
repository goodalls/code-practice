function brackets(string) {
  let brackets = []
  string.split('').forEach((item)=>{
    
      if (item === '('||item === '{'|| item === '['||item === ')'||item === '}'|| item === ']'){
        brackets.push(item)
      }
  })
  console.log(brackets)
  brackets.forEach((elem, index, array)=>{
    if(elem === '(') {
     let remove = brackets.indexOf(')')
     if(remove !== '-1'){
       array.splice(remove); 
       array.splice(index);
     }
    }
     if(elem === '{') {
     let remove = brackets.indexOf('}')
     if(remove !== '-1'){
       array.splice(remove); 
       array.splice(index);
       
     }
    }
     if(elem === '[') {
     let remove = brackets.indexOf(']')
     if(remove !== '-1'){
       array.splice(remove); 
       array.splice(index);
       
     }
    }
  })
  console.log(brackets)
  if(!brackets.length) {
    return true
  }
  return false
}

brackets('{]')