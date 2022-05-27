type Reverse<T> = T extends [...infer F, infer L] ? [L, ...Reverse<F>] : [];

type FlipArguments<T> = T extends (...arg: infer P) => infer R
    ? (...arg: Reverse<P>) => R
    : never;
