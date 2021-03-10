const solution = (str1, str2) => {
    let i = 0;
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) i++;
    }
    return i >= str1.length;
};

console.log(solution('hello', 'hello world'));
console.log(solution('sing', 'sting'));
console.log(solution('abc', 'cba'));
console.log(solution('hello', 'worldddd hello'));
console.log(solution('hello', 'worldddd hell'));
