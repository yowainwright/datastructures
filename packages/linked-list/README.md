# @datastructures/linked-list ⛓

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40datastructures%2Flinked-list.svg)](https://badge.fury.io/js/%40datastructures%2Flinked-list)

<<<<<<< Updated upstream
The Linked List is a linear structure of Nodes. Each node is a seperate object.
Each Node is made with a relationship to its nextNode.
=======
A minimal functional typed implementation of a linked list. 🦄

Linked lists are a linear structure of items. Each item is a seperate object.
Each item is made with a relationship to its next item.
>>>>>>> Stashed changes

---

## Install

```sh
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
const items = [ { name: 'foo',  data: { foo: 'bar'} }, { name: 'bar', data: { biz: 'baz', }}]
const tree = list.create(items)
// output
const arrayList = list.toArray(tree)
// array
// from here feel free to add other testable methods to satify your interviewer 🙋
```

---

## API

DataStructures Linked List API

#### `Node Arguments`

**`name`:** when adding a list a `string` is always **required**
**`data`:** a data `{object}` for containing useful data with a Node
**`nextNode`:** the next node of the data structure

---

#### `Methods`

**`create(items)`** creates a list from an array of items with a `name` and an optional `data` `{object}`
> **ex:** `list.create([ { name: 'foo',  data: { foo: 'bar'} }, { name: 'bar', data: { biz: 'baz', }}])`
**`toArray(items)`** creates an array of items with a `name` and an optional `data` `{object}` from a list
> **ex:** `list.toArray(someLinkedList)`

---

## Resources

The list below provides links to other helpful tools for understanding the Linked List data structure.

- [datastructures-js](https://github.com/datastructures-js/linked-list) by [Eyas Ranjous](https://github.com/eyas-ranjous)
- [coding-interview-university](https://github.com/jwasham/coding-interview-university#linked-lists) by [John Washam](https://github.com/jwasham)
- [Linked List](https://en.wikipedia.org/wiki/Linked_list) via Wikipedia

---

## Examples

- [Functional Linked List in Array form](https://codepen.io/yowainwright/pen/eYmqeWo)
- [Class Linked List](https://codepen.io/yowainwright/pen/gObVeGG)

---

## Data Structures 🦄

**Basic. functional. Typed. Data Structures.**

Functional typed data structures offering structure clarity and simplicity.

---

View other [data structures](https://github.com/yowainwright/data-structures).
