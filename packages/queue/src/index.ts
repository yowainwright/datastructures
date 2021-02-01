export type QueueList = {
  add: (item: unknown) => number
  remove: () => unknown
  length: () => number
}

export const queue = (list: unknown[] = []): QueueList => ({
  add: (item: unknown): number => list.push(item),
  remove: (): unknown => list.pop(),
  length: (): number => list.length,
})

// Quokka testing 💅
// -----------------
// const todo = queue()
// todo.add('foo')
// todo.add('bar')
// const test1 = todo.length()
// test1
// tody.remove()
// const test2 = todo.length()
// test2
