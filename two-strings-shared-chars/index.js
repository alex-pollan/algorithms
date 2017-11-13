const HashMap = require('hashmap');

const inputStr1 = 'Given a list of numbers that is a circular list, such that iterating through the list would return the first '; 
const inputStr2 = 'you can assume all the numbers are increasing, until it reaches the end of the list.Implement a function ';

console.log(findSharedChars_O_N_pow_2(inputStr1, inputStr2));
console.log(findSharedChars_O_N(inputStr1, inputStr2));

function findSharedChars_O_N_pow_2(str1, str2) {
    const hashMap = new HashMap();
    let strResult = '';
    let iter = 0;

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1.charAt(i);
        for (let j = 0; j < str2.length; j++) {
            iter++;
            const char2 = str2.charAt(j);
            if (char1 === char2) {
                if (!hashMap.has(char1)) {
                    hashMap.set(char1, char1);
                    strResult += char1;
                }                
                //no need to search more in str2
                break;
            }
        }
    }

    console.log(str1.length, str2.length, iter);

    return strResult;
}

function findSharedChars_O_N(str1, str2) {
    const hashMap = new HashMap();
    const resultHashMap = new HashMap();
    let strResult = '';
    let iter = 0;
    
    for (let i = 0; i < str1.length; i++) {
        iter++;
        const char1 = str1.charAt(i);
        if (!hashMap.has(char1)) {
            hashMap.set(char1, char1);
        }
    }

    for (let i = 0; i < str2.length; i++) {
        iter++;
        const char1 = str2.charAt(i);
        if (hashMap.has(char1)) {
            resultHashMap.set(char1, char1);
        }
    }

    console.log(str1.length, str2.length, iter);

    resultHashMap.forEach((value) => {
        strResult += value;
    });

    return strResult;
}

