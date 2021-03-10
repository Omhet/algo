const swap = (arr, i, j) => ([arr[j], arr[i]] = [arr[i], arr[j]]);

const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let peakIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[peakIndex]) {
                peakIndex = j;
            }
        }
        if (peakIndex !== i) {
            swap(arr, i, peakIndex);
        }
    }
    return arr;
};

console.log(sort([3, 2, 1]));
console.log(sort([3]));
console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 1, 2, 3, 4, 5, 6]));
