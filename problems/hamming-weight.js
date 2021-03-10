/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).match(/1/g)?.length ?? 0;

  let res = 0;
  let cur = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & cur) !== 0) {
      res++;
    }
    cur = cur << 1;
  }
  return res;

  let sum = 0;
  while (n) {
    sum++;
    n &= n - 1;
  }
  return sum;
};
