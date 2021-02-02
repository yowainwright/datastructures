# @datastructures/linked-list ⛓

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40datastructures%2Flinked-list.svg)](https://badge.fury.io/js/%40datastructures%2Flinked-list)

#### A minimal functional typed implementation of a linked list. 🦄

Linked lists are a linear structure of items. Each item is a seperate object.
Each item is made with a relationship to its next item.

---

## Install

```sh
yarn add @datastructures/linked-list -D
```

---
## Usage

```typescript
import { list } from '@datastructures/linked-list'

const items = [ { name: 'foo',  data: { foo: 'bar'} }, { name: 'bar', data: { biz: 'baz', }}]
const tree = list.create(items)
// output
const arrayList = list.toArray(tree)
// array  [ { name: 'foo',  data: { foo: 'bar'} }, { name: 'bar', data: { biz: 'baz', }}]
// from here feel free to add other testable methods to satify your interviewer 🙋
```

---

## API

#### `Items`

Items are optional objects constructed using an `item` function. Optionally, to create a list of items, an array of items can be passed into a `list.create()` method. 

**`name`:** when adding a list a `string` is always **required**

**`data`:** a data `{object}` for containing useful data with a Node

> **ex:** const node = item('foo', { foo: "bar" }); const linkedList = list.create(node)

---

#### `Methods`

**`create(items)`** creates a list from an array of items with a `name` and an optional `data` `{object}`

> **ex:** `list.create([ { name: 'foo',  data: { foo: 'bar'} }, { name: 'bar', data: { biz: 'baz', }}])`

**`toArray(items)`** creates an array of items with a `name` and an optional `data` `{object}` from a list

> **ex:** `list.toArray(someLinkedList)`

---

## Data Structures 🦄

#### Basic. Functional. Typed. Data Structures.

Functional typed data structures offering structure clarity and simplicity.

---

#### View other [data structures](https://github.com/yowainwright/data-structures).
