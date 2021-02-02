import { constructArray, create, item, list, toArray } from '../index'

describe('list', () => {
  test('item', () => {
    const result = item('foo', { foo: 'bar' })
    expect(typeof result).toEqual('object')
    expect(result.name).toEqual('foo')
    expect(result.data).toEqual({ foo: 'bar' })
  })

  test('create', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const result = create([a, b])
    expect(result).toEqual({
      item: { name: 'foo', data: { foo: 'bar' } },
      nextItem: {
        item: {
          name: 'bar',
          data: { biz: 'baz' },
        },
        nextItem: null,
      },
    })
  })

  test('constructArray', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const testList = create([a, b])
    expect(testList).toEqual({
      item: { name: 'foo', data: { foo: 'bar' } },
      nextItem: {
        item: {
          name: 'bar',
          data: { biz: 'baz' },
        },
        nextItem: null,
      },
    })
    const arraylist = constructArray(testList)
    expect(arraylist).toEqual([
      { data: { foo: 'bar' }, name: 'foo' },
      { data: { biz: 'baz' }, name: 'bar' },
    ])
  })

  test.only('toArray', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const testList = create([a, b])
    expect(testList).toEqual({
      item: { name: 'foo', data: { foo: 'bar' } },
      nextItem: {
        item: {
          name: 'bar',
          data: { biz: 'baz' },
        },
        nextItem: null,
      },
    })
    const arraylist = toArray(testList)
    expect(arraylist).toEqual([
      { data: { foo: 'bar' }, name: 'foo' },
      { data: { biz: 'baz' }, name: 'bar' },
    ])
  })

  test('list.create', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const result = list().create([a, b])
    expect(result).toEqual({
      item: { name: 'foo', data: { foo: 'bar' } },
      nextItem: {
        item: {
          name: 'bar',
          data: { biz: 'baz' },
        },
        nextItem: null,
      },
    })
  })

  test('list.toArray', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const testlist = list()
    const linkedlist = testlist.create([a, b])
    expect(linkedlist).toEqual({
      item: { name: 'foo', data: { foo: 'bar' } },
      nextItem: {
        item: {
          name: 'bar',
          data: { biz: 'baz' },
        },
        nextItem: null,
      },
    })
    const arraylist = testlist.toArray(linkedlist)
    expect(arraylist).toEqual([
      { data: { foo: 'bar' }, name: 'foo' },
      { data: { biz: 'baz' }, name: 'bar' },
    ])
  })
})
