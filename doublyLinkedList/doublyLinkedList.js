const Node = require('../linkedList/node');
const defaultEquals = require('../linkedList/defaultEquals');
const LinkedList = require('../linkedList/linkedList')
class DoublyNode extends Node {
    constructor(element, prev, next) {
        super(element, next);
        this.prev = prev;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            let node = new DoublyNode(element);
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    let current = this.head;
                    current.prev = node;
                    this.head = node;
                    node.next = current;
                }
            } else if (index === this.count) {
                let current = this.tail;
                this.tail = node;
                current.next = node;
                node.prev = current;
            } else {
                let previous = this.getElementAt(index - 1);
                let current = previous.next;
                previous.next = node;
                node.prev = previous;
                node.next = current;
                current.prev = node;
            }
            this.count++;
            return true
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                let prev = this.getElementAt(index - 1);
                current = prev.next;
                prev.next = current.next;
                current.next.prev = pre;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}