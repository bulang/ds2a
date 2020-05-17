/**
 * 队列数据结构封装
 */
class Queue{
    constructor(){
        this.items = [];
    }
    // 数据进入队列
    enqueue(element){
        this.items.push(element);
    }
    // 数据出队列
    dequeue(){
        return this.items.shift();
    }
    // 清空队列
    clearQueue(){
        this.items = [];
    }
    // 队列长度
    size(){
        return this.items.length;
    }
    // 查询队列头部元素
    front(){
        return this.items[0];
    }
    // 判断队列是否为空
    isEmpty(){
        return this.items.length === 0;
    }
}

export default Queue;