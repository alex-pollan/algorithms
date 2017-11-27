let str = 'acecfgakf';
let n = str.length;
let map = {};
let max = {
    len: -1,
    str: null
};

for (let i = 0, j = 0; j < n; j++) {    
    let charIndex = map[str.charAt(j)];
    if (charIndex !== undefined) {
        i = Math.max(charIndex, i);
    }

    if (j - i + 1 > max.len) {
        max.len = j - i + 1;
        max.str = str.substr(i, max.len);
    }

    map[str.charAt(j)] = j + 1;
}

console.log(max);
console.log(map);