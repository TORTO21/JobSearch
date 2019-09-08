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

// naive approach
function reverse(x) {
  let sign = x < 0 ? "-" : ""
  let reversed = Math.abs(x).toString().split('').reverse().join('')
  if (Number(reversed) > 2**31-1) return 0
  return Number(sign + reversed)
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))

function reverseMod(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  
  let reversed = 0
  while (x !== 0) {
    reversed = (reversed + x % 10) * 10
    x = x / 10 | 0
  }
  reversed /= 10
  if (reversed > 2**31) return 0
  return isNegative ? -reversed : reversed
}

// const reverse = function(x) {
//   const isNegative = x < 0;
//   x = Math.abs(x);
//   let result = 0;
  
//   while (x) {
//     const digit = x % 10;
//     x = Math.floor(x / 10);
//     result = result * 10 + digit;
//   }
  
//   // restrict result to maintain settled overflow
//   if (result > 2**31) {
//     return 0;
//   }
  
//   return isNegative ? -result : result;
// };
console.log("===========")
console.log(reverseMod(123))
console.log(reverseMod(-123))
console.log(reverseMod(120))
console.log(reverseMod(-1))
console.log(reverseMod(429496729))


// class Solution {
//   public int reverse(int num) {
//      long revnum = 0;
//       while (num != 0) {
//         revnum = revnum * 10 + (num % 10);
//           if(revnum >= Integer.MAX_VALUE || revnum <= Integer.MIN_VALUE){
//               return 0;
//           }
//         num /= 10;
//       }
//       return (int) revnum;
//   }
// }