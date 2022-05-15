type MyExclude<T, U> =  T extends U ? never : T

// 在联合类型时 extends会依次进行对比
// js
function myExclude(T, U) {
    let arr = [];
    T.forEach(key => {
        if(!U.includes(key)) {
            arr.push(T)
        }
    })
    return arr;
}