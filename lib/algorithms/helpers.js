const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const getDigitCount = (num) => {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
};

module.exports = {
    getDigit,
    getDigitCount
};
