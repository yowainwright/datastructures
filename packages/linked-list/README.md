![DataStructures TS](https://jeffry.in/assets/datastructures/datastructures.svg)

![Linked List](https://jeffry.in/assets/datastructures/linked-list.svg)

---

The Linked List is a linear structure of Nodes. Each node is a seperate object.
Each data item (Node) is made with a relationship to its `nextNode`.

---

## Setup

Install

```sh

npm i @datastructures/linked-list -D

# or

yarn add @datastructures/linked-list -D

```

---

## Usage

New Linked Lists can be created by importing the Linked List and setting them up similarly to the example below.

```javascript
import { LinkedList } from '@datastructures/linked-list'

const List = new LinkedList()
List.appendNode('foo')
List.appendNode('bar')
```

Furthermore, the Linked List accepts nodes with a `name` and `data`. This creates the ability to find Nodes and contain useful data with them.

```javascript
import { LinkedList } from '@datastructures/linked-list'

const List = new LinkedList()
List.appendNode('foo', data)
List.appendNode('foo', data)
```

---

## API

![Linked List Illustration](https://jeffry.in/assets/datastructures-ts/linked-list-il.svg)

Listed below is the Linked List API.

#### `Node Arguments`

**`name`:** when adding a Node a `string` is always **required**

> **ex:** `const List = LinkedList(); List.appendNode('foo')`

**`data`:** a data `{object}` for containing useful data with a Node

> **ex:** `const List = LinkedList(); List.appendNode('foo', { name: 'foo' })`

#### `Methods`

**`appendNode(name, data)`:** adds a Node with a `name` and an optional `data` `{object}` to the List.

> **ex:** `List.appendNode('foo')`

**`removeNode(name)`:** removes a Node by `name` from the List

> **ex:** `List.removeNode('foo')`

**`traverseList(fn)`:** envokes a callback function (`fn`) on each node within a list

> **ex:** `const fn = (node) => console.log("This node's name is ", node.name); List.removeNode(fn)`

**`appendNodeAt(index, name)`:** moves a pre-existing node to a certain position within the list by `index` and `name`

> **ex:** `List.appendNodeAt(2, 'foo')`

**`reverseList`:** reverses the order of Nodes within a List

> **ex:** `List.reverseList()`

**`findNode(name)`:** finds a Node within a List based on Node `name`

> **ex:** `List.findNode('foo')`

**`toArray`:** returns a List as an array

> **ex:** `List.toArray()`

**`getIndexOfNode(name)`:** returns the `index` of Node with a list based on Node `name`

> **ex:** `List.getIndexOfNode('foo')`

**`length`:** returns the length of the List

> **ex:** `List.length()`

**`clear`:** clears the List

> **ex:** `List.clear()`

**`removeDuplicateNodes`:** removes nodes that have the same `name`

> **ex:** `List.removeDuplicateNodes()`

**`constructNewList`:** creates a new List with an array of Nodes

> **ex:** `const nodes = [{ name: 'foo' }, { name: 'bar' }];List.constructNewList(nodes)`

---

## Resources

The list below provides links to other helpful tools for understanding the Linked List data structure.

- [datastructures-js](https://github.com/datastructures-js/linked-list) by [Eyas Ranjous](https://github.com/eyas-ranjous)
- [coding-interview-university](https://github.com/jwasham/coding-interview-university#linked-lists) by [John Washam](https://github.com/jwasham)
- [Linked List](https://en.wikipedia.org/wiki/Linked_list) via Wikipedia

## Code Examples

- [Functional Linked List in Array form](https://codepen.io/yowainwright/pen/eYmqeWo)
- [Class Linked List](https://codepen.io/yowainwright/pen/gObVeGG)

---

This is the Linked List Package of [**Data Structures TS**](../../).
