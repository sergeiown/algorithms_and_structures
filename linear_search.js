const array = [1, 4, 9, 2, 5, 7, 3, 8, 6];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 5)); // 4
console.log(`Number of iterations: ${count}`); // Number of iterations: 5

// The compliciation of linear search is O(n)
