//Find combinations which sum = 100
//numbers: 1 2 3 4 5 6 7 8 9 
//combine using:
// add +
// substract - 
// join consecutive digits 

const combinations = getCombinations([1, 2, 3, 4, 5, 6, 7, 8, 9], 100);
displayCombinations(combinations);

function displayCombinations() {
    for (let i = 0; i < combinations.length; i++) {
        const combination = combinations[i];
        let sum = 0;
        const combinationString = [];
        for (let j = 0; j < combination.length; j++) {
            const value = combination[j];

            sum += value;

            combinationString.push(value > 0 ? ' + ' + value : ' - ' + -1 * value);
        }

        console.log(combinationString.join(''), '=', sum);
    }
}

function getCombinations(nums, target) {
    const combinations = [];

    combine([], 0, 1);
    combine([], 0, -1);

    return combinations;

    function combine(subCombinationValues, index, multiplier) {
        const current = multiplier * nums[index];

        if (index === (nums.length - 1)) {
            if ((getSubCombinationValue(subCombinationValues) + current) === target) {
                subCombinationValues.push(current);
                combinations.push(subCombinationValues);
            }
            return;
        }

        for (let i = index; i < nums.length - 1; i++) {
            const current2 = multiplier * getCurrentValue(index, i + 1);

            let subCombinationValuesCopy = [];
            Array.prototype.push.apply(subCombinationValuesCopy, subCombinationValues);
            subCombinationValuesCopy.push(current2);

            combine(subCombinationValuesCopy, i + 1, 1);

            subCombinationValuesCopy = [];
            Array.prototype.push.apply(subCombinationValuesCopy, subCombinationValues);
            subCombinationValuesCopy.push(current2);

            combine(subCombinationValuesCopy, i + 1, -1);
        }
    }

    function getCurrentValue(start, end) {
        const digits = nums.slice(start, end);
        let digitsValue = digits[digits.length - 1];
        for (let i = digits.length - 2; i >= 0; i--) {
            digitsValue += digits[i] * Math.pow(10, digits.length - i - 1);
        }
        return digitsValue;
    }

    function getSubCombinationValue(combinationValues) {
        let value = 0;
        combinationValues.forEach(combinationValue => {
            value += combinationValue;
        });

        return value;
    }
}

