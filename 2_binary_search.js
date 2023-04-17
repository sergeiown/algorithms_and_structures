/* The array contains an ordered sequence of numbers. The binarySearch function uses a binary search algorithm to find the item in the array. The binary search algorithm works by dividing the array into halves and checking the part that may contain the desired item. The check is performed by comparing the desired item with the item in the middle of the array. If the searched element is smaller than the element in the middle, the search continues in the first half of the array, otherwise - in the second half of the array. This process is repeated, dividing the array into halves, until the desired element is found or it turns out that it is not in the array. */

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(array, 0)); // 0
console.log(`Number of iterations: ${count}`); // Number of iterations: 4

// The complexity of binary search is O(log n)

/* The recursiveBinarySearch function performs the same search operation as binarySearch, but it uses recursion to divide the array into subarrays. The recursive function accepts the same parameters as binarySearch: array array, item item, start index start and end index end of the subarray in which the item is searched. After each call to the recursive function, the array is divided in half, and the search continues in one of the half-arrays, depending on whether the item being searched for is larger than the middle item or smaller than it. */

let countRecursion = 0;

function recursiveBinarySearch(array, item, start, end) {
    countRecursion += 1;
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(array, 0, 0, array.length)); // 0
console.log(`Number of iterations: ${countRecursion}`); // Number of iterations: 4

// The complexity of recursive binary search is O(log n) - the same as for binary search
