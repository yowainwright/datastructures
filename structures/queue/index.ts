export type Queue<T> = {
  add: (item: T) => Queue<T>
  remove: () => Queue<T>
  length: () => number
  print: () => T[]
}

export const queue = <T>(list: T[] = []): Queue<T> => ({
  add: (item) => queue([item, ...list]),
  remove: () => queue(list.slice(0, -1)),
  length: () => list.length,
  print: () => list,
})
