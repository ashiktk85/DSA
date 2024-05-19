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

    returnSize() {
        return this.size;
    }

    prepend(value) {
        let node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    
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
            this.size++;
        }
    }

  insertion(value, index) {
    let node = new Node(value);
    if(index < 0 ) {
        console.log("invalid index");
        return null;
    } else {
        let curr = this.head;
        for(let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
    }
    this.size++;
  }

  deletion (index) {
    if(index < 0 || index > this.size) {
        console.log("invalid");
        return null;
    }
    let removeIndex = this.head;
    if(index === 0) {
        removeIndex = this.head;
        this.head = this.head.next;
    } else {
        let prev = this.head;
        for(let i = 0; i < index -1; i++) {
            prev = prev.next;
        }
        removeIndex = prev.next;
        prev.next = removeIndex.next;
    }
  }

  removeValue(value) {
    if(this.isEmpty()) {
        console.log("list empty");
    }
    let removeNode;
    if(this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        console.log("first value removed");
        return value;
    } else {
        let prev = this.head;
        while(prev.next && prev.next.value !== value) {
            prev = prev.next;
        }
        if(prev.next) {
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
    }
    return null;
  }

 serachValue(value) {
    if(this.isEmpty()) {
        console.log("empty");
        return -1;
    } else {
        let i =0; 
        let curr = this.head;
        while(curr) {
            if(curr.value == value) {
                return i;
            } else{
                curr = curr.next;
                i++;
            }
        }
        return -1;
    }
 }


 searchTwo(val1, val2) {
    if(this.isEmpty()) {
        return -1;
    } else {
        let count = 0;
        let prev = this.head;
        while(prev) {
            if(prev.value == val1) {
                count ++;

            } else if(prev.value == val2) {
                count++;
            }
            prev = prev.next;
        }
        if(count >= 2) {
            return true;
        } else {
            return false;
        }
    }

 }

 reverse() {
    let prev = null;
    let curr = this.head;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    this.head = prev;
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
    }
}

const list = new LinkedList();

list.print()
list.prepend(10)
list.print()
list.append(100)
list.append(23)
list.insertion(99,3)
list.print()  
    // console.log(list.searchTwo(23));  

    list.reverse()

    list.print()




