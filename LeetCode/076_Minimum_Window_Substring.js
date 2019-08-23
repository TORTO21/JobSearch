// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// input: 

function minWindow(s, t) {
  let minWin = currWin = ""
  let left = right = 0
  let tChars = {}
  
  for (let char of t) {
    if (char in tChars) tChars[char]++
    else tChars[char] = 1
  }


  for (let i = 0; i < s.length; i++) {

    minWin = Math.min(minWin, currWin)
  }

  return minWin
};

console.log(minWindow("ADOBECODEBANC", "ABC"))