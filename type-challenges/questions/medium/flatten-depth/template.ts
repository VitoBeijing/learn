type FlattenDepth<
    T,
    N extends number = 1,
    D extends unknown[] = []
> = D['length'] extends N
    ? T
    : T extends [infer P, ...infer U]
    ? P extends unknown[]
        ? [...FlattenDepth<P, N, [...D, unknown]>, ...FlattenDepth<U, N, D>]
        : [P, ...FlattenDepth<U, N, D>]
    : T;
