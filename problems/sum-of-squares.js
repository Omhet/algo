const sum = n => {
    let res = 0;
    while (n > 0) {
        const digit = n % 10;
        res += digit * digit;
        n = Math.floor(n / 10);
    }
    return res;
}

console.log(sum(11));
console.log(sum(10));
console.log(sum(19));
console.log(sum(36));
console.log(sum(22));