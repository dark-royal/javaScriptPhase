function getUnhealthySnacks(shoppingList){
  let newArrray = [];
  let result = shoppingList.filter(shoppingList => shoppingList.isHealthy == false,newArrray.push(result))
  return result;

}

module.exports = getUnhealthySnacks;