/* The array contains eight numbers, and the linearSearch function takes this array and the desired element as parameters.
The count variable is initialized to 0 and is used to count the number of iterations required to find the desired element.
In the for loop, starting with the first element of the array, each element is compared with the desired one.
If the desired element is found, its index is returned as the result of the function.
Otherwise, the count counter is incremented by 1, and the search continues. */

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
