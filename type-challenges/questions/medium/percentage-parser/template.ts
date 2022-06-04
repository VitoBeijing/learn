type PercentageParser<
    A extends string,
    RES extends any[] = []
> = RES['length'] extends 0
    ? A extends `+${infer R}`
        ? PercentageParser<R, ['+']>
        : A extends `-${infer R}`
        ? PercentageParser<R, ['-']>
        : PercentageParser<A, ['']>
    : RES['length'] extends 1
    ? A extends `${infer R}%`
        ? PercentageParser<R, [...RES, R, '%']>
        : PercentageParser<A, [...RES, A, '']>
    : RES;
