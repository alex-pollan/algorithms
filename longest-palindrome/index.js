const str = "aasasbcdefedcs";
let iterations = 0;

console.log(longestPalindrome(str));
console.log(iterations);

function longestPalindrome(str) {
    return findLongestPalindrome(str, 0, str.length - 1);
}

function findLongestPalindrome(str, lo, hi) {
    if (lo >= hi) {
        return {
            length: -1
        };
    }

    if (isPalindrome(str, lo, hi)) {
        return {
            str: str.substr(lo, hi - lo + 1),
            length: hi - lo + 1
        };
    }

    const right = findLongestPalindrome(str, lo + 1, hi);
    const left = findLongestPalindrome(str, lo, hi - 1);

    return right.length > left.length ? right : left;
}

function isPalindrome(str, lo, hi) {
    while (lo <= hi) {
        iterations++;
        if ((str.charAt(lo) !== str.charAt(hi))) {
            break;
        }
        lo++;
        hi--;
    }

    return lo > hi;
}
    