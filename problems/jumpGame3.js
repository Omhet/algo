/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    // BFS
    //     const n = arr.length;
    //     const stack = [start];
    //     const set = new Set();

    //     while (stack.length > 0) {
    //         const node = stack.pop();
    //         const amount = arr[node];
    //         if (amount === 0) return true;
    //         if (set.has(node)) continue;

    //         for (let i of [node - amount, node + amount]) {
    //             if (i >= 0 && i < n) {
    //                 stack.push(i);
    //             }
    //         }

    //         set.add(node)
    //     }

    //     return false;

    // DFS
    const set = new Set();
    const dfs = (index) => {
        if (index >= 0 && index < arr.length && !set.has(index)) {
            if (arr[index] === 0) return true;
            set.add(index);
            return dfs(index - arr[index]) || dfs(index + arr[index]);
        }
        return false;
    };
    return dfs(start);
};
