type BuildArray<
    Len extends number,
    V extends unknown[] = []
> = V['length'] extends Len ? V : BuildArray<Len, [...V, unknown]>;

type Add<A extends number, B extends number> = [
    ...BuildArray<A>,
    ...BuildArray<B>
]['length'];

type Fibonacci<
    T extends number,
    D1 extends number = 0,
    D2 extends number = 1,
    C extends number = 1
> = T extends C
    ? D2
    : Fibonacci<T, D2, Add<D1, D2> & number, Add<C, 1> & number>;
