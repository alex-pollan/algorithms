const nums = [1, 3, 5, 6, 7, 8, 9, 10, 11, 21, 32];
const n = 21;

console.log('found at pos', searchRecursive(nums, n));
console.log('found at pos', searchIterative(nums, n));

function searchRecursive(nums, n) {
    return search(0, nums.length - 1);

    function search(from, to) {
        const mid = from + Math.trunc((to - from) / 2);
        const midNum = nums[mid];

        if (midNum === n) {
            return mid;
        }

        if (to === from) {
            return -1;
        }

        if (n < midNum) {
            return search(from, mid - 1);
        }

        return search(mid + 1, to);
    }
}


function searchIterative(nums, n) {
    let from = 0;
    let to = nums.length - 1;

    while (true) {
        let mid = from + Math.trunc((to - from) / 2);
        const midNum = nums[mid];

        if (midNum === n) {
            return mid;
        }

        if (to === from) {
            return -1;
        }

        if (n < midNum) {
            to = mid - 1;
        }
        else {
            from = mid + 1;
        }
    }
}
