// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof
// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
// 比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

// 示例 1:

// 输入: n = 1
// 输出: [1,2,3,4,5,6,7,8,9]
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    // 偷懒
    // let max = '';
    // while(n) {
    //     max += 9;
    //     n--
    // }
    // let res = [];
    // for(let i = 1; i < Number(max) + 1; i++) {
    //     res.push(i);
    // }
    // return res;

    // dfs
    let arr = [];
    let dfs = (str, len) => {
        if (str.length === len) {
            return arr.push(Number(str));
        }
        for (let i = 0; i < 10; i++) {
            dfs(str + i, len);
        }
    };
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < 10; j++) {
            dfs(String(j), i + 1);
        }
    }
    return arr;
};
