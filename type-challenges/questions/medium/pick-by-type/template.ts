type PickByType<T, U> = {
    [P in keyof T as U extends T[P] ? P : never]: T[P];
};
