class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex (vertex) {
        if(!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdges (vertex1, vertex2) {
        if(!this.adjacentList[vertex1]) {
            this.addVertex[vertex1];
        }
        if(!this.adjacentList[vertex2]) {
            this.addVertex[vertex2]
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1)
    }

    hasEdge (vertex1 , vertex2) {
        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1))
    }

    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1)
    }

    deleteVertex(vertex) {
        if(this.adjacentList[vertex]) {
            for(let node in this.adjacentList) {
                this.removeEdge(vertex, node)
            }
            return delete this.adjacentList[vertex]
        } else {
            return null;
        }
    }
}