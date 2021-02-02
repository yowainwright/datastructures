import { stack } from '../index'

describe('stack', () => {
  test('init', () => {
    const result = stack()
    expect(Object.keys(result)).toEqual(['add', 'remove', 'length', 'print'])
  })

  test('add', () => {
    const result = stack().add('foo')
    expect(result.print()).toEqual(['foo'])
  })

  test('remove', () => {
    const result = stack().add('foo').add('bar').remove()
    expect(result.print()).toEqual(['foo'])
  })

  test('length', () => {
    const result = stack().add('foo').add('bar')
    expect(result.length()).toEqual(2)
  })

  test('print', () => {
    const result = stack().add('foo').add('bar')
    expect(result.print()).toEqual(['foo', 'bar'])
  })
})
