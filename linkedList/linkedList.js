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
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                let temp = this.head;
                node.next = temp;
                this.head = node;
            } else {
                let previous = this.getElementAt(index - 1);
                previous.next = node;
                node.next = previous.next;
            }
            this.count++;
            return true
        }
        return false;
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
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            for (let i = 0; i < index && current != null; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    remove(index) {
        if (index == 0) {
            let current = this.head;
            this.head = current.next;
        } else {
            const previous = this.getElementAt(index - 1);
            const current = this.getElementAt(index);
            previous.next = current.next;
        }
        this.count--;
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(current.element, element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 0; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next;
        }
        return objString;
    }
}
const list = new LinkedList();
list.push(14);
list.push(10);
// list.push(18);
// list.push(20)
// list.push(30)
// list.push(40)
// console.log(list.indexOf(18));

module.exports = LinkedList;