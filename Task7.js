function getUnhealthySnacks(shoppingList){
  let newArrray = [];
  let result = shoppingList.filter(shoppingList => {if(shoppingList.isHealthy)newArrray.push(shoppingList.name)})
  
   shoppingList.forEach(element => shoppingList=> {if(shoppingList.isHealthy == false) console.log(element.name)
   })
    
 
return newArrray;
}

module.exports = getUnhealthySnacks;