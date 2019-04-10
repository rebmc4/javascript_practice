function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  const squaredNums = [];

  nums.forEach(function(num){
      const squared = num * num;
      squaredNums.push(squared);
    });
  return squaredNums;
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
  let foundFoodItem = false; 

  menu.forEach(function (menuItem){
    menuItem.ingredients.forEach(function (menuItemIngredient){
        if (menuItemIngredient === ingredient) {
          foundFoodItem = true; 
        }
      });
    });
  
    return foundFoodItem; 
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");

  const duplicates = [];

  arr1.forEach(function (num) {
    const numIsInArr2 = arr2.includes(num);
      if (numIsInArr2) {
      const duplicatesContainsNum = duplicates.includes(num); 
        if (duplicatesContainsNum === false) {
        duplicates.push(num);
      }
    }
  });

  return duplicates.sort(function (a, b) {return a-b});
}



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};