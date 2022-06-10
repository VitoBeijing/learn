type MyReverse<T> = T extends [...infer P, infer X] ? [X, ...MyReverse<P>] : [];
