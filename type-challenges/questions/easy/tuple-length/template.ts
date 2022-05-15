type Length<T extends readonly any[]> = T['length'];

// 知识点
//tuple类型和普通数组有什么区别
// 定长度所以可以获取具体长度的类型值，而普通数组的长度类型值是number