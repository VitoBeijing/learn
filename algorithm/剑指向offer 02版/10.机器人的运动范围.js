// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
// 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
// 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
// 但它不能进入方格 [35, 38]，因为3+5+3+8=19。
// 请问该机器人能够到达多少个格子？
// 输入：m = 2, n = 3, k = 1
// 输出：3
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let visited = {};
    // 深度优先 DFS
    // function dfs(x, y) {
    //     if(x >= m || y >= n || visited[`${x},${y}`] || sum(x) + sum(y) > k) {
    //         return 0
    //     } else {
    //         visited[`${x},${y}`] = true;
    //         return 1 + dfs(x + 1, y) + dfs(x, y + 1)
    //     }
    // }
    // return dfs(0,0)
    // 广度优先
    let res = 0;
    let queue = [[0, 0]];
    while(queue.length) {
        let c = queue.pop();
        let x = c[0];
        let y = c[1];
        if(x >= m || y >= n || visited[`${x},${y}`] || sum(x) + sum(y) > k) {
            continue;
        }
        visited[`${x},${y}`] = true;
        res ++;
        queue.push([x + 1, y])
        queue.push([x, y + 1])
    }
    return res;
    };
    function sum(n) {
    let res = 0;
    while (n) {
        res += n % 10;
        n = Math.floor(n / 10)
    }
    return res;
}
