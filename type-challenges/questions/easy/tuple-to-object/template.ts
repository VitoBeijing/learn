type TupleToObject<T extends readonly any[]> = {
 [K in T[number]]: K
}
// T[number] 遍历数组

// js实现
function tupleToObj(array) {
    const obj = {};
    array.forEach(val => {
        obj[val] = val;
    })
    return obj;
}