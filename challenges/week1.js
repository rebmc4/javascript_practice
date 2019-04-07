function capitalize(word) {
  if (word === undefined) throw new Error("word is required"); 
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const result = (originalPrice * (vatRate/100)) + (originalPrice); 
  return parseFloat(result.toFixed(2));
}
  
  function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");
    const result = (originalPrice) - (originalPrice * (reduction/100));
    return parseFloat(result.toFixed(2)); 
  }
    // reduces a price 100 by 33.3% 
  // reduces a price of 79.99 by 15%
  // reduce price of 50 by 0%


function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var position;
  var length;
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
  var splitWords = words.split(""); 
  var reverse = splitWords.reverse();
  var join = reverse.join("");
  return join;
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
    let total = 0;
    users.forEach(function (user) {
      const machineType = user.type; 
      if (machineType === "Linux") {
         total += 1;
    }
});
return total;
}


function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0, i;
  for (i = 0; i < scores.length; i += 1){
      total += scores[i];
      return total / scores.length; 
      }
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // if number is divisble by 3, return fizz
  // if number is divisble by 5, return buzz
  // if number is not divisble by 3 nor 5 return number
  // if number divisble by 3 and 5 return fizzbuzz
  if (n % 3 === 0 && n % 5 !== 0){
    return "fizz"
  } else if (n % 5 === 0 && n % 3 !== 0){
    return "buzz"
  } else if (n % 3 !== 0 && n % 5 !== 0) {
    return n
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz"
  }
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