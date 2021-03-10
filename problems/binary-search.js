const search = (arr, k) => {
  arr.sort((a, b) => a - b);
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const res = arr[mid];
    if (res === k) {
      return mid;
    } else if (k > res) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

const search2 = (arr, k) => {
  arr.sort((a, b) => a - b);
  let low = 0;
  let high = arr.length - 1;
    let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const res = arr[mid];
    if (k >= res) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
    
    // console.log(mid)

  return mid;
};

console.log(search([1, 2, 3, 4, 5, 6, 7], 1));
console.log(search([1, 2, 3, 4, 5, 6, 7], 2));
console.log(search([1, 2, 3, 4, 5, 6, 7], 3));
console.log(search([1, 2, 3, 4, 5, 6, 7], 4));
console.log(search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(search([1, 2, 3, 4, 5, 6, 7], 6));
console.log(search([1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8], 7));
