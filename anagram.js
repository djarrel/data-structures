 function anagram(string1, string2){
   let word1 = string1.toLowerCase().split('').sort().join('').trim();
  let  word2 = string2.toLowerCase().split('').sort().join('').trim();

 if (word1 === word2) {
     return true;
 } else {
     return false;
 }
 }

 console.log(anagram('sile','listen'))

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str) {
//     return str
//     .replace(/^W/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join()
// }



function anagrams(stringA, stringB){

    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
     for (let char in aCharMap) {
         if (aCharMap[char] !== bCharMap[char]) {
             return false;
         }
     }
     return true;
}
function buildCharMap(str) {
        const charMap = {};
    for (let char of str.replace(/^W/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}
anagrams('silent', 'listen')
console.log(anagrams('silent', 'listen'))

