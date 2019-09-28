// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function canJump(nums) {
  if (!nums.length) return false
  if (nums.length === 1) return true
  if (nums[0] === 0) return false

  let dp = new Array (nums.length).fill(0)

  for (let i = 0; i < nums.length - 1; i++) {
    if (i + nums[i] >= nums.length) return true
    if (nums[i] > 0) dp.fill(1, i, i + nums[i])
    if (dp[i] === 0 && nums[i] === 0) return false
  }
  return dp[nums.length - 2] > 0
}

console.log(canJump([2,3,1,1,4]))         // => return true
console.log(canJump([3,2,1,0,4]))         // => return false
console.log(canJump([3,0,0,0]))           // => return true
console.log(canJump([3,1,1,1,1,1,1,1]))   // => return true
console.log(canJump([0]))                 // => return true
console.log(canJump([1]))                 // => return true
console.log(canJump([1,2,3]))             // => return true
console.log(canJump([0,2,3]))             // => return false
console.log(canJump([1,0,2,3]))           // => return false
