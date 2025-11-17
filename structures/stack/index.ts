export type Stack<T> = {
  add: (item: T) => Stack<T>
  remove: () => Stack<T>
  length: () => number
  print: () => T[]
}

export const stack = <T>(list: T[] = []): Stack<T> => ({
  add: (item) => stack([...list, item]),
  remove: () => stack(list.slice(0, -1)),
  length: () => list.length,
  print: () => list,
})
