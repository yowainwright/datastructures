/**
 * Queue ➡️|➡️|
 * ----
 * @description An ordered structure of data inputs obeying the principle of first in, first out.
 * @summary a typed functional Queue
 * @note if you desire to add more functionality
 * - to this minimal queue,
 * - submit a pull request
 */

export type QueueList = {
  add: (item: unknown) => QueueList
  remove: () => QueueList
  length: () => number
  print: () => unknown[]
}

export const queue = (list: unknown[] = []): QueueList => ({
  add(item: unknown): QueueList {
    list.unshift(item)
    return this
  },
  remove(): QueueList {
    list.pop()
    return this
  },
  length: (): number => list.length,
  print: (): unknown[] => list,
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
