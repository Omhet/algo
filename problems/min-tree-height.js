/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // base case
    if (n <= 2) {
        return Array(n).fill().map((_, i) => i);
    }
    
    // build graph
    const neighbors = Array(n).fill().map(() => new Set());
    for (const [start, end] of edges) {
        neighbors[start].add(end);
        neighbors[end].add(start);
    }
    // console.log(neighbors)
    // init leaves
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (neighbors[i].size === 1) {
            leaves.push(i);
        }
    }
    
    // trim the leaves till reaching centroids
    let remainingNodes = n;
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves = [];
        for (const leaf of leaves) {
            for (const neighbor of neighbors[leaf]) {
                const neighborsOfNeighbor = neighbors[neighbor];
                neighborsOfNeighbor.delete(leaf);
                if (neighborsOfNeighbor.size === 1) {
                    newLeaves.push(neighbor);
                }
            }
        }
        
        leaves = newLeaves;
    }
    
    return leaves;
};