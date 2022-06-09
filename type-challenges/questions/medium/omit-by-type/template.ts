type OmitByType<T, U> = {
    [P in keyof T as U extends T[P] ? never : P]: T[P];
};
