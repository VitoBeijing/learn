type Permutation<T, K = T> = [T] extends [never]
    ? []
    : T extends T
    ? [T, ...Permutation<MyExclude<K, T>>]
    : never;
