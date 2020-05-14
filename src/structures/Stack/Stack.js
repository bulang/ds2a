/**
 * 栈结构封装
 */
class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        this.items = [];
    }
}

export default Stack;