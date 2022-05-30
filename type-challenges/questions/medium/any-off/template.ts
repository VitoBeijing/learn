type AnyOf<T extends readonly any[]> = T[number] extends
    | false
    | ''
    | 0
    | []
    | Record<string, never>
    ? false
    : true;
