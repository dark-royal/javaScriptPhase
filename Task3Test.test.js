let squareNumberInTheList = require("./Task3")

test("square number in the list",()=>{
let number = [2,4,6,8,10];
let result = squareNumberInTheList(number);
expect(result).toEqual([4,16,36,64,100])
})