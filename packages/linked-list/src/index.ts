/**
 * Linked List ⛓
 * ----
 * @description a Linear Structure of Nodes
 * @summary a typed functional Linked List
 * @note if you desire to add more functionality
 * - to this minimal Linked List,
 * - submit a pull request
 */

export type NodeObject = {
  name: string
  data?: unknown
} | null

export type List = {
  item: NodeObject
  nextItem: List
} | null

export type ListFactory = {
  create: (items: NodeObject[]) => List
  toArray: (list: List) => NodeObject[]
}

/**
 * item 🙋
 * @param name
 * @param data
 * @param nextItem
 * constructs an object describing a linked list item
 */
export const item = (name: string, data: unknown = null): NodeObject => ({
  name,
  data,
})

/**
 * link 🔗
 * @param nextItem
 * @param  item
 * a function which constructs a list of item from items
 */
export const link = (nextItem: List, { name, data }: NodeObject): List => ({
  item: { name, data },
  nextItem,
})

/**
 * create 👨‍🎤
 * @param items
 * a function which constructs a list
 */
export const create = (items): List => items.reduceRight(link, null)

/**
 * constuctArray 🛠
 * @param list
 * a curried recursive function that constructs an array from a list
 */
export const constructArray = (list: List): NodeObject[] =>
  (({ item, nextItem }): NodeObject[] => [item, ...(nextItem !== null ? constructArray(nextItem) : [])])(list)

/**
 * toArray
 * @param list
 * @abstraction of constructArray
 */
export const toArray = (list: List): NodeObject[] => constructArray(list)

/**
 * linkedList ⛓
 * @description a factory function providing utility methods to construct a linked list
 */
export const list = (): ListFactory => ({
  create,
  toArray,
})

// Quokka testing 💅
// const item1 = item('foo', { foo: 'bar' })
// const item2 = item('bar', { foo: 'bar' })
// const items = [item1, item2]
// const test = list().create(items)
// const test2 = list().toArray(test)
// const test3 = link(item1, item2)
// test
// test2
// test3
