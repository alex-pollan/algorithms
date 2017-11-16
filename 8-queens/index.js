const SIZE = 8;
const columns = new Array(SIZE),
    diagonals = new Array(2 * SIZE - 1),
    idiagonals = new Array(2 * SIZE - 1),
    currentCombination = new Array(SIZE * SIZE);
    combinations = [],
    iterations = 0;

const start = new Date().getTime();

combine(0);

//printCombinations();

console.log('Iterations:', iterations);
console.log('Time:', (new Date().getTime() - start) / 1000.0)

function combine(row) {
    for (let col = 0; col < SIZE; col++) {
        iterations++;
        if (!collide(row, col)) {
            togglePosition(row, col, true);
            if (row === SIZE - 1) {
                saveCurrentCombination();
            } else {
                combine(row + 1);
            }
            togglePosition(row, col, false);
        }
    }
}

function togglePosition(row, col, value) {
    currentCombination[row * SIZE + col] = value;
    columns[col] = value;
    diagonals[SIZE + row - col] = value;
    idiagonals[row + col] = value;
}

function collide(row, col) {
    return columns[col]
        || diagonals[SIZE + row - col]
        || idiagonals[row + col];
}

function saveCurrentCombination() {
    const combination = [];
    Array.prototype.push.apply(combination, currentCombination);
    combinations.push(combination);
}

function printCombinations() {
    for (let i = 0; i < combinations.length; i++) {
        const combination = combinations[i];
        console.log('Combination ', i);
        for (row = 0; row < SIZE; row++) {
            let rowStr = '';
            for (col = 0; col < SIZE; col++) {
                rowStr += combination[row * SIZE + col] ? '[O]' : '[ ]';
            }
            console.log(rowStr);
        }
    }
}