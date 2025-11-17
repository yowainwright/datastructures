import { describe, test, expect } from "bun:test"
import {
  constructArray,
  create,
  item,
  list,
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
  reverse
} from "./index"

describe('LinkedList', () => {
  describe('Basic Operations', () => {
    test('item creation', () => {
      const result = item('foo', { foo: 'bar' })
      expect(typeof result).toBe('object')
      expect(result?.name).toBe('foo')
      expect(result?.data).toEqual({ foo: 'bar' })
    })

    test('create list from array', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const result = create([a, b])

      const expected = {
        item: { name: 'foo', data: { foo: 'bar' } },
        nextItem: {
          item: { name: 'bar', data: { biz: 'baz' } },
          nextItem: null,
        },
      }
      expect(result).toEqual(expected)
    })

    test('constructArray', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const arraylist = constructArray(testList)

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { biz: 'baz' }, name: 'bar' },
      ]
      expect(arraylist).toEqual(expected)
    })

    test('toArray', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const arraylist = toArray(testList)

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { biz: 'baz' }, name: 'bar' },
      ]
      expect(arraylist).toEqual(expected)
    })
  })

  describe('List Factory', () => {
    test('list.create', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const result = list().create([a, b])

      const expected = {
        item: { name: 'foo', data: { foo: 'bar' } },
        nextItem: {
          item: { name: 'bar', data: { biz: 'baz' } },
          nextItem: null,
        },
      }
      expect(result).toEqual(expected)
    })

    test('list.toArray', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testlist = list()
      const linkedlist = testlist.create([a, b])
      const arraylist = testlist.toArray(linkedlist)

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { biz: 'baz' }, name: 'bar' },
      ]
      expect(arraylist).toEqual(expected)
    })
  })

  describe('Advanced Operations', () => {
    test('prepend', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const initialList = create([b])
      const result = prepend(initialList, a)

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { biz: 'baz' }, name: 'bar' },
      ]
      expect(toArray(result)).toEqual(expected)
    })

    test('append', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const initialList = create([a])
      const result = append(initialList, b)

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { biz: 'baz' }, name: 'bar' },
      ]
      expect(toArray(result)).toEqual(expected)
    })

    test('insertAt', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const c = item('middle', { middle: 'value' })
      const initialList = create([a, b])
      const result = insertAt(initialList, 1, c)

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { middle: 'value' }, name: 'middle' },
        { data: { biz: 'baz' }, name: 'bar' },
      ]
      expect(toArray(result)).toEqual(expected)
    })

    test('removeFirst', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const initialList = create([a, b])
      const result = removeFirst(initialList)

      const expected = [{ data: { biz: 'baz' }, name: 'bar' }]
      expect(toArray(result)).toEqual(expected)
    })

    test('removeLast', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const initialList = create([a, b])
      const result = removeLast(initialList)

      const expected = [{ data: { foo: 'bar' }, name: 'foo' }]
      expect(toArray(result)).toEqual(expected)
    })

    test('removeByName', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const c = item('baz', { test: 'data' })
      const initialList = create([a, b, c])
      const result = removeByName(initialList, 'bar')

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { test: 'data' }, name: 'baz' },
      ]
      expect(toArray(result)).toEqual(expected)
    })

    test('removeAt', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const c = item('baz', { test: 'data' })
      const initialList = create([a, b, c])
      const result = removeAt(initialList, 1)

      const expected = [
        { data: { foo: 'bar' }, name: 'foo' },
        { data: { test: 'data' }, name: 'baz' },
      ]
      expect(toArray(result)).toEqual(expected)
    })

    test('find', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const result = find(testList, 'bar')

      expect(result).toEqual({ data: { biz: 'baz' }, name: 'bar' })
    })

    test('find non-existent item', () => {
      const a = item('foo', { foo: 'bar' })
      const testList = create([a])
      const result = find(testList, 'nonexistent')

      expect(result).toBe(null)
    })

    test('findIndex', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const result = findIndex(testList, 'bar')

      expect(result).toBe(1)
    })

    test('findIndex non-existent item', () => {
      const a = item('foo', { foo: 'bar' })
      const testList = create([a])
      const result = findIndex(testList, 'nonexistent')

      expect(result).toBe(-1)
    })

    test('getAt', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const result = getAt(testList, 1)

      expect(result).toEqual({ data: { biz: 'baz' }, name: 'bar' })
    })

    test('getAt out of bounds', () => {
      const a = item('foo', { foo: 'bar' })
      const testList = create([a])
      const result = getAt(testList, 5)

      expect(result).toBe(null)
    })

    test('length', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const c = item('baz', { test: 'data' })
      const testList = create([a, b, c])
      const result = length(testList)

      expect(result).toBe(3)
    })

    test('length of empty list', () => {
      const result = length(null)
      expect(result).toBe(0)
    })

    test('isEmpty', () => {
      const emptyList = null
      const nonEmptyList = create([item('foo')])

      expect(isEmpty(emptyList)).toBe(true)
      expect(isEmpty(nonEmptyList)).toBe(false)
    })

    test('clear', () => {
      const result = clear()
      expect(result).toBe(null)
      expect(isEmpty(result)).toBe(true)
    })

    test('reverse', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const c = item('baz', { test: 'data' })
      const testList = create([a, b, c])
      const result = reverse(testList)

      const expected = [
        { data: { test: 'data' }, name: 'baz' },
        { data: { biz: 'baz' }, name: 'bar' },
        { data: { foo: 'bar' }, name: 'foo' },
      ]
      expect(toArray(result)).toEqual(expected)
    })

    test('reverse empty list', () => {
      const result = reverse(null)
      expect(result).toBe(null)
    })
  })

  describe('Factory Methods', () => {
    test('factory methods work correctly', () => {
      const factory = list()
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })

      let testList = factory.create([a])
      expect(factory.length(testList)).toBe(1)
      expect(factory.isEmpty(testList)).toBe(false)

      testList = factory.append(testList, b)
      expect(factory.length(testList)).toBe(2)

      const foundItem = factory.find(testList, 'bar')
      expect(foundItem).toEqual({ data: { biz: 'baz' }, name: 'bar' })

      const index = factory.findIndex(testList, 'bar')
      expect(index).toBe(1)

      const itemAtIndex = factory.getAt(testList, 0)
      expect(itemAtIndex).toEqual({ data: { foo: 'bar' }, name: 'foo' })

      testList = factory.removeByName(testList, 'foo')
      expect(factory.length(testList)).toBe(1)

      const reversed = factory.reverse(testList)
      expect(factory.toArray(reversed)).toEqual([{ data: { biz: 'baz' }, name: 'bar' }])

      const cleared = factory.clear()
      expect(factory.isEmpty(cleared)).toBe(true)
    })
  })
})
