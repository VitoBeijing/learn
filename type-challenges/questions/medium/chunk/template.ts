type Chunk<
    T extends unknown[],
    N extends number,
    R extends any[] = [],
    L extends unknown[] = []
> = T extends [infer H, ...infer O]
    ? [...L, H]['length'] extends N
        ? Chunk<O, N, [...R, [...L, H]], []>
        : Chunk<O, N, R, [...L, H]>
    : [...R, ...(L extends [] ? [] : [L])];
