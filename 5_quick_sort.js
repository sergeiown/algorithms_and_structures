/* The quickSort function takes an array as a parameter.
If the array contains one element or less, the function returns this array.
If the array contains more than one element, the pivot element is selected. In this case,
the average value of the array is used as the pivot element, finding the index that divides
the length of the array in half.
Two empty subsets are created - smaller than pivot (less) and larger than pivot (greater).
The array is iterated, and each element is compared to pivot. If the element is smaller
than pivot, it is added to the less array, otherwise - to the greater array.
For each of the subsets less and greater, the quickSort function is called recursively.
The sorted subarrays less, pivot and greater are combined into one sorted array.
The sorted array is returned as the result of the quickSort function. */

const arr = [3, 0, 2, 5, -1, 4, 1, 15, -8, 7, 6, 9, 8, 11, 10, 13, 12, 14];
let count = 0;

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr)); // [ -8, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
console.log(`Array length: ${arr.length}`); // Array length: 18
console.log(`Number of iterations: ${count}`); // Number of iterations: 62

// The complexity of the algorithm is O(n log n)
