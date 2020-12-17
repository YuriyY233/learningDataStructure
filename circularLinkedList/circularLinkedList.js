const Node = require('../linkedList/node');
const defaultEquals = require('../linkedList/defaultEquals');
const LinkedList = require('../linkedList/linkedList')

class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.getElementAt(this.size() - 1);
            current.next = node;
        }
        // set node.next to head - to have circular list
        node.next = this.head;
        this.count++;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    // if no node  in list
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    console.log(this.size());
                    current = this.getElementAt(this.size() - 1);
                    console.log(current);
                    // update last element
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size() - 1);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                // no need to update last element for circular list
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}
let circu = new CircularLinkedList();
circu.push("adad")
circu.push("adad121")
circu.insert('我是天才', 0)
    // circu.push("12312")
    // console.log(circu.getElementAt(1));
    // console.log(circu.getElementAt(2));
    // console.log(circu.getElementAt(circu.size()));
console.log(circu.size());
module.exports = CircularLinkedList;