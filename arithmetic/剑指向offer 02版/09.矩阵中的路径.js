// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
// 如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
// 同一个单元格内的字母不允许被重复使用。 

// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
// 输入：
//     board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
//     word = "ABCCED"
// 输出：true

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const dfs = (i, j, k) => {
        // 如果越界(行或列) 或 匹配到的字符与 word 当前遍历到的下标不同，直接返回
        if(i >= m || i < 0 || j >= n || j < 0 || board[i][j] !== word[k])
            return false;
        // 如果长度一样了，说明找到该路径了
        if(k === word.length - 1)
            return true;
        // 置空表明已经遍历过该字符了
        board[i][j] = '';
        // 在置空表明已经遍历过该字符了的前提下，继续递归上下右左看是否有满足等于单词的路径，只要有一个路径满足就行，所以 || 连接
        let res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        // 上面递归完后，要将字符变回来，复原现场，毕竟两层 for 循环和后面的递归调用 每次都要用到 board 数组
        board[i][j] = word[k];
        return res;
    }

    // 原数组 board 每个方格都可以看做是开始遍历的起点
    let m = board.length; n = board[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(dfs(i, j, 0))
                return true;
        }
    }
    return false;
};

