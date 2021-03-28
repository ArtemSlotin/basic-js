const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
     this.array.push(`( ${value} )`);
     return this;
  },
  removeLink(position) {
    if(!position || typeof position !== 'number' || position < 0) {
      this.array = [];
      throw Error;
    }
     this.array.splice(position -1, 1);
     return this;
  },
  reverseChain() {
     this.array.reverse();
     return this;
  },
  finishChain() {
    let among = this.array.join('~~');
    this.array = [];
    return among;
  }
};
module.exports = chainMaker;
