/**
 * @ingore
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * Credits: This project directly inherits from eyas-ranjous/datastructures-js 🙏
 * ----
 * represents a list of nodes containing information (values)
 */
import { Node } from './Node';
declare class LinkedList<T> {
    headNode: Node<T> | null;
    nodeCount: number;
    constructor(nodeCount?: number | 0, headNode?: Node<T> | null);
    appendNode(value: T): Node<T>;
    /**
     * Add methods
     */
    /**
     * @param value value
     * adds a new node to the beginning of the linkedList
     */
    addFirstNode(value: T): void;
    /**
     * @param value of node
     * @param Node
     * addLast adds a Linked List Node last
     */
    addLastNode(value: T, lastNode?: Node<T> | null): void;
    /**
     * @param value => value of current node
     * @param newValue => value of new node
     * @param current => the current node
     * addLast adds a Linked List Node last
     */
    addAfterNode(nodeValueMatch: T, newValue: T, current?: Node<T> | null): void;
    /**
     * @param value => existing node value
     * @param newValue => value of new node
     * @param previous => previous node
     * @param current => the current node
     * addLast adds a Linked List Node last
     */
    addBeforeNode(value: T, newValue: T, previous?: Node<T> | null, current?: Node<T> | null): void;
    /**
     * @param value
     * @param  previous node
     * @param current node
     * removes a node by its value from the linkedlist
     */
    removeNode(value: T, previous: Node<T> | null, current?: Node<T> | null): void;
    /**
     * removes the first node
     */
    removeFirstNode(): void;
    /**
     * @param  previous node
     * @param current node
     */
    removeLastNode(previous?: Node<T> | null, current?: Node<T> | null): void;
    /**
     * @param a callback
     * @param the current first node
     */
    traverseLinkedList(cb: (nodeValue: T) => void, current?: Node<T> | null): void;
    /**
     * @returns a linked list node
     */
    findNode(value: T, current?: Node<T> | null): Node<T> | null;
    /**
     * Convenience methods
     */
    /**
     * @returns the headNode
     */
    getHeadNode(): Node<T> | null;
    /**
     * @returns the node code
     */
    getNodeCount(): number;
}
export { LinkedList };
