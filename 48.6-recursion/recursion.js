/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  // let total = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   total = total * nums[i]
  // }
  // return total;
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  // if (idx === words.length) return longest;
  // longest = Math.max(words[idx].length, longest)
  // return longest(words, idx + 1, longest)
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, currentStr = "") {
  if (idx >= str.length) return currentStr;
  currentStr += str[idx]
  return everyOther(str, idx + 2, currentStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (val === arr[idx]) return idx;
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length -1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let res = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") res.push(obj[key])
    if (typeof obj[key] === "object") res.push(...gatherStrings(obj[key]))
  }
  return res;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
