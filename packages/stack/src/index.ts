/**
 * Stack
 * ----
 * @description An ordered structure of data inputs obeying the principle of last in, first out.
 * @summary a typed functional Stack
 * @note if you desire to add more functionality
 * - to this minimal Stack,
 * - submit a pull request
 */

export type StackList = {
  add: (item: unknown) => StackList
  remove: () => StackList
  length: () => number
  print: () => unknown[]
}

export const stack = (list: unknown[] = []): StackList => ({
  add(item: unknown): StackList {
    list.push(item)
    return this
  },
  remove(): StackList {
    list.pop()
    return this
  },
  length: (): number => list.length,
  print: (): unknown[] => list,
})
