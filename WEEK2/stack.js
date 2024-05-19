class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pushUnique(value) {
        let node = new Node(value);
        let curr = this.top;
        while(curr) {
            if(curr.value === value) {
                console.log("already exists not unique");
                return null;
                
            }
            curr = curr.next;
        }
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        }

        let delNode = this.top.value;
        this.top = this.top.next;
        this.size--;
        return console.log("removed elem",delNode);   ;
    }

    peek() {
        if(this.isEmpty() ) {
            console.log("stack empty");
            return null;
        }
        return this.top.value;
    }


    printStack () {
        if(this.isEmpty()) {
            console.log("stack empty");
            return null;
        }

        let curr = this.top;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

let stack = new Stack();

stack.printStack()
stack.push(10)
stack.push(20)
stack.printStack();

stack.pop()

stack.printStack()
