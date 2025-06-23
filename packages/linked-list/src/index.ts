import { 
  List, 
  ListFactory,
  NodeObject 
} from './types'

/**
 * Linked List ⛓
 * ----
 * @description a Linear Structure of Nodes
 * @summary a typed Linked List with complete functionality
 * @note Enhanced with additional methods for a complete linked list implementation
 */

/**
 * item 🙋
 * @param name
 * @param data
 * constructs an object describing a linked list item
 */
export const item = (
  name: string, 
  data: unknown = null
): NodeObject => ({
  name,
  data,
})

/**
 * link 🔗
 * @param nextItem
 * @param item
 * a function which constructs a list of item from items
 */
export const link = (
  nextItem: List, 
  item: NodeObject
): List => {
  if (!item) return nextItem
  return {
    item: { name: item.name, data: item.data },
    nextItem,
  }
}

/**
 * create 👨‍🎤
 * @param items
 * a function which constructs a list
 */
export const create = (
  items: NodeObject[]
): List => items.reduceRight(link, null)

/**
 * constructArray 🛠
 * @param list
 * a recursive function that constructs an array from a list
 */
export const constructArray = (list: List): NodeObject[] => {
  if (!list || !list.item) return []
  return [list.item, ...constructArray(list.nextItem)]
}

/**
 * toArray
 * @param list
 * @abstraction of constructArray
 */
export const toArray = (
  list: List
): NodeObject[] => constructArray(list)

/**
 * prepend 📌
 * @param list
 * @param item
 * adds an item to the beginning of the list
 */
export const prepend = (list: List, item: NodeObject): List => {
  if (!item) return list
  return {
    item,
    nextItem: list,
  }
}

/**
 * append 📎
 * @param list
 * @param item
 * adds an item to the end of the list
 */
export const append = (list: List, item: NodeObject): List => {
  if (!item) return list
  if (!list) return { item, nextItem: null }
  
  return {
    item: list.item,
    nextItem: append(list.nextItem, item),
  }
}

/**
 * insertAt 📍
 * @param list
 * @param index
 * @param item
 * inserts an item at a specific index
 */
export const insertAt = (list: List, index: number, item: NodeObject): List => {
  if (!item || index < 0) return list
  if (index === 0) return prepend(list, item)
  if (!list) return index === 0 ? { item, nextItem: null } : list
  
  return {
    item: list.item,
    nextItem: insertAt(list.nextItem, index - 1, item),
  }
}

/**
 * removeFirst 🗑️
 * @param list
 * removes the first item from the list
 */
export const removeFirst = (list: List): List => {
  if (!list) return null
  return list.nextItem
}

/**
 * removeLast 🗑️
 * @param list
 * removes the last item from the list
 */
export const removeLast = (list: List): List => {
  if (!list || !list.nextItem) return null
  return {
    item: list.item,
    nextItem: removeLast(list.nextItem),
  }
}

/**
 * removeByName 🔍🗑️
 * @param list
 * @param name
 * removes the first item with the given name
 */
export const removeByName = (list: List, name: string): List => {
  if (!list) return null
  if (list.item && list.item.name === name) return list.nextItem
  
  return {
    item: list.item,
    nextItem: removeByName(list.nextItem, name),
  }
}

/**
 * removeAt 📍🗑️
 * @param list
 * @param index
 * removes an item at a specific index
 */
export const removeAt = (list: List, index: number): List => {
  if (!list || index < 0) return list
  if (index === 0) return list.nextItem
  
  return {
    item: list.item,
    nextItem: removeAt(list.nextItem, index - 1),
  }
}

/**
 * find 🔍
 * @param list
 * @param name
 * finds the first item with the given name
 */
export const find = (list: List, name: string): NodeObject | null => {
  if (!list) return null
  if (list.item && list.item.name === name) return list.item
  return find(list.nextItem, name)
}

/**
 * findIndex 🔢
 * @param list
 * @param name
 * finds the index of the first item with the given name
 */
export const findIndex = (list: List, name: string): number => {
  const findIndexHelper = (list: List, name: string, index: number): number => {
    if (!list) return -1
    if (list.item && list.item.name === name) return index
    return findIndexHelper(list.nextItem, name, index + 1)
  }
  return findIndexHelper(list, name, 0)
}

/**
 * getAt 📍
 * @param list
 * @param index
 * gets the item at a specific index
 */
export const getAt = (list: List, index: number): NodeObject | null => {
  if (!list || index < 0) return null
  if (index === 0) return list.item
  return getAt(list.nextItem, index - 1)
}

/**
 * length 📏
 * @param list
 * gets the length of the list
 */
export const length = (list: List): number => {
  if (!list) return 0
  return 1 + length(list.nextItem)
}

/**
 * isEmpty ❓
 * @param list
 * checks if the list is empty
 */
export const isEmpty = (list: List): boolean => list === null

/**
 * clear 🧹
 * returns an empty list
 */
export const clear = (): List => null

/**
 * reverse 🔄
 * @param list
 * reverses the list
 */
export const reverse = (list: List): List => {
  const reverseHelper = (list: List, acc: List): List => {
    if (!list) return acc
    return reverseHelper(list.nextItem, { item: list.item, nextItem: acc })
  }
  return reverseHelper(list, null)
}

/**
 * linkedList ⛓
 * @description a factory function providing utility methods to construct and manipulate a linked list
 */
export const list = (): ListFactory => ({
  create,
  toArray,
  prepend,
  append,
  insertAt,
  removeFirst,
  removeLast,
  removeByName,
  removeAt,
  find,
  findIndex,
  getAt,
  length,
  isEmpty,
  clear,
  reverse,
})
