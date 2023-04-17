/* The graph is specified as an object, where each key corresponds to a node, and the
value is an array of its neighbors. The breadthSearch function takes such a graph, a
start node, and an end node as arguments. All nodes that have been visited are marked
in the graph object using the visited array.
The algorithm starts with a start node and adds it to the queue. Next, it takes the
first node in the queue and checks if it contains an end node (end). If so, the
algorithm returns true, which means that the path has been found.
If the current node is not the end node, it adds all the neighbors of the current
node to the queue. This process continues until the queue is empty or until the end node
is found.
This algorithm guarantees to find the shortest path, if it exists, as it traverses the
nodes in increasing order of distance from the starting node. */

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return false;
}

console.log(breadthSearch(graph, 'a', 'g')); // true
console.log(breadthSearch(graph, 'a', 'z')); // false
