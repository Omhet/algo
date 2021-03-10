const merge = (arr1, arr2) => {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }

    return res;
};

// console.log(merge([1, 2, 3], [4, 5, 6]));
// console.log(merge([1, 2], [4, 5, 6]));
// console.log(merge([1, 2], [1, 2]));
// console.log(merge([1, 2], [1, 1]));
// console.log(merge([1, 1], [1, 2]));
// console.log(merge([1, 1], [1, 1]));
// console.log(merge([], [1, 1]));

const sort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.trunc(arr.length / 2);
    return merge(sort(arr.slice(0, middle)), sort(arr.slice(middle)));
};

console.log(sort([3, 2, 1]));
console.log(sort([1, 2, 3]));
console.log(sort([3]));
console.log(sort([]));
console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 2, 1, 1, 1, 1]));
console.log(sort([3, 1, 2, 3, 4, 5, 6]));
