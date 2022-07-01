type Tail<T extends any[]> = T extends [infer P, ...infer U] ? U : never;
type Zip<
    T extends any[],
    K extends any[],
    L extends any[] = []
> = Head<K> extends undefined
    ? L
    : Head<T> extends undefined
    ? L
    : Zip<Tail<T>, Tail<K>, [...L, [Head<T>, Head<K>]]>;
