/* This uses a nested loop to compare each pair of adjacent elements in the array.
If the previous element is larger than the next, then they are swapped. After each
iteration of the outer loop, the largest element is moved to the right edge of the array.
This process is repeated until all the elements are sorted. */

const arr = [3, 0, 2, 5, -1, 4, 1, 15, -8, 7, 6, 9, 8, 11, 10, 13, 12, 14];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            count += 1;
        }
    }
    return array;
}

console.log(bubbleSort(arr)); // [ -8, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
console.log(`Array length: ${arr.length}`); // Array length: 18
console.log(`Number of iterations: ${count}`); // Number of iterations: 324

// The complexity of the algorithm is O(n^2)
