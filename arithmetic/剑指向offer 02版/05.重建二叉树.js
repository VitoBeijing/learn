// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof
// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    // 我们可以得知前序遍历 第一个为根
    // 根在中序遍历中为左右子树分界点
    let root = preorder.shift();
    let inorderIndex = inorder.indexOf(root);
    let leftInorder = inorder.slice(0, inorderIndex);
    let rightInorder = inorder.slice(inorderIndex + 1);
    let leftPreorder = preorder.slice(0, inorderIndex);
    let rightPreorder = preorder.slice(inorderIndex);
    let newNode = new TreeNode(root);
    newNode.left = buildTree(leftPreorder, leftInorder);
    newNode.right = buildTree(rightPreorder, rightInorder);
    return newNode;
};

// 知识点 前序遍历
// https://leetcode.cn/problems/binary-tree-preorder-traversal/
// 根左右
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let arr = [];
    let dfs = (root) => {
        if(root) {
            arr.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
    }
    dfs(root);
    return arr;
};

// 中序遍历
// https://leetcode.cn/problems/binary-tree-inorder-traversal/
// 左根右

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let arr = [];
    let dfs = (root) => {
        if(root) {
            dfs(root.left);
            arr.push(root.val);
            dfs(root.right);
        }
    }
    dfs(root);
    return arr;
};