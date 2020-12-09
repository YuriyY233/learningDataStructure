const defaultEquals = require('./defaultEquals');
const Node = require('./node');

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element) {
        const node = new Node(element);
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
}
const list = new LinkedList();
list.push(14);
list.push(10);
list.push(18);
list.push(20)
list.push(30)
list.push(40)
console.log(list.head.next.next.next);