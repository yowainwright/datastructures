import { test, describe } from 'node:test'
import assert from 'node:assert'
import {
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
} from '../src/index'

describe('LinkedList', () => {
  describe('Basic Operations', () => {
    test('item creation', () => {
      const result = item('foo', { foo: 'bar' })
      assert.strictEqual(typeof result, 'object')
      assert.strictEqual(result?.name, 'foo')
      assert.deepStrictEqual(result?.data, { foo: 'bar' })
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
      assert.deepStrictEqual(result, expected)
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
      assert.deepStrictEqual(arraylist, expected)
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
      assert.deepStrictEqual(result, expected)
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
      assert.deepStrictEqual(arraylist, expected)
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
      assert.deepStrictEqual(toArray(result), expected)
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
      assert.deepStrictEqual(toArray(result), expected)
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
      assert.deepStrictEqual(toArray(result), expected)
    })

    test('removeFirst', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const initialList = create([a, b])
      const result = removeFirst(initialList)
      
      const expected = [{ data: { biz: 'baz' }, name: 'bar' }]
      assert.deepStrictEqual(toArray(result), expected)
    })

    test('removeLast', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const initialList = create([a, b])
      const result = removeLast(initialList)
      
      const expected = [{ data: { foo: 'bar' }, name: 'foo' }]
      assert.deepStrictEqual(toArray(result), expected)
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
      assert.deepStrictEqual(toArray(result), expected)
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
      assert.deepStrictEqual(toArray(result), expected)
    })

    test('find', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const result = find(testList, 'bar')
      
      assert.deepStrictEqual(result, { data: { biz: 'baz' }, name: 'bar' })
    })

    test('find non-existent item', () => {
      const a = item('foo', { foo: 'bar' })
      const testList = create([a])
      const result = find(testList, 'nonexistent')
      
      assert.strictEqual(result, null)
    })

    test('findIndex', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const result = findIndex(testList, 'bar')
      
      assert.strictEqual(result, 1)
    })

    test('findIndex non-existent item', () => {
      const a = item('foo', { foo: 'bar' })
      const testList = create([a])
      const result = findIndex(testList, 'nonexistent')
      
      assert.strictEqual(result, -1)
    })

    test('getAt', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const testList = create([a, b])
      const result = getAt(testList, 1)
      
      assert.deepStrictEqual(result, { data: { biz: 'baz' }, name: 'bar' })
    })

    test('getAt out of bounds', () => {
      const a = item('foo', { foo: 'bar' })
      const testList = create([a])
      const result = getAt(testList, 5)
      
      assert.strictEqual(result, null)
    })

    test('length', () => {
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      const c = item('baz', { test: 'data' })
      const testList = create([a, b, c])
      const result = length(testList)
      
      assert.strictEqual(result, 3)
    })

    test('length of empty list', () => {
      const result = length(null)
      assert.strictEqual(result, 0)
    })

    test('isEmpty', () => {
      const emptyList = null
      const nonEmptyList = create([item('foo')])
      
      assert.strictEqual(isEmpty(emptyList), true)
      assert.strictEqual(isEmpty(nonEmptyList), false)
    })

    test('clear', () => {
      const result = clear()
      assert.strictEqual(result, null)
      assert.strictEqual(isEmpty(result), true)
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
      assert.deepStrictEqual(toArray(result), expected)
    })

    test('reverse empty list', () => {
      const result = reverse(null)
      assert.strictEqual(result, null)
    })
  })

  describe('Factory Methods', () => {
    test('factory methods work correctly', () => {
      const factory = list()
      const a = item('foo', { foo: 'bar' })
      const b = item('bar', { biz: 'baz' })
      
      // Test all factory methods
      let testList = factory.create([a])
      assert.strictEqual(factory.length(testList), 1)
      assert.strictEqual(factory.isEmpty(testList), false)
      
      testList = factory.append(testList, b)
      assert.strictEqual(factory.length(testList), 2)
      
      const foundItem = factory.find(testList, 'bar')
      assert.deepStrictEqual(foundItem, { data: { biz: 'baz' }, name: 'bar' })
      
      const index = factory.findIndex(testList, 'bar')
      assert.strictEqual(index, 1)
      
      const itemAtIndex = factory.getAt(testList, 0)
      assert.deepStrictEqual(itemAtIndex, { data: { foo: 'bar' }, name: 'foo' })
      
      testList = factory.removeByName(testList, 'foo')
      assert.strictEqual(factory.length(testList), 1)
      
      const reversed = factory.reverse(testList)
      assert.deepStrictEqual(factory.toArray(reversed), [{ data: { biz: 'baz' }, name: 'bar' }])
      
      const cleared = factory.clear()
      assert.strictEqual(factory.isEmpty(cleared), true)
    })
  })
})
