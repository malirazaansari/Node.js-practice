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
console.log(twoSum([2, 7, 11, 15], 26)); // Output: [0, 1]
