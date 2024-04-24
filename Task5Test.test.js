let classTiming = require("./Task5")

test("class timing", ()=>{
  let timing = ["9:00AM","11:00AM", "1:00PM", "3:00PM","5:00PM"]
  let result = classTiming(timing)
  expect(result).toEqual(["1:00PM","3:00PM","5:00PM"])
  
})