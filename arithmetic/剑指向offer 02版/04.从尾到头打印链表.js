// https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）
// 输入：head = [1,3,2]
// 输出：[2,3,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    // 递归
    // let arr = [];
    // const fn = (head) => {
    //     if (head) {
    //         fn(head.next);
    //         arr.push(head.val);
    //     }
    // }
    // fn(head);
    // return arr;
    // 递推 遍历从头插入
    let arr = [];
    while(head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
    
};