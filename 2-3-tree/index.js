class Node {
    constructor(value, leftChild, rightChild) {
        this.children = [];
        this.values = [];
        if (value) {
            this.values.push(value);

            if (leftChild && rightChild) {
                this.children.push(leftChild, rightChild);
            }
        }
    }

    is4() {
        return this.values.length === 3;
    }

    getChildForValue(value) {
        if (this.children.length === 0) {
            return null;
        }

        for (let i = 0; i < this.values.length; i++) {
            if (value < this.values[i]) {
                return this.children[i];
            }
        }

        //greater than last value
        return this.children[this.children.length - 1];
    }

    addValue(value) {
        if (this.is4()){
            throw new Error('can not add a value to a 4-node')
        }

        for (let i = 0; i < this.values.length; i++) {
            if (value < this.values[i]) {
                this.values.splice(i, 0, value);
                return;
            }
        }

        this.values.push(value);
    }

    split() {
        if (!this.is4()) {
            throw new Error('Can not split if not 4-node');
        }

        let leftNode, 
            rightNode;
            
        if (this.children.length > 0) {
            leftNode = new Node(this.values[0], this.children[0], this.children[1]);
            rightNode = new Node(this.values[2], this.children[2], this.children[3]);
        } else {
            leftNode = new Node(this.values[0]);
            rightNode = new Node(this.values[2]);
        }

        return {
            leftNode: leftNode,
            middleValue: this.values[1],
            rightNode: rightNode
        };
    }

    removeChild(child) {
        for (let i = this.children.length - 1; i >= 0; i--) {
            if (child === this.children[i]) {
                this.children.splice(i, 1);
                return;
            }
        }
    }
    
    addMovedUpValue(value, leftChild, rightChild) {
        if (this.is4()) {
            throw new Error('can not add a value to a 4-node')
        }
        
        for (let i = 0; i < this.values.length; i++) {
            if (value < this.values[i]) {
                this.values.splice(i, 0, value);
                this.children.splice(i, 0, leftChild, rightChild);
                return;
            }
        }

        this.values.push(value);
        this.children.push(leftChild, rightChild);
    }

    print(indentation) {
        var indent = '';
        for (let i = 0; i < indentation; i++) {
            indent += '\t';
        }
        
        console.log('\t', this.values);
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].print(indentation + 1);
        }
    }
}

class Tree {
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        doInsert(this.root, value);

        if (this.root.is4()) {
            const splitResult = this.root.split();
            this.root = new Node(splitResult.middleValue, splitResult.leftNode, splitResult.rightNode);
        }

        function doInsert(node, value) {
            const child = node.getChildForValue(value);

            if (child === null) {
                node.addValue(value);
                return;
            }

            //has child
            doInsert(child, value);

            //balance?
            if (child.is4()) {
                const splitResult = child.split();
                node.removeChild(child);
                node.addMovedUpValue(splitResult.middleValue, splitResult.leftNode, splitResult.rightNode);
            }
        }
    }

    print() {
        this.root.print(1);
    }
}

const t = new Tree();

t.insert(5);
t.insert(2);
t.insert(6);
t.insert(9);
t.insert(4);
t.insert(10);
t.insert(1);

t.print();