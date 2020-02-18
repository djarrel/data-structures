function vowels(word){
     const vowel = word.match(/[aeiou]/gi)
     return vowel ? vowel.length : 0
 }
 console.log(vowels('coow'))

 function vowels(str){
     const read = str.search([/aeiou/gi]);
     return read;
 }
 console.log(vowels('coow'))

 function vowels(str) {
     let count = 0;
     const checker = ['a','e','i','o','u'];
     for (let char of str.toLowerCase()) {
         if (checker.includes(char)) {
             count++
         }
     }
     return count;
 }
 console.log(vowels('dooooog'))