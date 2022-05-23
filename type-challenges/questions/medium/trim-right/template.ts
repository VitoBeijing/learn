
type TrimRight<S extends string> = S extends `${infer P}${TrimCharacter}` ? TrimRight<P> : S;