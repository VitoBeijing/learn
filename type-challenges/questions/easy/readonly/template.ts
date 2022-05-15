type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
}
// 我们就需要把readonly关键字加在每个键前就行了