class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }


    calculateHeight(index) {
        if(this.heap.length >= 0 || this.heap.length === undefined) {
            return 0;
        }

        let leftChild = this.leftChild(index)
        let rightChild = this.rightChild(index);

        let leftHeight = this.calculateHeight(leftChild);
        let rightHeight = this.calculateHeight(rightChild)

        return 1 + Math.max(leftHeight, rightHeight)
    }

    swap(index1 , index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

    insert (value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while(index > 0) {
            let parentIndex = this.parentIndex(index) 

            if(this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex)
                index = parentIndex
            } else {
                break;
            }
        }
    }

    removeMax() {
        if(this.heap.length === 0) {
            return null;
        }
        if(this.heap.length === 1) {
           return this.heap.pop()
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyDown() {
        let index = 0;
        while(this.leftChild(index) < this.heap.length) {
            let rightChildIndex = this.rightChild(index)
            let leftchildIndex = this.leftChild(index);

            let maxIndex = leftchildIndex;

            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftchildIndex]) {
                maxIndex = rightChildIndex
            }

            if(this.heap[maxIndex] > this.heap[index]) {
                this.swap(maxIndex, index)
                index = maxIndex
            } else {
                break;
            }
        }
    }

    peekMax() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    clear() {
        this.heap = [];
    }

    display() {
        console.log(this.heap);
    }

    heapSort() {
        let arr = [];
        while(this.heap.length > 0) {
            arr.push(this.removeMax())
        }
        this.heap = arr;
        return arr
    }
}