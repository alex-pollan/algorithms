let iterations = 0;
const values = [11, 17, 8, 6, 9, 19, 18, 2, 12, 5, 16, 7, 13, 15, 20, 3, 4, 10, 1, 14];

let result = sort(values);

console.log(result);
console.log(iterations + ' iterations');

function sort(values) {
    return doSort(values, 0, values.length - 1);
}

function doSort(values, from, to) {
    iterations++;

    if (from === to) {
        return [values[from]];
    }

    const middle = from + Math.trunc(((to - from) / 2));

    const leftPart = doSort(values, from, middle);
    const rightPart = doSort(values, middle + 1, to);

    return merge(leftPart, rightPart);

    function merge(part1, part2) {
        let i = 0,
            j = 0;
        const result = [];

        while (i < part1.length && j < part2.length) {
            if (part1[i] < part2[j]) {
                result.push(part1[i]);
                i++;
            } else {
                swap();
            }
        }

        if (j < part2.length) {
            swap();
        }

        while (i < part1.length) {
            result.push(part1[i]);
            i++;
        }

        return result;

        function swap() {
            let temp = part1;
            part1 = part2;
            part2 = temp;
            temp = i;
            i = j;
            j = temp;
        }
    }

}

