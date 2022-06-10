type BEM<
    B extends string,
    E extends string[],
    M extends string[]
> = E['length'] extends 0
    ? M['length'] extends 0
        ? B
        : `${B}--${M[number]}`
    : M['length'] extends 0
    ? `${B}__${E[number]}`
    : `${B}__${E[number]}--${M[number]}`;
