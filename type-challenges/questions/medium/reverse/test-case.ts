import type {Equal, Expect} from '@type-challenges/utils';

type cases = [
    Expect<Equal<MyReverse<[]>, []>>,
    Expect<Equal<MyReverse<['a', 'b']>, ['b', 'a']>>,
    Expect<Equal<MyReverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
];
