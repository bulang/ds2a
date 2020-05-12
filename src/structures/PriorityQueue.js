
class QueueItem{
    constructor(element,priority){
        this.element = element;
        this.priority = priority;
    }
}

/**
 * 优先级队列封装
 *
 * @class PriorityQueue
 */
class PriorityQueue{
    constructor(){
        this.items = []
    }
    enqueue(element,priority){
        const queueItem = new QueueItem(element,priority);
        if(this.items.length===0){
            this.items.push(queueItem);
            return;
        }
        let added = false
        for(let i=0,j=this.items.length;i<j;i++){
            if(priority<this.items[i].priority){
                this.items.splice(i,0,queueItem);
                added = true;
                break;
            }
        }
        if(!added){
            this.items.push(queueItem);
        }

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

export default PriorityQueue