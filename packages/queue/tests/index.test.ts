import { describe, test, expect } from 'vitest'
import { queue } from '../src/index'

describe('queue', () => {
  test('init', () => {
    const result = queue()
    expect(Object.keys(result)).toEqual(['add', 'remove', 'length', 'print'])
  })

  test('add', () => {
    const result = queue().add('foo')
    expect(result.print()).toEqual(['foo'])
  })

  test('remove', () => {
    const result = queue().add('foo').add('bar').remove()
    expect(result.print()).toEqual(['bar'])
  })

  test('length', () => {
    const result = queue().add('foo').add('bar')
    expect(result.length()).toEqual(2)
  })

  test('print', () => {
    const result = queue().add('foo').add('bar')
    expect(result.print()).toEqual(['bar', 'foo'])
  })
})
