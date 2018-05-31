function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(oneWord => {
    return word == oneWord.split('').sort().join('');
  });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])) // => []