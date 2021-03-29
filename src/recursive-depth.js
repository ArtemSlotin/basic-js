const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr, first = 1 ) {
    let count = first;
    for(let item of arr) {
      if (Array.isArray(item)) {
        let depth = this.calculateDepth(item, first + 1);
            if (depth > count) {
                count = depth;
            }
    }
  }return count;
  }
};


