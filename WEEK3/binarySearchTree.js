class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearch {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }

    }

    insertNode(root, node) {
        if (root.value < node.value) {
            if (root.right == null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        } else {
            if (root.left == null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true;
            } else if (root.value < value) {
                return this.search(root.right, value)
            } else {
                return this.search(root.left, value)
            }
        }


    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.preOrder(root.left);
            this.preOrder(root.right)
            console.log(root.value)
        }
    }

    inOrder(root) {
        if (root) {
            this.preOrder(root.left)
            console.log(root.value);
            this.preOrder(root.right)
        }
    }

    bfs(root) {

        if(!root) {
            return null;
        } 

        let queue = [root];

        while(queue.length > 0) {
            let node =  queue.shift();

            console.log(node.value);

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }

    bstArray(root) {
        if (!root) {
            return null;
        }

        let result = [];
        let queue = [root];

        while (queue.length > 0) {
            let node = queue.shift();
            if (node) {
                result.push(node.value);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                result.push(null);
            }
        }
        return result;
    }

    isCompleteBST(root) {
        if (!root) {
            return true;
        }

        let queue = [root];
        let nullFound = false;

        while (queue.length > 0) {
            let node = queue.shift();

            if (node === null) {
                nullFound = true;
            } else {
                if (nullFound === true) {
                    return false;
                }
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        return queue;
    }

    isFull(root) {

        if (!root) {
            return true;
        }

        if (!root.left && !root.right) {
            return true;
        }

        if (root.left && root.right) {
            return this.isFull(root.left) && this.isFull(root.right)
        }
        return false;
    }

}



let bst = new BinarySearch();
bst.insert(12)
bst.insert(6)
bst.insert(15)
bst.insert(5)
bst.preOrder(bst.root);
console.log(bst.search(bst.root, 12));
console.log(bst.search(bst.root, 5));
console.log(bst.bstArray(bst.root));
