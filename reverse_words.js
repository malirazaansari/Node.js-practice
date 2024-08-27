// function reverse(s, begin, end) {
//   while (begin < end) {
//     let charArray = [...s];
//     let temp = charArray[begin];
//     charArray[begin] = charArray[end];
//     charArray[end] = temp;
//     begin++;
//     end--;
//     s = charArray.join("");
//   }
//   return s;
// }

// function reverseWords(s) {
//   let word_begin = -1;

//   let i = 0;

//   while (i < s.length) {
//     if (word_begin == -1 && s[i] != " ") {
//       word_begin = i;
//     }
//     if (word_begin != -1 && (s[i + 1] == " " || i + 1 == s.length)) {
//       s = reverse(s, word_begin, i);
//       word_begin = -1;
//     }
//     i++;
//   }
//   s = reverse(s, 0, s.length - 1);
//   return s;
// }

// let s = "i like this program not very much";

// s = reverseWords(s);
// console.log(s);

function reverseString(s) {
  return s.split("").reverse().join("");
}

console.log(reverseString("hello"));

function reverseWords(d) {
  let str = d.split(" ");
  str.reverse();
  return str.join(" ");
  //  d.split("").reverse().join("");
}

let d = "geeks for all";
console.log(reverseWords(d));

function isPalindrome(s) {
  const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("alioila"));

function areAnagrams(s1, s2) {
  const sortString = (str) => str.split("").sort().join("");
  return sortString(s1) === sortString(s2);
}

// console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("ali", "ila"));
