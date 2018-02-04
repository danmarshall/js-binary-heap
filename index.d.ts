/**
 * Creates a binary heap.
 *
 * @constructor
 * @param {function} customCompare An optional custom node comparison
 * function.
 */
declare class BinaryHeap<K, V> {
    list: {
        key: K;
        value: V;
    }[];
    constructor(customCompare: (a: {
        key: K;
        value: V;
    }, b: {
        key: K;
        value: V;
    }) => -1 | 0 | 1);
    /**
     * Builds a heap with the provided keys and values, this will discard the
     * heap's current data.
     *
     * @param {Array} keys An array of keys.
     * @param {Array} values An array of values. This must be the same size as the
     * key array.
     */
    buildHeap(keys: K[], values: V[]): void;
    /**
     * Clears the heap's data, making it an empty heap.
     */
    clear(): void;
    /**
     * Extracts and returns the minimum node from the heap.
     *
     * @return {Node} node The heap's minimum node or undefined if the heap is
     * empty.
     */
    extractMinimum(): {
        key: K;
        value: V;
    };
    /**
     * Returns the minimum node from the heap.
     *
     * @return {Node} node The heap's minimum node or undefined if the heap is
     * empty.
     */
    findMinimum(): {
        key: K;
        value: V;
    };
    /**
     * Inserts a new key-value pair into the heap.
     *
     * @param {Object} key The key to insert.
     * @param {Object} value The value to insert.
     * @return {Node} node The inserted node.
     */
    insert(key: K, value: V): {
        key: K;
        value: V;
    };
    /**
     * @return {boolean} Whether the heap is empty.
     */
    isEmpty(): boolean;
    /**
     * @return {number} The size of the heap.
     */
    size(): number;
    /**
     * Joins another heap to this one.
     *
     * @param {BinaryHeap} otherHeap The other heap.
     */
    union(otherHeap: BinaryHeap<K, V>): void;
    /**
     * Compares two nodes with each other.
     *
     * @private
     * @param {Object} a The first key to compare.
     * @param {Object} b The second key to compare.
     * @return -1, 0 or 1 if a < b, a == b or a > b respectively.
     */
    compare(a: {
        key: K;
        value: V;
    }, b: {
        key: K;
        value: V;
    }): 1 | -1 | 0;
}
/**
 * Heapifies a node.
 *
 * @private
 * @param {BinaryHeap} heap The heap containing the node to heapify.
 * @param {number} i The index of the node to heapify.
 */
declare function heapify<K, V>(heap: BinaryHeap<K, V>, i: number): void;
/**
 * Builds a heap from a node array, this will discard the heap's current data.
 *
 * @private
 * @param {BinaryHeap} heap The heap to override.
 * @param {Node[]} nodeArray The array of nodes for the new heap.
 */
declare function buildHeapFromNodeArray<K, V>(heap: BinaryHeap<K, V>, nodeArray: {
    key: K;
    value: V;
}[]): void;
/**
 * Swaps two values in an array.
 *
 * @private
 * @param {Array} array The array to swap on.
 * @param {number} a The index of the first element.
 * @param {number} b The index of the second element.
 */
declare function swap(array: any[], a: any, b: any): void;
/**
 * Gets the index of a node's parent.
 *
 * @private
 * @param {number} i The index of the node to get the parent of.
 * @return {number} The index of the node's parent.
 */
declare function getParent(i: number): number;
/**
 * Gets the index of a node's left child.
 *
 * @private
 * @param {number} i The index of the node to get the left child of.
 * @return {number} The index of the node's left child.
 */
declare function getLeft(i: number): number;
/**
 * Gets the index of a node's right child.
 *
 * @private
 * @param {number} i The index of the node to get the right child of.
 * @return {number} The index of the node's right child.
 */
declare function getRight(i: number): number;
/**
 * Creates a node.
 *
 * @constructor
 * @param {Object} key The key of the new node.
 * @param {Object} value The value of the new node.
 */
declare class Node<K, V> {
    key: K;
    value: V;
    constructor(key: K, value: V);
}
declare module "@tyriar/binary-heap" {
    export = BinaryHeap;
}
