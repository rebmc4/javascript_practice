function capitalize(word) {
  if (word === undefined) throw new Error("word is required"); 
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required"); {
    return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
  }
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
 return (originalPrice * (vatRate/100)) + (originalPrice); 
  }
  
function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
    return (originalPrice) - (originalPrice * (reduction/100));
  }

function getMiddleCharacter(str) {
  var position;
    var length;
  if (str === undefined) throw new Error("str is required");
    if(str.length % 2 === 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }
    return str.substring(position, position + length)
}     

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var splitWord = word.split(""); 
  var reverse = splitWord.reverse();
  var join = reverse.join("");
  return join;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var splitWords = words.split([]); 
  var reverse = splitWords.reverse([]);
  var join = reverse.join([]);
  return join;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
