/**
 * 队列数据结构封装
 */
class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    clearQueue(){
        this.items = [];
    }
    size(){
        return this.items.length;
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
}

export default Queue;