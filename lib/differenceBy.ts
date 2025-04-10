export function differenceBy<T, K>(
  array1: T[],
  array2: T[],
  iteratee: (value: T) => K
): T[] {
  // 创建一个 Set 来存储 array2 处理后的值
  const mappedSet = new Set(array2.map(iteratee));
  
  // 过滤 array1，只保留 iteratee 处理后不在 mappedSet 中的元素
  return array1.filter(item => !mappedSet.has(iteratee(item)));
}
