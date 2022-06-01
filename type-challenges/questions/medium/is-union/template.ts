type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : false;
// T extends U 导致T被分发，所以在[U] extends [T]
// 这里，U 是联合类型，而T 是分发类型
// 二者如果不等，那么表示T就是联合类型
