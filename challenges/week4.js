function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const newNums = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 1) {
      newNums.push(num);
    }
  }
  return newNums;
}


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const newNames = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const firstChar = name[0];

    if (firstChar === char) {
      newNames.push(name)
    }
  }
  return newNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const first3Chars = word.slice(0, 3);
    if (first3Chars === "to ") {
      verbs.push(word)
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integers = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num % 1 === 0) {
      integers.push(num)
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  const userCities = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const displayName = user.data.city.displayName;
    userCities.push(displayName)
  }
  return userCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const findSquare = (Math.sqrt(num));
    const square = findSquare.toFixed(2);
    squareRoots.push(square);
  }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const newSentences = [];
  for (let i = 0; i < sentences.length; i++) {

    const sentence = sentences[i];
    const lowerSentence = sentence.toLowerCase();

    const containsString = lowerSentence.includes(str);
    if (containsString === true) {
      newSentences.push(sentence)
    }
  }
  return newSentences
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    const newData = triangles[i];
    newData.sort(function (a, b) { return b - a; })
    const largestNum = newData[0]
    longestSides.push(largestNum);
  }
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
