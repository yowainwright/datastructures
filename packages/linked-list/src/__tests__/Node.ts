declare function test(msg: string, test: Function)
declare function expect (result: any)

import { Node } from '../Node'

test('Node init', function testNodeInit () {
  const node = Node('foo')
  expect(typeof node).toEqual('object')
  expect(node.name).toEqual('foo')
  expect(node.data).toEqual(null)
})
