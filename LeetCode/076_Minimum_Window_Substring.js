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
  if (!s.length || !t.length) return ""
  
  const tChars = {}
  for (let char of t) {
    if (char in tChars) tChars[char]++
    else tChars[char] = 1
  }
  
  let right = left = 0
  let tLength = t.length
  let minWinLength = Infinity
  let minWin = ""

  while (s[right]) {
    let rightChar = s[right]
    if (rightChar in tChars && --tChars[rightChar] >= 0) tLength--;

    while (tLength === 0) {
      let currLength = right - left + 1
      if (currLength < minWinLength) {
        minWin = s.slice(left, right + 1)
        minWinLength = currLength
      }

      let leftChar = s[left];
      if (leftChar in tChars && ++tChars[leftChar] > 0) tLength++;

      left++
    }
    right++
  }
  return minWin
}


var minWindowSolution = function(s, t) {
  // if t is within s, we can return t
  if (s.includes(t)) return t;
  
  // create a lookup for letters and their counts in t
  const lookupObj = {};
  for (let i = 0; i < t.length; i++) {
    if (lookupObj[t[i]] !== undefined) lookupObj[t[i]]++
    else lookupObj[t[i]] = 1;
  }
  
  // create a left and right pointer
  let right = 0;
  let left = 0;
  // and a counter to see if we've all characters
  let counter = t.length; // will be at 0 when we have all the chars
  // create minlength and minstring variables
  let minLength = Infinity;
  let minString = "";
  // while right is within the string
  while (s[right]) {
    // grab the right character
    let rightChar = s[right];
    // if the right pointer hits a char in the obj
    if (lookupObj[rightChar] !== undefined) {
      // decrease it's count
      lookupObj[rightChar]--;
      // if that char count is at 0 or greater, we needed it, so decrease counter
      if (lookupObj[rightChar] >= 0) counter--;
    }
    // if counter is at 0, we have all the chars 
    while (counter === 0) {
      // check for smallest string
      if (right - left + 1 < minLength) {
        minString = s.slice(left, right + 1);
        minLength = right - left + 1;
      }
      // grab the left character
      let leftChar = s[left];
      // if we hit one of our chars
      if (lookupObj[leftChar] !== undefined) {
        // add one to the lookup
        lookupObj[leftChar]++;
        // if we're at 1, we no longer have the chars needed so increase counter
        if (lookupObj[leftChar] === 1) counter++;
      }
      // increase left pointer
      left++;
    }
    // increase right pointer
    right++;
  }
  return minString;
};

console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("ADOBECODEBANC", ""))
console.log(minWindow("", ""))


