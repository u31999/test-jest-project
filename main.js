const firstCapitalize = str => str[0].toUpperCase() + str.slice(1); // Captlize the first letter

const reverseString = str => str.split('').reverse().join('');      // reverse string

const calculater = {
    add: (numOne, numTwo) => numOne + numTwo,
    multiplay: (numOne, numTwo) => numOne * numTwo,
    subtract: (numOne, numTwo) => numOne - numTwo,
    divide: (numOne, numTwo) => numTwo === 0 ? null : numOne / numTwo,

};

const ceaserCipher = (txt, key) => {

    if (key === undefined) return undefined;
    const alphaC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'];
    const alphaS = [];
    let result = [];
    let modifedKey;

    alphaC.forEach(c => alphaS.push(c.toLowerCase()));

    for (let i = 0; i <= txt.length - 1; i++) {
        if (txt[i] === ' ' || !/[a-z]|[A-Z]/.test(txt[i])) result.push(txt[i]);
        for (let j = 0; j <= alphaC.length - 1; j++) {
            if (txt[i].toUpperCase() === alphaC[j]) {
                if (txt[i] === txt[i].toUpperCase()) {
                    if (key + j > alphaC.length - 1) {
                        modifedKey = 26 % key;
                        result.push(alphaC[modifedKey]);

                    } else {
                        result.push(alphaC[j + key]);
                    }
                } else {
                    if (key + j > alphaS.length - 1) {
                        modifedKey = 26 % key;
                        result.push(alphaS[modifedKey]);
                    } else {
                        result.push(alphaS[j + key]);
                    }
                }
            }
        }
    }

    return result.join("");

};

const analyzeArray = (arrayOfElement) => {
    return {
        averge: arrayOfElement.reduce((a, b) => a + b) / arrayOfElement.length,
        min: arrayOfElement.reduce((a, b) => b > a ? a : b),
        max: arrayOfElement.reduce((a, b) => b > a ? b : a),
        length: arrayOfElement.length,
    };

};

export { firstCapitalize, reverseString, calculater, ceaserCipher, analyzeArray };
