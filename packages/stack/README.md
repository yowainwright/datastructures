# @datastructures/stack 🥞

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40datastructures%2Fstack.svg)](https://badge.fury.io/js/%40datastructures%2Fstack)

#### A minimal functional typed implementation of a stack. 🦄

An ordered structure of data inputs obeying the principle of last in, first out.

---

## Install

```sh
yarn add @datastructures/stack -D
```

---
## Usage

```typescript
import { stack } from '@datastructures/stack'

const pancake = stack()
pancake.add('one pancaka')
pancake.add('two pancaka')
// I'm so hungry
pancake.remove() // yum, pancaka remove
pancake.print() // one pancaka
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

