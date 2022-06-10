type Flatten<T> = T extends [...infer P, infer U]
    ? U extends unknown[]
        ? [...Flatten<P>, ...Flatten<U>]
        : [...Flatten<P>, U]
    : T;
