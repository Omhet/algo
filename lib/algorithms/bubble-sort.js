const swap = (arr, i, j) => ([arr[j], arr[i]] = [arr[i], arr[j]]);

const sort = (arr, asc = true) => {
    let noSwap;
    for (let i = arr.length - 1; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i; j++) {
            const compare = asc ? arr[j + 1] < arr[j] : arr[j + 1] > arr[j];
            if (compare) {
                noSwap = false;
                swap(arr, j, j + 1);
            }
        }
        if (noSwap) break;
    }
    return arr;
};

// console.log(sort([1, 2, 3], false));
// console.log(sort([3, 2, 1]));
// console.log(sort([3, 2, 1, 1, 1, 1]));
// console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 1, 2, 3, 4, 5, 6]));
