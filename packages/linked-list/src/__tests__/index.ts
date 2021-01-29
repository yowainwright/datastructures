import { constructArray, create, item, link, list, toArray } from '..'

describe('list', () => {
  test('item', () => {
    const result = item('foo', { foo: 'bar' })
    expect(typeof result).toEqual('object')
    expect(result.name).toEqual('foo')
    expect(result.data).toEqual({ foo: 'bar' })
  })

  test('link', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const result = link(a, b)
    expect(result).toEqual({
      item: { data: { biz: 'baz' }, name: 'bar' },
      nextItem: { data: { foo: 'bar' }, name: 'foo', nextItem: null },
    })
  })

  test('create', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const result = create([a, b])
    expect(result).toEqual({
      item: { data: { biz: 'baz' }, name: 'bar' },
      nextItem: { data: { foo: 'bar' }, name: 'foo', nextItem: null },
    })
  })

  test('constructArray', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const testList = create([a, b])
    expect(testList).toEqual({
      item: { data: { biz: 'baz' }, name: 'bar' },
      nextItem: { data: { foo: 'bar' }, name: 'foo', nextItem: null },
    })
    const arraylist = constructArray(testList)
    expect(arraylist).toEqual({})
  })

  test('toArray', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const testList = create([a, b])
    expect(testList).toEqual({
      item: { data: { biz: 'baz' }, name: 'bar' },
      nextItem: { data: { foo: 'bar' }, name: 'foo', nextItem: null },
    })
    const arraylist = toArray(testList)
    expect(arraylist).toEqual({})
  })

  test('list.create', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const result = list().create([a, b])
    expect(result).toEqual({
      item: { data: { biz: 'baz' }, name: 'bar' },
      nextItem: { data: { foo: 'bar' }, name: 'foo', nextItem: null },
    })
  })

  test('list.toArray', () => {
    const a = item('foo', { foo: 'bar' })
    const b = item('bar', { biz: 'baz' })
    const testlist = list()
    const linkedlist = testlist.create([a, b])
    expect(linkedlist).toEqual({
      item: { data: { biz: 'baz' }, name: 'bar' },
      nextItem: { data: { foo: 'bar' }, name: 'foo', nextItem: null },
    })
    const arraylist = testlist.toArray(linkedlist)
    expect(arraylist).toEqual({})
  })
})
