type Diff<T, S> = {
    [P in Exclude<keyof T | keyof S, keyof T & keyof S>]: P extends keyof T
        ? T[P]
        : P extends keyof S
        ? S[P]
        : never;
};
