type Chainable<T extends { [key: string]: unknown } = {}> = {
    option<K extends string, V>(k: K, value: V): Chainable<T & { [Key in K]: V }>
    get(): T
}