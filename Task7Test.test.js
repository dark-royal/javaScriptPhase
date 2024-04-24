let getUnhealthySnacks = require("./Task7");

test("get unhealthy  snacks", ()=> {
  let shoppingList = [{
     name: 'Apples', category: 'Fruits', isHealthy: true },
     { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
      { name: 'Carrots', category: 'Vegetables', isHealthy: true },
     { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
     { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
     { name: 'Soda', category: 'Beverages', isHealthy: false }]

     let result = getUnhealthySnacks4(shoppingList);
     expect(result).toEqual()

    
  
})