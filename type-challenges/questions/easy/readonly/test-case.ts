import type {Equal, Expect} from '@type-challenges/utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];
type cases2 = [Expect<Equal<MyReadonly<Todo2>, Readonly<Todo2>>>];
interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}
type Todo2 = string;
