type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
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