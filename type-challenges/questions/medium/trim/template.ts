type TrimCharacter = ' ' | '\t' | '\n';
type Trim<S extends string> = 
    S extends `${TrimCharacter}${infer L}` ? Trim<L> : S |
    S extends `${infer R}${TrimCharacter}` ? Trim<R> : S;