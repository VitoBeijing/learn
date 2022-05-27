type StringToUnion<T extends string> = T extends ''
    ? never
    : StringToArray<T>[number];
