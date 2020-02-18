class Queue {
    constructor() {
        this.data = []
    }
    add(record) {
        return this.data.unshift(record)
    }
    remove(){
        return this.data.pop()
    }
}


const queue1 = new Queue();
console.log(queue1.add(1));
console.log(queue1.add(5));