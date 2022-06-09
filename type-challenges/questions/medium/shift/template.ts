type Shift<T> = T extends [infer P, ...infer U] ? [...U] : never;
