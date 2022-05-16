type IsEqual<X, Y> = 
    (<T>() => T extends X ? true : false) extends
    (<T>() => T extends Y ? true : false) ? true : false;
    
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Other]
    ? IsEqual<First, U> extends true ? true : Includes<Other, U> : false;

// 知识点
// 递归遍历数组


