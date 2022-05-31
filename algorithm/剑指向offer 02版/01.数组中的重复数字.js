// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
// 请找出数组中任意一个重复的数字。

// 示例 1：
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    // let map = {};
    // for(let i = 0; i < nums.length; i++) {
    //     if (map[nums[i]] !== void 0) {
    //         return nums[i]
    //     }
    //     map[nums[i]] = i;
    // }
    // 二分法
    let left = 0;
    let right = nums.length - 1;
    let map = {};
    while(left <= right) {
        if(map[nums[left]] !== void 0) {
            return nums[left];
        }
        map[nums[left]] = left
        if(map[nums[right]] !== void 0){
            return nums[right];
        }
        map[nums[right]] = right
        left ++;
        right --;
    }

};