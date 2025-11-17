import { 
  List, 
  ListFactory,
  NodeObject 
} from './types'

export const item = (name: string, data: unknown = null): NodeObject => ({
  name,
  data,
})

export const link = (nextItem: List, item: NodeObject): List => {
  if (!item) return nextItem
  return {
    item: { name: item.name, data: item.data },
    nextItem,
  }
}

export const create = (items: NodeObject[]): List => items.reduceRight(link, null)

export const toArray = (list: List): NodeObject[] => {
  if (!list || !list.item) return []
  return [list.item, ...toArray(list.nextItem)]
}

export const prepend = (list: List, item: NodeObject): List => {
  if (!item) return list
  return { item, nextItem: list }
}

export const append = (list: List, item: NodeObject): List => {
  if (!item) return list
  if (!list) return { item, nextItem: null }
  return {
    item: list.item,
    nextItem: append(list.nextItem, item),
  }
}

export const insertAt = (list: List, index: number, item: NodeObject): List => {
  if (!item || index < 0) return list
  if (index === 0) return prepend(list, item)
  if (!list) return index === 0 ? { item, nextItem: null } : list
  return {
    item: list.item,
    nextItem: insertAt(list.nextItem, index - 1, item),
  }
}

export const removeFirst = (list: List): List => {
  if (!list) return null
  return list.nextItem
}

export const removeLast = (list: List): List => {
  if (!list || !list.nextItem) return null
  return {
    item: list.item,
    nextItem: removeLast(list.nextItem),
  }
}

export const removeByName = (list: List, name: string): List => {
  if (!list) return null
  if (list.item && list.item.name === name) return list.nextItem
  return {
    item: list.item,
    nextItem: removeByName(list.nextItem, name),
  }
}

export const removeAt = (list: List, index: number): List => {
  if (!list || index < 0) return list
  if (index === 0) return list.nextItem
  return {
    item: list.item,
    nextItem: removeAt(list.nextItem, index - 1),
  }
}

export const find = (list: List, name: string): NodeObject | null => {
  if (!list) return null
  if (list.item && list.item.name === name) return list.item
  return find(list.nextItem, name)
}

export const findIndex = (list: List, name: string): number => {
  const findIndexHelper = (list: List, name: string, index: number): number => {
    if (!list) return -1
    if (list.item && list.item.name === name) return index
    return findIndexHelper(list.nextItem, name, index + 1)
  }
  return findIndexHelper(list, name, 0)
}

export const getAt = (list: List, index: number): NodeObject | null => {
  if (!list || index < 0) return null
  if (index === 0) return list.item
  return getAt(list.nextItem, index - 1)
}

export const length = (list: List): number => {
  if (!list) return 0
  return 1 + length(list.nextItem)
}

export const isEmpty = (list: List): boolean => list === null

export const clear = (): List => null

export const reverse = (list: List): List => {
  const reverseHelper = (list: List, acc: List): List => {
    if (!list) return acc
    return reverseHelper(list.nextItem, { item: list.item, nextItem: acc })
  }
  return reverseHelper(list, null)
}

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
