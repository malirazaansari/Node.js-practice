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
