// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.


class Hamming {
    compute(firstStr, secondStr) {
        if (firstStr.length !== secondStr.length)
            throw 'DNA strands must be of equal length.';
        let result = 0;
        for (let i = 0; i < firstStr.length; i++) {
            if (firstStr[i] !== secondStr[i])
                result++;
        }
        return result
    }
}

module.exports = Hamming;
