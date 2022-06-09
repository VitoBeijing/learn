type RequiredByKeys<T, K = keyof T> = {
    [P in Extract<keyof T, K>]: Exclude<T[P], undefined>;
} & {
    [P in Extract<
        keyof T,
        keyof T extends infer O ? (O extends K ? never : O) : never
    >]?: T[P];
} extends infer P
    ? {
          [U in keyof P]: P[U];
      }
    : never;
