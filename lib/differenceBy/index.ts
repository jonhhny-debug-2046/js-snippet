export function differenceBy<T, K>(
  array1: T[],
  array2: T[],
  iteratee: (value: T) => K
): T[] {
  const mappedSet = new Set(array2.map(iteratee));
  
  return array1.filter(item => !mappedSet.has(iteratee(item)));
}
