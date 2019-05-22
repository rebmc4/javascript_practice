const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const indexNum = nums.indexOf(n)
  if (indexNum === -1) {
    return null
  }
  if (indexNum === nums.length - 1) {
    return null
  }
  const nextIndex = indexNum + 1;
  return nums[nextIndex]
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const result = {
    1: 0,
    0: 0
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      result["0"] = result["0"] + 1;
    }
    if (str[i] === "1") {
      result["1"] = result["1"] + 1;
    }
  }
  return result
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const reversed = Number(n.toString().split("").reverse().join(""))
  return reversed
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;

  for (let i = 0; i < arrs.length; i++) {
    let innerArray = arrs[i];
    for (let j = 0; j < innerArray.length; j++) {
      total += innerArray[j];
    }
  }
  return total
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr
  }
  const lastItem = arr.pop();
  const firstItem = arr.shift()

  arr.push(firstItem);
  arr.unshift(lastItem);
  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  searchTerm = searchTerm.toLowerCase();
  for (let key in haystack) {
    const value = haystack[key];
    if (typeof value === "string") {
      if (value.toLowerCase().includes(searchTerm)) {
        return true;
      }
    }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  const frequencies = {}; 

  const splitWords = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' '); 
  splitWords.forEach(word => {
  if (frequencies[word] === undefined) {
    frequencies[word] = 1; 
  } else {
    frequencies[word] += 1; 
  }
  })
  return(frequencies)
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
