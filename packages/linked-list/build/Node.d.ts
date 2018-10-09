/**
 * Linked List Node
 * ----
 * represents a node containing information called a value
 * it may also provide information about the next node (sibling node)
 */
declare class Node<T> {
    /**
     * @param value
     * the value of the linked list node
     */
    /**
     * @param nextNode
     * the next LinkedListNode || or null
     * it is null if it is the last LinkedListNode
     */
    value: T;
    nextNode: Node<T> | null;
    constructor(value: T, nextNode?: Node<T> | null);
    /**
     * @returns the linked list node value
     */
    getNodeValue(): T;
    /**
     * @returns the next list node
     */
    getNextNode(): Node<T> | null;
    /**
     * sets the linked list node value
     */
    setNodeValue(value: T): void;
    /**
     * sets the linked list node value
     */
    setNextNode(nextNode: Node<T> | null): void;
}
export { Node };
