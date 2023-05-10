# algorithms_and_structures
### study guide

1.  **The linear search algorithm** is to go through the elements of the array starting from the first element and compare each element with the desired element. If an element is found that is equal to the desired one, its index in the array is returned. If the element is not found, null is returned.  
      
    The time complexity of a linear search is O(n), where n is the number of elements in the array. This means that the number of operations increases linearly with the size of the array.
#
2.  **The binary search algorithm** finds an element in a sorted array by dividing it in half and comparing the average value with the desired value. If the found element is equal to the desired one, its index in the array is returned. If the desired element is less than the average value, the search continues in the left half of the array. If it is greater, the search continues in the right half of the array. The search continues until the element is found or until the left and right borders collide.  
      
    Both binary search algorithms (nonrecursive and recursive) have a complexity of O(log n), which means that the execution time increases logarithmically instead of proportionally to the size of the input data. This makes them effective for searching large data sets.  
    Compared to linear search, which has a complexity of O(n), where n is the number of elements in the array, binary search is much faster in the case of large arrays, since as the size of the array increases, the execution time of linear search increases proportionally, and binary search is much slower. However, in the case of very small arrays (usually less than 10 items), linear search can be more efficient than binary search.
#
3.  **The Selection sort algorithm** works by repeating the process of finding the minimum element from the unsorted part of the array and moving it to the beginning of the array.  
    The algorithm maintains two subarrays in a given array: a subarray that has already been sorted and the rest of the unsorted subarray.  
      
    The complexity of selection sorting is O(n^2), where n is the length of the array.
#
4.  **The bubble sort algorithm** is an algorithm that compares two adjacent elements of an array and rearranges them if they are not sorted in ascending (or descending) order. This is repeated for each pair of adjacent elements until the array is completely sorted.  
      
    This algorithm has a time complexity of O(n^2) because it has a nested loop that runs n^2 times, where n is the number of elements in the array. Therefore, it is not efficient for large arrays.
#
5.  **The QuickSort algorithm** uses a divide-and-conquer strategy. It selects an element from the array as the pivot and splits the array into two parts: one smaller than the pivot and one larger than the pivot. Then it recursively applies the same algorithm to each of the two parts of the array until the array is small enough to sort. The next step is to combine the sorted subsets into a single sorted array.  
      
    The time complexity of the QuickSort algorithm depends on how the reference element is selected, as well as on what elements are contained in the array. On average, QuickSort has a time complexity of O(n log n), which makes it one of the fastest sorting algorithms. However, in the worst case, when the array is already sorted and the worst possible reference element is selected each time, the time complexity can reach O(n^2). This makes QuickSort less efficient in such cases, so some implementations of the algorithm use additional strategies for selecting the reference element to avoid the worst case.
#
6.  **The algorithm for finding the factorial** is a simple example of a recursive function. The factorial of the number n is denoted as n! and is calculated as the product of all integers from 1 to n. That is, n! = 1 * 2 * 3 * ... * n.

    The basic algorithm of the recursive factorization function is to divide the problem of finding the factor of n into smaller parts with reduced complexity, and then combine the results of these smaller parts. Two approaches are usually used to find the factorization of n: iterative and recursive.

    The iterative algorithm for calculating the factorial simply uses a loop to multiply all the numbers from 1 to n together. This algorithm has a complexity of O(n) because it performs n multiplications.

    The recursive algorithm for finding the factorial works by calling a function with itself with a smaller value of n until n is either 0 or 1. When n equals 0 or 1, the recursion is terminated and the value 1 is returned. The complexity of this algorithm is O(2^n), which makes it inefficient for large n.

    A store-and-forward algorithm, which is an improved version of the recursive algorithm, stores the results of factorials that have already been calculated in an array or object. After a recursive call returns a result, it is stored in an array or object. When the next call is made, if the factorial for this number has already been calculated, the result is returned from the array or object.  
      
    In a recursive algorithm, the complexity of a conventional recursive algorithm is O(2^n), where n is the number whose factorial is to be found. However, if you use recursion with memorization, the complexity of the algorithm is O(n), which is much more efficient.
#
7.  **The breadth-first search (BFS) algorithm** is a graph traversal algorithm that works on the principle of expanding (searching) all the neighbors of the current node before moving on to the next node. The basic idea is to go through all possible paths from the current node before moving on to its neighbors.

    The algorithm starts with a given initial node and adds it to the queue. Then, until the queue is empty, nodes are removed from the queue one by one and checked for neighbors. If a neighbor has not yet been visited, it is added to the queue and the algorithm continues. If the neighbor has already been visited, it must be ignored.

    One of the key features of BFS is that it guarantees to find the shortest path between two nodes, if such a path exists. This is achieved by traversing the graph in ascending order of distance from the initial node.

    The algorithm can be implemented using a queue, stack, or recursive function. However, the most commonly used is the queue.
#
8.  **The Dijkstra algorithm** starts by determining the lowest cost for each node in the graph. Initially, all costs for all nodes in the graph are set to infinity, except for the source node, which has a cost of 0. The algorithm then looks at all neighbors of the current node and updates their costs if the cost of the current node and the weight of the edge to the neighboring node are less than the current cost of that neighboring node. The current node is then added to the processed nodes, and the algorithm repeats with the next lowest cost node that has not been processed before. The algorithm continues until all nodes in the graph are processed or until the desired node is found.  

    After the algorithm is finished, the shortest path from the start node to the end node will be determined using the parent array, which stores information about which node we arrived from to each node in the graph. The path will be found by passing through this array from the end node to the start node and adding nodes to the new array.
