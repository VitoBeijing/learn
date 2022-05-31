// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

// 队列 先入先出
// 栈 先入后出
// js中实现栈用组合 push / pop   unshift / shift 
// 用俩栈实现一个队列

var CQueue = function() {
    this.inputStack = [];
    this.outputStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    return this.inputStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!this.outputStack.length) {
        if (!this.inputStack.length) {
            return -1;
        }
        for(let i = this.inputStack.length; i > 0; i--) {
            this.outputStack.push(this.inputStack.pop());
        }
    }
    return this.outputStack.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */