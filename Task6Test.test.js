let calculateExpensesOnallCategories = require("./Task6")

 test("calculate all expenses in categories", ()=>{
  let categories = {"groceries": 150, "dinning-out":100, "transportation":50,"entertainment": 80}
  let result = calculateExpensesOnallCategories(categories);
  expect(result).toBe(380)

 })