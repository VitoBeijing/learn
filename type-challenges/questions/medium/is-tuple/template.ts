type IsTuple<TValue> = IsNever<TValue> extends true
    ? false
    : TValue extends readonly [unknown, ...unknown[]]
    ? true
    : TValue extends []
    ? true
    : false;
