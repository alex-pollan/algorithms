class Stack {
    constructor() {
        this.items = [];
    }

    length() {
        return this.items.length;
    }

    push(item) {
        this.items.unshift(item);
    }

    pop() {
        return this.items.splice(0, 1)[0];
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    length() {
        return this.stack1.length() + this.stack2.length();
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.length() === 0) {
            while (this.stack1.length() > 0) {
                this.stack2.push(this.stack1.pop());
            }            
        }
        
        if (this.stack2.length() > 0) {
            return  this.stack2.pop();
        }

        throw new Error('No more items');
    }
}

const values1 = [9, 4, 10, 34, 25];
const values2 = [6, 7, 12, 1, 2, 3];

const queue = new Queue();

const dequeued = [];

for (let i = 0; i< values1.length; i++){
    queue.enqueue(values1[i]);
}

for (let i = 0; i< values1.length / 2; i++){
    dequeued.push(queue.dequeue());
}

for (let i = 0; i< values2.length; i++){
    queue.enqueue(values2[i]);
}

while (queue.length() > 0){
    dequeued.push(queue.dequeue());
}

console.log(dequeued);


