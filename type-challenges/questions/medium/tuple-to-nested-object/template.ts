type TupleToNestedObject<T extends any[], U> = T extends [infer P, ...infer X]
    ? Record<T[0], TupleToNestedObject<X, U>>
    : U;
