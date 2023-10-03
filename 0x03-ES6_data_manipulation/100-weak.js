export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint) === false) weakMap.set(endpoint, 1);
  else {
    const numQueries = weakMap.get(endpoint);
    if (numQueries >= 5) throw new Error('Endpoint load is high');
    else weakMap.set(endpoint, numQueries + 1);
  }
}
