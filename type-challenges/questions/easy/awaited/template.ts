// 解题思路
// 我们慢慢来解题
// 我们判断T是不是Promise T extends Promise<>
// 是Promse我们就要返回我们取到的类型 T extends Promise<> ? : never
// 通过infer推断来拿到Promise中的值T extends Promise<infer X> ? X : never;
// 如果X还是一个Promise呢？
// 我们需要递归去判断X去解出最终的类型
// 还有一个问题，我们需要判断范型 T 是Promise 否则要抛错
// MyAwaited<T extends Promise<unknown>>
// 此时呢 需要判断一下 X Promise<infer X> X extends Promise<unknown> ? MyAwaited<X>
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ?
    X extends Promise<unknown> ? MyAwaited<X>
     : X : never;

// type MyAwaited<T> = T extends Promise<infer X> ? MyAwaited<X> : T;
// infer
