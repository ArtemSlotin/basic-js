const CustomError = require('../extensions/custom-error');

const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(normal = true) {
    this.isReversed = !normal;
  }

  encrypt(m, k) {
    const message = m.toUpperCase();
    const key = k.repeat(Math.ceil(m.length / k.length)).toUpperCase();
    let result = '';
    let keyInd = 0;
    for (let i = 0; i < message.length; i++) {
      if (ABC.includes(message[i])) {
        const shift = ABC.indexOf(message[i]) + ABC.indexOf(key[keyInd]);
        result += shift <= 25 ? ABC[shift] : ABC[shift - 25 - 1];
        keyInd++;
      } else result += message[i];
    }

    if (this.isReversed) return result.split('').reverse().join('');
    return result;
  }

  decrypt(m, k) {
    const message = m.toUpperCase();
    const key = k.repeat(Math.ceil(m.length / k.length)).toUpperCase();
    let result = '';
    let keyInd = 0;
    for (let i = 0; i < message.length; i++) {
      if (ABC.includes(message[i])) {
        const shift = ABC.indexOf(message[i]) - ABC.indexOf(key[keyInd]);
        result += shift < 0 ? ABC[shift + 26] : ABC[shift];
        keyInd++;
      } else result += message[i];
    }

    if (this.isReversed) return result.split('').reverse().join('');
    return result;
  }
}

module.exports = VigenereCipheringMachine;