const defaultEquals = require('./defaultEquals');
const Node = require('./node');

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element) {
        let node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    insert(node, index) {

    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    getElementAt(index) {

    }
    remove() {

    }
    indexOf() {

    }
    size() {

    }
    isEmpty() {

    }
    toString() {

    }
}
const list = new LinkedList();
list.push(14);
list.push(10);
list.push(18);
list.push(20)
list.push(30)
list.push(40)
console.log(list.head.next.next.next);