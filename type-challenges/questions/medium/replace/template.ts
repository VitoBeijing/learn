type Replace<
    S extends string,
    From extends string,
    To extends string
> = From extends ''
    ? S
    : S extends ''
    ? S
    : S extends `${From}${infer R}`
    ? `${To}${R}`
    : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : S extends `${infer L}${From}`
    ? `${L}${To}`
    : S;

// S extends `${From}${infer T}` ? `${To}${T}` :
// S extends `${infer T1}${From}${infer T2}` ? `${T1}${To}${T2}` :
// S extends `${infer T}${From}` ? `${T}${To}` : S;
