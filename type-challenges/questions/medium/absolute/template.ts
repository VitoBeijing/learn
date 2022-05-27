type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer S}`
    ? Absolute<S>
    : `${T}`;
