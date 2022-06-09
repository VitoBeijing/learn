type ObjectEntries<T> = keyof T extends infer K
    ? K extends keyof T
        ? [K, Required<T>[K] extends never ? undefined : Required<T>[K]]
        : never
    : never;
