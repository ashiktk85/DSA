class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    sizeReturn() {
        return this.size;
    }


// O(1) -constant
    prepend(value) {
        let node = new Node(value);
        if(this.isEmpty() ) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
//  O(n) - linear
    append(value) {
        let node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

  
    print() {
        if(this.isEmpty()) {
            console.log("Linked list is empty");
        } else {
            let curr = this.head;
            let linkedList = '';

            while(curr) {
                linkedList = linkedList + `${curr.value} `;
                curr = curr.next;
            }
            console.log(linkedList);
        }
        this.size++;
    }
}

const list = new LinkedList() ;
list.print()
list.prepend(20)
list.print()
list.prepend(30)
list.prepend(11)
list.print()
list.append(90)
list.print()
list.insert(100, 2)
list.insert(1,0)
list.print()


