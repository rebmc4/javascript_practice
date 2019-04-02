function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required")

  }

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester"){
    return true
  } else return false
  }

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required"); 
  return Math.ceil(people/40);
  }

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
