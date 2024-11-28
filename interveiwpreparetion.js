const { result } = require("lodash");

let arr = [2, 9, 11, 15];
let target = 11;

// function twosum(array, target) {
//   arr = array;
//   n = target;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (n === arr[j] + arr[i]) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twosum(arr, target));

// function twosum2(arr, target) {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const com = target - arr[i];
//     if (com in map) {
//       return [map[com], i];
//     }
//     map[arr[i]] = i;
//   }
//   return null;
// }

// console.log(twosum2(arr, target));

arr = [2, 4, 5, 3, 4, 1];
function duplicating(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(duplicating(arr));

// function sorting(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// // }
// function sorting(arr) {
//   return [new Set(arr)];
//   // return arr.sort((a, b) => b - a);
// }

// console.log(sorting(arr));

// function removeDuplicates(arr) {
//   const seen = {};
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       result.push(arr[i]);
//       seen[arr[i]] = true;
//     }
//   }

//   return result;
// }

// // Test
// const numbers = [1, 2, 2, 3, 4, 6, 4, 5];
// console.log(removeDuplicates(numbers));
