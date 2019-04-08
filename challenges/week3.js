function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  const sqNums = nums.map(function (nums){return nums*nums;});
  return sqNums; 
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  const subjects = people.name.subjects; 
  const result = subjects.filter(subject => subject.length > [""])
  return result;
}
  
  

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  var dupe = [];
  for ( var i = 0; i < arr1.length; i++ ) {
      for ( var e = 0; e < arr2.length; e++ ) {
          if (arr1[i] === arr2[e] ) dupe.push(arr1[i]);
          }
      }
  return dupe.sort() && dupe.filter((e,i)=> dupe.indexOf(e) >= i)
}



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};