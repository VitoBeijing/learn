type DropChar<
    S extends string,
    C extends string
> = S extends `${infer P}${infer R}`
    ? P extends C
        ? DropChar<R, C>
        : `${P}${DropChar<R, C>}`
    : S;
