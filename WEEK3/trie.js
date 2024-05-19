class TrieNode {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root =  new TrieNode();
    }

    insert (word) {
        let curr = this.root;
        for(let char of word) {
            if(!curr.children.has(char)) {
                curr.children.set(char, new TrieNode())
            }
            curr = curr.children.get(char);
        }
        curr.end = true;
    }

    search (word) {
        let curr = this.root;
        for(let char of word) {
            if(!curr.children.has(char)) {
                return false;
            }
            curr = curr.children.get(char);
        }
        return curr.end;
    }

    remove(word) {
       if(!thid.search(word)) {
        return false;
       } 
       this.removeHelper(this.root, word, 0);
    }

    display() {
        console.log(this.root.children);
    }
}

let trie = new Trie()
trie.insert("ashik");
trie.insert("udayan");
trie.insert("ajax")
trie.insert("ashley")

trie.display()