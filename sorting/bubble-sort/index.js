let iterations = 0;
const values = [11, 17, 8, 6, 9, 19, 18, 2, 12, 5, 16, 7, 13, 15, 20, 3, 4, 10, 1, 14];

sort(values);

console.log(values);
console.log(iterations + ' iterations');

function sort(values) {
    for (let i = values.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (values[j] > values[j + 1]) {
                const temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
            iterations++;
        }
    }
}
