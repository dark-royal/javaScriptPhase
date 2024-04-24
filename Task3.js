function squareNumberInTheList(number){
  let result = number.map(num => num ** 2)
  return result;
}
module.exports = squareNumberInTheList;