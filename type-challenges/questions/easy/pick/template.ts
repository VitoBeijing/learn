type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
// extends 约束K的值在keyof T中
// keyof 
// js
// 对比学习
function myPick(todo, keys) {
    const obj = {};
    keys.forEach((key) => {
        if(key in todo) {
            obj[key] = todo[key]
        }
    })
    return obj;
}

// 1. 返回一个对象
// 2. 遍历key
// 3. todo[key] 取值
// 4. 看看key在不在todo里