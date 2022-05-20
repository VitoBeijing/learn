type LookUp<U extends { type: string }, T extends U['type']> = U extends {type: T} ? U : never;

// 涉及两个知识点
// Indexed Access Types https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// Distributive Conditional Types https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
