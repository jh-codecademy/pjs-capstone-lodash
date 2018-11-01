let _ = {
  clamp(number, lower, upper) {
    if (number <= lower) {
      return lower;
    } else if (number >= upper) {
      return upper;
    } else {
      return number;
    }
  },
  inRange(number, startValue, endValue) {
    if (!endValue) {
      endValue = startValue;
      startValue = 0;
    }
    let tempValue;
    if (startValue > endValue) {
      tempValue = startValue;
      startValue = endValue;
      endValue = tempValue;
    }
    if (number < startValue || number > endValue) {
      return false;
    } else {
      return true;
    }
  },
  words(str) {
    let wordArray = str.split(' ');
    return wordArray;
  },
  pad(str, length) {
    if (str.length > length) {
      return str;
    }
    let pad = length - str.length;
    let frontPad;
    if (pad % 2 != 0) {
      frontPad = (pad - 1) / 2;
    } else {
      frontPad = pad / 2;
    }
    let paddedString = ' '.repeat(frontPad) + str + ' '.repeat(pad - frontPad);
    return paddedString;
  },
  has(object, key) {
    if (typeof object[key] === 'undefined') {
      return false;
    } else {
      return true;
    }
  },
  invert(object) {
    let invertedObject = {};
    for (key in object) {
      let originalValue = object[key];
      invertedObject.originalValue = key;
    }
    return invertedObject;
  },
  findKey(object, predFunction) {
    for (key in object) {
      if (predFunction(object[key])) {
        return key;
      } else {
        return undefined;
      }
    }
  },
  drop(arr, dropNum=1) {
    for (let i = 0; i < dropNum; i++) {
      arr.shift();
    }
    return arr;
  },
  dropWhile(arr, predFunction) {
    let dropNumber = arr.findIndex(function(element, index) { return !predFunction(element, index, arr); });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  chunk(arr, size=1) {
    let arrayChunks = [];
    for (let i = 0; i < arr.length; i = i + size) {
      let arrayChunk = arr.slice(i, (i + size));
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;