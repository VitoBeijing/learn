type If<C extends boolean, T, F> = C extends true ? T : F ;

// 知识点
// 类型兼容性和分配规则 
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content
// extends