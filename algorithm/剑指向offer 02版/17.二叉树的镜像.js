// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof
// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 示例 1：

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) {
        return null;
    }
    let left = root.left;
    let right = root.right;
    root.left = right;
    root.right = left;
    mirrorTree(left);
    mirrorTree(right);
    return root;
};
