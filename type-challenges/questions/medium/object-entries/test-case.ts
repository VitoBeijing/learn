import type {Equal, Expect} from '@type-challenges/utils';

interface Model {
    name: string;
    age: number;
    locations: string[] | null;
}

type ModelEntries =
    | ['name', string]
    | ['age', number]
    | ['locations', string[] | null];

type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
    Expect<Equal<ObjectEntries<{key?: undefined}>, ['key', undefined]>>,
    Expect<Equal<ObjectEntries<{key: undefined}>, ['key', undefined]>>
];
type a = ObjectEntries<Partial<Model>>;
type c = Partial<Model>;
type b = Required<Partial<Model>>;
