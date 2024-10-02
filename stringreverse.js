// function reverseWordsInString(str) {
//   // Split the string into an array of words
//   let words = str.split(" ");

//   // Reverse each word in the array
//   let reversedWords = words.map((word) => {
//     return word.split("").reverse().join("");
//   });

//   // Join the reversed words back into a sentence
//   return reversedWords.join(" ");
// }

// let input = "What Is This Shit";
// let output = reverseWordsInString(input);

// console.log(output);

function reverseWordsWithCase(str) {
  let words = str.split(" ");

  let reversedWords = words.map((word) => {
    let reversed = word.split("").reverse().join("");
    return reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
  });

  return reversedWords.join(" ");
}

let input = "What Is This Shit";
let output = reverseWordsWithCase(input);

console.log(output);
