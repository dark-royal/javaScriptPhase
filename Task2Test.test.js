let increaseScores = require("./Task2")

test("test that student scores will be increaded by 5",()=>{
  let scores = [85,92,78,88,95];
  let result = increaseScores(scores);
  expect(result).toEqual([90,97,83,93,100]);
})