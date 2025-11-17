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
  prepend: (list: List, item: NodeObject) => List
  append: (list: List, item: NodeObject) => List
  insertAt: (list: List, index: number, item: NodeObject) => List
  removeFirst: (list: List) => List
  removeLast: (list: List) => List
  removeByName: (list: List, name: string) => List
  removeAt: (list: List, index: number) => List
  find: (list: List, name: string) => NodeObject | null
  findIndex: (list: List, name: string) => number
  getAt: (list: List, index: number) => NodeObject | null
  length: (list: List) => number
  isEmpty: (list: List) => boolean
  clear: () => List
  reverse: (list: List) => List
}