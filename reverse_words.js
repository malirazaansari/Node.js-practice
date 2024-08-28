// function reverseString(s) {
//   return s.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// function reverseWords(d) {
//   let str = d.split(" ");
//   str.reverse();
//   return str.join(" ");
// }

// let d = "geeks for all";
// console.log(reverseWords(d));

// function isPalindrome(s) {
//   const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   return cleanedStr === cleanedStr.split("").reverse().join("");
// }

// console.log(isPalindrome("alioila"));

// function areAnagrams(s1, s2) {
//   const sortString = (str) => str.split("").sort().join("");
//   return sortString(s1) === sortString(s2);
// }

// // console.log(areAnagrams("listen", "silent"));  // Output: true
// console.log(areAnagrams("ali", "ila"));

// function abc(s) {
//   let str = s;
//   str = str.split("").reverse().join("");
//   return str;
// }

// const reversestr = abc("Ansari");
// console.log(reversestr);

// Javascript program to demonstrate functionality of map

// Declare a Dictionary
var my_dict = new Map();

// Adding Elements to the Dictionary
my_dict.set("key1", 1);
my_dict.set("key2", 2);
my_dict.set("key3", 3);
my_dict.set("key4", 4);

// Printing the Dictionary
console.log(my_dict);

// This code is contributed by Shubham Singh

const dictionary = {
  1: "Python",
  2: "C Language",
  3: "C++",
  4: "Java",
  5: ["OS", "DBMS", "CN", "DSA"],
};

// Printing the type:
console.log("Type is:", typeof dictionary);

// Printing the dictionary:
console.log(dictionary);

// Updating the value present at key-4:
dictionary[4] = "C#";

// Printing the updated dictionary:
console.log(dictionary);
