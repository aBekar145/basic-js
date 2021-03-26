const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let count = 0
  count = matrix.flat().filter(item => item === '^^').length;
  return count;
};
