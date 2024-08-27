function reverseString(s) {
  return s.split("").reverse().join("");
}

console.log(reverseString("hello"));

function reverseWords(d) {
  let str = d.split(" ");
  str.reverse();
  return str.join(" ");
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

function abc(s) {
  let str = s;
  str = str.split("").reverse().join("");
  return str;
}

const reversestr = abc("Ansari");
console.log(reversestr);
