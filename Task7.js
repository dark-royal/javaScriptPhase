function getUnhealthySnacks(shoppingList){
  let newArrray = [];
  let result = shoppingList.filter(shoppingList => {if(shoppingList.isHealthy)newArrray.push(shoppingList.name)})
  
   shoppingList.forEach(element => shoppingList=> {if(shoppingList.isHealthy ) console.log(element.name)
   })
    
 
return result;
}

module.exports = getUnhealthySnacks;