type Last<T extends unknown[]> = T extends [...infer U, infer P] ? P : never;