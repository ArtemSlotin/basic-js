const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (date === undefined) return 'Unable to determine the time of year!'
  if( !date.getMilliseconds()) {throw Error}
  let m = date.getMonth();
let result;

if (date === undefined) return 'FAIL'
if( !date.getMilliseconds()) {throw Error}
if (m == 11 || m == 0 || m == 1) {
  return result = "winter";
} else if(m == 2 || m == 3 || m == 4) {
  return result = "spring";
} else if(m == 5 || m == 6 || m == 7) {
  return result = "summer";
} else if (m == 8 || m == 9 || m == 10 ){
  return result = "autumn";
}

};