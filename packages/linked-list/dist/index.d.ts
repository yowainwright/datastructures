/**
 * LINKED LIST ⛓
 * ----
 * The Linked List Node is a Linear Structure of Nodes. Each node is a seperate object
 * represents a list of nodes containing information (values)
 */
/**
 * Linked List Node
 */
export declare type NodeObject = {
    name: string;
    data?: object | null;
    nextNode?: NodeObject | null;
} | null;
export declare const Node: (name: string, data?: object, nextNode?: {
    name: string;
    data?: object;
    nextNode?: any;
}) => {
    name: string;
    data?: object;
    nextNode?: any;
};
declare class LinkedList {
    headNode: NodeObject;
    tailNode: NodeObject;
    debug: boolean;
    constructor(headNode?: NodeObject, debug?: boolean);
    /**
     * appendNode
     * @param {string} name
     * @returns {Node} Node
     */
    appendNode(name: string, data?: object | null): void;
    /**
     * removeNode
     * @param {string} name
     */
    removeNode(name: string): void;
    /**
     * traverseList
     * @param {function} callback
     */
    traverseList(callback: Function): void;
    appendNodeAt(nodePosition: number, name: string): void;
    /**
     * reverseList
     */
    reverseList(): void;
    /**
     * findNode
     * @param {value} value
     */
    findNode(name: string): {
        name: string;
        data?: object;
        nextNode?: any;
    };
    /**
     * toArray
     * presents a linkedList as an array
     */
    toArray(): any[];
    getIndexOfNode(name: string): number;
    /**
     * length
     * returns the length of a linkedList
     */
    length(): number;
    /**
     * clear
     * clears a linkedList
     */
    clear(): void;
    /**
     * removeDuplicateNodes
     * removes duplicateNodes
     */
    removeDuplicateNodes(): void[];
    /**
     * constructNewList
     * constructs a New List from Node Objects
     */
    constructNewList(nodes: NodeObject[]): void[];
}
export { LinkedList };
