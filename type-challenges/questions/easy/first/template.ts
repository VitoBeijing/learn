// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;


// 解题思路
// 1. extends类型条件判断
// 2. 获取length属性判断
// 3. 判断T[0]在不在T中
// 4. infer 的使用推断