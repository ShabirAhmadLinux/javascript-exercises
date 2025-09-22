const sumAll = function (a, b) {
    if (a < 0 || b < 0 || Math.floor(a) !== a || Math.floor(b) !== b)
        return "ERROR";
    let sum = 0;
    let start = a < b ? a : b;
    let end = a > b ? a : b;
    while (start <= end) {
        sum += start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
