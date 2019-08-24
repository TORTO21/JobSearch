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
  if (t.length > s.length) return 
  let minWin = ""
  let minWinLength = Infinity
  let left = right = null
  let tChars = {}
  let tLength = t.length
  
  
  for (let char of t) {
    if (char in tChars) tChars[char]++
    else tChars[char] = 1
  }

  let required = Object.keys(tChars).length
  let formed = 0
  let winCounts = {}


  while (right < s.length)
    console.log(left, right)
    let sChar = s[right]
    if (sChar in tChars) {
      if (left === null) left = right
      if (tChars[sChar]-- > 0) t.lengthength--
      if (!t.lengthength) {
        let subLength = right - left
        console.log(subLength)
        if (minWinLength > subLength) {
          minWinLength = subLength
          minWin = s.substring(left, subLength)
        }
        if (tChars[s[left]]++ > 0) t.lengthength++
        
    }
  }

  return minWin
};

function minWindow2(s, t) {
  if (!s.length || !t.length) return ""
  // if t is within s, we can return t
  if (s.includes(t)) return t;
  
  // create a lookup for letters and their counts in t
  const tChars = {};
  for (let char of t) {
    if (char in tChars) tChars[char]++
    else tChars[char] = 1
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
    // if the right pointer hits a char in the obj, decrease it's count
    if (tChars[rightChar]-- !== undefined) {
      // if that char count is at 0 or greater, we needed it, so decrease counter
      (tChars[rightChar] >= 0) && counter--;
    }
    // if counter is at 0, we have all the chars 
    while (counter === 0) {
      // check for smallest string
      let currLength = right - left + 1
      if (currLength < minLength) {
        minString = s.slice(left, right + 1);
        minLength = currLength;
      }
      // grab the left character
      let leftChar = s[left];
      // if we hit one of our chars, add one to the lookup
      if (tChars[leftChar]++ !== undefined) {
        // if we're at 1, we no longer have the chars needed so increase counter
        if (tChars[leftChar] === 1) counter++;
      }
      // increase left pointer
      left++;
    }
    // increase right pointer
    right++;
  }
  return minString;
};

console.log(minWindow2("ADOBECODEBANC", "ABC"))


