// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let sign = x < 0 ? "-" : ""
  let reversed = Math.abs(x).toString().split('').reverse().join('')
  if (Number(reversed) > Infinity) return 0
  return Number(sign + reversed)
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))