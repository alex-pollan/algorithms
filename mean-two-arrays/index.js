const mathjs = require('mathjs');

class Assert {
    static equals(expected, value) {
        if (expected !== value) {
            console.error(`FAILED: Expected ${expected} equals to ${value}`);
        } else {
            console.info(`PASSED: Expected ${expected} equals to ${value}`)
        }
    }
}

function getMedian(A, B) {
    let i = 0;
    let j = 0;
    const totalLength = A.length + B.length;
    const totalLength_2 = Math.trunc(totalLength / 2);
    console.log('totalLength_2', totalLength_2);
    const totalSorted = [];
    let totalIndex = 0;
    
    while ((i < A.length) || (j < B.length)) {
        while (i < A.length) {
            console.log('iterating over A', A[i]);

            if (A[i] > B[j]) {
                break;
            }

            totalSorted.push(A[i]);
            
            if (totalIndex === totalLength_2) {
                console.log('iterations', totalIndex);
                console.log('O:', Math.log(totalLength));
                return totalSorted[totalIndex];
            } else if (totalIndex > totalLength_2) {
                console.log('iterations', totalIndex);
                console.log('O:', Math.log(totalLength));
                return (totalSorted[totalIndex - 1] + totalSorted[totalIndex]) / 2;
            }

            totalIndex++;
            
            i++;
        }
    
        while (j < B.length) {
            console.log('iterating over B', B[j]);

            if (B[j] > A[i]) {
                break;
            }

            totalSorted.push(B[j]);

            if (totalIndex === totalLength_2) {
                console.log('iterations', totalIndex);
                console.log('O:', Math.log(totalLength));
                return totalSorted[totalIndex];
            } else if (totalIndex > totalLength_2) {
                console.log('iterations', totalIndex);
                console.log('O:', Math.log(totalLength));
                return (totalSorted[totalIndex - 1] + totalSorted[totalIndex]) / 2;
            }

            totalIndex++;
            
            j++;
        }
    }
}

function test() {
    let A, B;

    A = [1, 3];
    B = [2];
    Assert.equals(mathjs.median([A, B]), getMedian(A, B));

    A = [1, 2, 5];
    B = [3, 4];
    Assert.equals(mathjs.median([A, B]), getMedian(A, B));
    
    A = [2, 3, 5, 6];
    B = [1, 7, 10, 12, 20];
    Assert.equals(mathjs.median([A, B]), getMedian(A, B));
}

test();

