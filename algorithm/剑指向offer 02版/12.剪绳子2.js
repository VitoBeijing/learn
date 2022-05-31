// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/jian-sheng-zi-lcof
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1）
// 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1]
// 可能的最大乘积是多少
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // 贪心算法
    if (n < 4) {
        return n - 1;
    }
    let res = 1;
    while (n > 4) {
        res = (res * 3) % (1e9 + 7);
        n -= 3;
    }
    return (res * n) % (1e9 + 7);
};
