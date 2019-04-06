function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required")
  const sandwichFillings = sandwich.fillings;
  return sandwichFillings;
}


function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  const McrPeople = person.city;
  return McrPeople === "Manchester"
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
  const firstLetter = person.address.postCode[0];
  return firstLetter === "M" && person.address.city === "Manchester"; 
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
