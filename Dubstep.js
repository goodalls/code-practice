function songDecoder(song){
  const array = song.split('');
  const filter = array.forEach((letter, index)=>{
  if (letter === 'W' || index+1 === 'U' || index+2 === 'B') {
    array.splice(index, 3, ' ');
  } else {
  return letter
  }
  })
  const solution = array.filter(letter=>letter.trim())
  return solution.join('').trim()
}


console.log(songDecoder("AWUBBWUBC"))// "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))// "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB"))// "A B C","heading or trailing spaces should be removed");
