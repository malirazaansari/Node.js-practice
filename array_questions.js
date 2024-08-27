function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return null;
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 26));

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "* ";
  console.log(str.repeat(i));
}

function printRightTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

printRightTriangle(5);

let t = 5;
let string = "";
for (let i = 1; i <= t; i++) {
  for (let j = 0; j < t - i; j++) {
    string += ".";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
