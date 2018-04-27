function songDecoder(song) {
  const solution = [...song];
 
 for (let i = 0; i<solution.length; i++) {
   if(solution[i] === 'W' && solution[i+1] === 'U' && solution[i+2] === 'B') {
     console.log('wub trigered');
     solution.splice(i, 3)
   } 
 }
 return solution
}


console.log(songDecoder("AWUBBWUBC")) // "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC")) // "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB")) // "A B C","heading or trailing spaces should be removed");