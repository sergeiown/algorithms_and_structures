/* Loop vs Recursion vs Recursion with memoization on factorial of 1000 example.
The calculation of the time required to find the 1000! for each of the three methods is also given. */

/* loop */
let count = 0;
const factorial_loop = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        count += 1;
        result = result * i;
    }
    return result;
};

let tLoop0 = performance.now();
factorial_loop(1000);
let tLoop1 = performance.now();

console.log(`Call to factorial_loop took ${((tLoop1 - tLoop0) * 1000).toFixed(2)} microseconds.`);
console.log(`Number of iterations: ${count}`);
//The complexity of the loop is O(n)

/* Recursion */
let countRecursion = 0;
const factorial_recursion = (n) => {
    countRecursion += 1;
    if (n === 0) {
        return 1;
    }
    return n * factorial_recursion(n - 1);
};

let tRecursion0 = performance.now();
factorial_recursion(1000);
let tRecursion1 = performance.now();

console.log(`Call to factorial_recursion took ${((tRecursion1 - tRecursion0) * 1000).toFixed(2)} microseconds.`);
console.log(`Number of iterations: ${countRecursion - 1}`);
//The complexity of the recursion is O(2^n)

/* Recursion with memoization */
let countRecursionMemo = 0;
const factorial_recursion_memo = (n, memo = {}) => {
    countRecursionMemo += 1;
    if (n in memo) {
        return memo[n];
    }
    if (n === 0) {
        return 1;
    }
    memo[n] = n * factorial_recursion_memo(n - 1, memo);
    return memo[n];
};

let tRecursionMemo0 = performance.now();
factorial_recursion_memo(1000);
let tRecursionMemo1 = performance.now();

console.log(
    `Call to factorial_recursion_memo took ${((tRecursionMemo1 - tRecursionMemo0) * 1000).toFixed(2)} microseconds.`
);
console.log(`Number of iterations: ${countRecursionMemo - 1}`);
//The complexity of the recursion with memoization is O(n)

// Call to factorial_loop is the fastest
