/**
 * There is an array A[N] of N numbers. You have to compose an array Output[N] such that Output[i] will be equal to multiplication
 * of all the elements of A[N] except A[i]. For example Output[0] will be multiplication of A[1] to A[N-1] and Output[1] will be 
 * multiplication of A[0] and from A[2] to A[N-1]. Solve it without division operator and in O(n).
 */

var values = [2, 4, 6, 8, 10];

console.log(generate(values));

function generate(values) {
    const result = [];

    doMultiply(1, 0);

    return result;

    function doMultiply(leftAccummulated, index) {
        if (index === values.length -1) {
            result.push(leftAccummulated);
            return values[index];
        }

        const accumulated = leftAccummulated * values[index];

        const rightAccummulated = doMultiply(accumulated, index + 1);

        result.unshift(leftAccummulated * rightAccummulated);

        return values[index] * rightAccummulated;
    }
}
