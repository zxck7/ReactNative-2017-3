function sumArray(array){
  if (Object.prototype.toString.call(array) != '[object Array]') return 0
  return array.length<=2 ? 0 : array.reduce((x,y)=>x+y)-Math.max(...array)-Math.min(...array)
}
module.exports = sumArray