type Flip<T extends Record<string, any>> = {
    [P in keyof T as `${T[P]}`]: P;
};
