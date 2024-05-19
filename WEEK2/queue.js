class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }


    enqueue (value) {

        let node = new Node(value);
        if(this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("queue empty");
            return null;
        } 

        if(this.size === 1) {
            let delNode = this.front.value;
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }
        this.size--;
            
        
    }

    print() {
        if(this.isEmpty()) {
            console.log("queue is empty");
            return null;
        }

        let curr = this.front;

        while(curr !== null) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

let queue = new Queue();

queue.print();

queue.enqueue(10)
queue.enqueue(20)

queue.print()

queue.dequeue()

console.log("\n");

queue.print()

