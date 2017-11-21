const nums = [205, 655, 523, 10, 33, 124, 121, 960, 914, 507, 392, 365, 479, 47, 794, 120, 103, 231, 385, 260, 131, 7, 617, 832, 789, 
    179, 233, 872, 599, 316, 940, 999, 217, 765, 379, 254, 407, 104, 539, 814, 989, 90, 168, 166, 16, 968, 190, 335, 878, 319, 705, 912, 
    605, 367, 496, 320, 42, 331, 679, 155, 286, 524, 671, 468, 992, 701, 843, 93, 799, 824, 993, 487, 130, 500, 919, 408, 477, 546, 612,
    271, 525, 409, 582, 890, 642, 454, 510, 281, 180, 631, 493, 720, 287, 464, 116, 156, 297, 812, 446, 161];
let iterations = 0;

quicksort(nums);

console.log(nums);
console.log(iterations, 'iterations');

function quicksort(nums) {
    console.log(iterations, nums);
    
    sort(0, nums.length - 1);

    function sort(from, to) {
        if (from >= to) {
            return;
        }

        const pivot = getPivot(from, to);
        const p = partition(from, to, pivot);

        sort(from, p);
        sort(p + 1, to);
    }

    function partition(from, to, pivot) {
        let left = from,
            right = to;

        while (true) {
            iterations++;

            while (nums[left] < pivot) {
                left++;
            }

            while (nums[right] > pivot) {
                right--;
            }

            console.log(iterations, nums);

            if (left >= right) {
                return right;
            }

            swap(left, right);
        }
    }

    function getPivot(from, to) {
        return nums[from + Math.trunc((to - from) / 2)];
    }

    function swap(i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
