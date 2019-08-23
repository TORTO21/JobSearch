// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false

  charCts = {}
  for (let char of s) {
    if (charCts[char]) charCts[char]++
    else charCts[char] = 1
  }
  for (let char of t) {
    if (charCts[char]) charCts[char]--
    else return false
  }
  return true
};

console.log(isAnagram("happy", "happy"))      // => true
console.log(isAnagram("happy", "happpy"))      // => false
console.log(isAnagram("anagram", "nagaram"))  // => true
console.log(isAnagram("apple", "leppa"))      // => true
console.log(isAnagram("apple", "leppo"))      // => false