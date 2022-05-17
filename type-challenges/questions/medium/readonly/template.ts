type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P]
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
}
/**
 * 1. K 赋初始化，如果不传值就是默认所有是 readonly
 * 2. & 运算
 * 3. 先把 K 中包含的都变成 readonly
 * 4. 再计算 K 之外剩下的，都是普通类型
 */