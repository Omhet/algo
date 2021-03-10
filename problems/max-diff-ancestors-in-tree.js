/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    let diff = 0;
    
    const dfs = (node, curMin, curMax) => {
        if (node === null) {
            return;
        }
        
        const curDiff = Math.max(Math.abs(curMax - node.val), Math.abs(curMin - node.val));
        diff = Math.max(curDiff, diff);
        
        curMin = Math.min(curMin, node.val);
        curMax = Math.max(curMax, node.val);
        
        dfs(node.left, curMin, curMax);
        dfs(node.right, curMin, curMax);
    }
    
    dfs(root, root.val, root.val);
    
    return diff;
};