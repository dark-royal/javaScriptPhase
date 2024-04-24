function classTiming(timing){
  let result = timing.filter(timing => timing.endsWith("PM"))
  return result;
}
module.exports = classTiming;