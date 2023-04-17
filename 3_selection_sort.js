const arr = [3, 0, 2, 5, -1, 4, 1, 15, -8, 7, 6, 9, 8, 11, 10, 13, 12, 14];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            count += 1;
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort(arr)); // [ -8, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
console.log(`Array length: ${arr.length}`); // 18
console.log(`Number of iterations: ${count}`); // Number of iterations: 153

// The complexity of selection sort is O(n^2)
