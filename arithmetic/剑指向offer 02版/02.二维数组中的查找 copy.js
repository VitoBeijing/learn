// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序
// 每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 现有矩阵 matrix 如下：
// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。
// 给定 target = 20，返回 false。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    // 从右上角启动
    if (!matrix.length || !(matrix[0] && matrix[0].length)) {
        return false;
    }
    let x = matrix[0].length - 1;
    let y = 0;
    while(x > -1 && y < matrix.length) {
        let c = matrix[y][x];
        if (target === c) {
            return true;
        }
        if (target > c) {
            y ++;
        }
        if(target < c) {
            x --;
        }
    }
    return false;
};