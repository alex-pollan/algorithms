const _ = require('lodash');
const INFINITY = 99999;

class Graph {
    constructor(nodesCount) {
        this.nodesCount = nodesCount;
        this.matrix = new Matrix(nodesCount);

        for (let row = 0; row < this.nodesCount; row++) {
            for (let col = 0; col < this.nodesCount; col++) {
                this.matrix.setValue(row, col, INFINITY);
            }
        }
    }

    setEdge(fromNode, toNode, value) {
        if (fromNode === toNode) {
            throw new Error('from and to nodes must be different');
        }

        if (fromNode < 0 || fromNode >= this.nodesCount) {
            throw new Error('from node must be in range');
        }

        if (toNode < 0 || toNode >= this.nodesCount) {
            throw new Error('to node must be in range');
        }

        this.matrix.setValue(fromNode, toNode, value);
        this.matrix.setValue(toNode, fromNode, INFINITY);
    }

    getConnectedNodes(node) {
        const connections = [];
        for (let toNode = 0; toNode < this.nodesCount; toNode++) {
            const edgeValue = this.matrix.getValue(node, toNode);
            if (edgeValue !== INFINITY) {
                connections.push({
                    node: toNode,
                    value: edgeValue
                })
            }
        }
        return connections; 
    }

    print() {
        var output = '';
        for (let row = 0; row < this.nodesCount; row++) {
            for (let col = 0; col < this.nodesCount; col++) {
                output += this.matrix.getValue(row, col) + '\t';
            }
            output += '\n';
        }
        console.log(output);
    }
}

class Matrix {
    getValue(row, col) {
        return this.values[row * this.len + col];
    }

    setValue(row, col, v) {
        this.values[row * this.len + col] = v;
    }

    constructor(n) {
        this.len = n;
        this.values = [];
        for (let i = 0; i < n * n; i++) {
            this.values.push(INFINITY);
        }
    }
}

const graph = new Graph(6);

graph.setEdge(0, 3, 4);

graph.setEdge(1, 2, 9);

graph.setEdge(3, 1, 3);
graph.setEdge(3, 2, 1);
graph.setEdge(3, 4, 7);

graph.setEdge(2, 5, 6);

graph.setEdge(4, 5, 1);

graph.print();

findMinPath(0, 5);

function findMinPath(fromNode, toNode) {
    var subPath = [];
    var visited = [];
    const pathLen = getMinPath(fromNode, toNode, subPath);
    console.log(pathLen, subPath);
}

function getMinPath(fromNode, toNode, subPath) {
    console.log('getMinPath', fromNode, subPath);

    const connections = graph.getConnectedNodes(fromNode);
    var min = {node: null, value: INFINITY};

    console.log('connections: ', connections);
    for (let i = 0; i < connections.length; i++) {
        const connection = connections[i];

        if (connection.node === toNode) {
            console.log(`To node found ${toNode}`);
            min.value = connection.value;
            min.node = connection.node;
            break;
        }

        const len = subPath.length;
        const subPathLen = getMinPath(connection.node, toNode, subPath);
        if (subPathLen < min.value) {
            if (min.node) {
                console.log('better path found', fromNode, connection.node, subPath);
                subPath.splice(subPath.length - len);
            }
            min.value = subPathLen + connection.value;
            min.node = connection.node;
        }
    }

    if (min.value === INFINITY) {
        console.log('No path found from ', fromNode);
        return INFINITY;
    }

    subPath.unshift(min.node);
    
    return min.value;
}
