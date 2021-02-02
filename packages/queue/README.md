# @datastructures/queue ➡️|➡️|

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40datastructures%2Fqueue.svg)](https://badge.fury.io/js/%40datastructures%2Fqueue)

#### A minimal functional typed implementation of a queue. 🦄

An ordered structure of data inputs obeying the principle of first in, first out.

---

## Install

```sh
yarn add @datastructures/queue -D
```

---
## Usage

```typescript
import { queue } from '@datastructures/queue'

const todo = queue()
todo.add('do laundry')
todo.add('wash car')
todo.remove()
todo.print() // => 'wash car'
todo.length() // => 1
```

---

## API

#### `Methods`

**`add(item)`** adds an item to the queue
> **ex:** `queue.add('foo')`
**`remove()`** removes the last item from the queue
> **ex:** `queue.remove()`
**`length()`** returns the length of the queue
**`print()`** prints all items in the queue

---

## Data Structures 🦄

#### Basic. Functional. Typed. Data Structures.

Functional typed data structures offering structure clarity and simplicity.

---

#### View other [data structures](https://github.com/yowainwright/data-structures).

