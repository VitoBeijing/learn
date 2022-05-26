type AppendArgument<Fn extends (...args: any[]) => any, A> = (
    ...args: [...MyParameters<Fn>, A]
) => ReturnType<Fn>;
