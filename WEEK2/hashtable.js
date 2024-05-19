class Hashtable {
    constructor() {
        this.size = 10;
        this.table = new Array(this.size)
    }

    hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
    }

    set(key , value) {
        let index = this.hash(key);

        if(!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push(key, value)
    }

    get(key) {
        let index = this.hash(key);

        if(!this.table[index]) {
            return undefined;
        }

        for(let i = 0; i < this.table[index].length; i++) {
            const pair = this.table[index];
            if(pair[0] === key) {
                return pair[1]
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);

        if(!this.table[index]) {
            return null;
        }
        let pairs = this.table[index];
        for(let i = 0; i  < pairs.length; i++) {
            if(pairs[i, 0] === key) {
                key.splice(i, 1)
                return true;
            }
        }
        return false;
    }
    
}

let hash = new Hashtable();

hash.set("ashk", 7)

console.log(hash.get("ashk"));
