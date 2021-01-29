# @datastructures/linked-list 🦄⛓

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40datastructures%2Flinked-list.svg)](https://badge.fury.io/js/%40datastructures%2Flinked-list)

A minimal functional typed implementation of a linked list.

Linked lists are a linear structure of items. Each item is a seperate object.
Each item is made with a relationship to its next item.

---

## Install

```sh
yarn add @datastructures/linked-list -D
```

---
## Usage

Create a list.

```javascript
import { list } from '@datastructures/linked-list'

const items = [ { name: 'foo',  data: { foo: 'bar'} }, { name: 'bar', data: { biz: 'baz', }}]
const tree = list.create(items)
const arrayList = list.toArray(tree)
```

---

## API

Data Structures Linked List API
#### `Methods`

**`create(items)`:** adds an array of items with a `name` and an optional `data` `{object}`.

> **ex:** `list.create()`

---

The list below provides links to other helpful tools for understanding the Linked List data structure.

- [datastructures-js](https://github.com/datastructures-js/linked-list) by [Eyas Ranjous](https://github.com/eyas-ranjous)
- [coding-interview-university](https://github.com/jwasham/coding-interview-university#linked-lists) by [John Washam](https://github.com/jwasham)
- [Linked List](https://en.wikipedia.org/wiki/Linked_list) via Wikipedia

## Examples

- [Functional Linked List in Array form](https://codepen.io/yowainwright/pen/eYmqeWo)
- [Class Linked List](https://codepen.io/yowainwright/pen/gObVeGG)

---

View other [**Data Structures**](../../).
