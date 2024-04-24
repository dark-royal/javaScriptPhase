let getScoresGreaterThan70 = require("./Task1")

test("get number greater than 70", ()=>{
let number = [23,67,87,98,21,34,56,17,77,76];
let result = getScoresGreaterThan70(number)
expect(result).toEqual([87,98,77,76]);
})