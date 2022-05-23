// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/jian-sheng-zi-lcof
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1）
// 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 
// 可能的最大乘积是多少
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1

/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    // 动态规划
    let dp = new Array(n).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 2;
    // i表示长度
    for(let i = 3; i <= n; i ++) {
        // 一刀切多少
        for(let j = 1; j < i - 1; j ++) {
            // 切
            // j * (i - j)
            // 不切(至少切一刀)
            // j * dp[i - j]
            dp[i] = Math.max(dp[i] || 0, Math.max(j * (i-j), j * dp[i - j]))
        }
    }
    return dp[n];
};