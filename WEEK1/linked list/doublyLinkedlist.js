class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
 }

 class DoublyLinkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    first(value) {
        let node = new Node(value);
        node.next = this.head;
        if(this.head) {
            this.head.prev  =  node;
        }
        this.head = node;
    }
 }