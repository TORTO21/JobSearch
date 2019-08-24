// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  if (!strs.length) return []
  let anagrams = {}
  let i = j = 0

  anagrams[strs[strs.length - 1]] = [strs.pop()]

  while (strs[j]) {
    let word = strs.pop()
    let bases = Object.keys(anagrams)
    
    anagrams[word] = [word]
    j++
  }
  return Object.values(anagrams)
}

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false

  charCts = {}
  for (let char of word1) {
    if (charCts[char]) charCts[char]++
    else charCts[char] = 1
  }
  for (let char of word2) {
    if (charCts[char]) charCts[char]--
    else return false
  }
  return true
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))