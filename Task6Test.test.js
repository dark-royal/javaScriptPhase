let calculateExpensesOnallCategories = require("./Task6")

 test("calculate all expenses in categories", ()=>{
  let categories = {"groceries": 20, "dinning-out":100, "transportation":20,"entertainment": 80}
  let result = calculateExpensesOnallCategories(categories);
  expect(result).toBe(220)

 })