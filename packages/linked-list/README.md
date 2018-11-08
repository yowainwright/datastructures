![DataStructures TS](https://jeffry.in/assets/datastructures-ts/datastructures-ts.svg)

![Linked List](https://jeffry.in/assets/datastructures-ts/linked-list.svg)

----

The Linked List is a linear sttructure of Nodes. Each node is a seperate object.
Each data item (Node) is made with a relationsip to its nextNode.

This is the Linked List Package of [**Data Structures TS**](https://github.com/yowainwright/datastructures-ts).

----

## Setup

The commmands below provide package manager install instructions. Unpk support will be added momentarily.

### NPM

```sh

npm i @dsts/linked-list -D

```

### Yarn

```sh

yarn add @dsts/linked-list -D

```

----

## Usage

New Linked Lists can be created by importing the Linked List and setting them up similarily to the example below.

```javascript

import LinkedList from '@dsts/linked-list'

const List = new LinkedList()
List.appendNode('foo')
List.appendNode('bar')

```

Furthermore, the Linked List accepts nodes with a `name` and `data`. This creates the ability to find Nodes and also contain useful data with them.

```javascript

import LinkedList from '@dsts/linked-list'

const List = new LinkedList()
List.apendNode('foo', { ..,stuff})
List.apendNode('foo', { ..,otherStuff})

```

----

## API

![Linked List Illustration](https://jeffry.in/assets/datastructures-ts/linked-list-il.svg)

----

## Resources

The list below provides links to other helpful tools for understanding the Linked List data structure.

- [datastructures-js](https://github.com/datastructures-js/linked-list) by [Eyas Ranjous](https://github.com/eyas-ranjous)
- [coding-interview-university](https://github.com/jwasham/coding-interview-university#linked-lists) by [John Washam](https://github.com/jwasham)
- [Linked List](https://en.wikipedia.org/wiki/Linked_list) via Wikipedia
