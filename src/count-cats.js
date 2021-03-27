const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = [];
  let ears = '^^';
  let count;

  for (let place of backyard) {
    count = place.filter(elem => elem == ears);
    result = result.concat(count);
  }
  return result.length;
  
};
