### 队列

#### 使用`javascript`封装队列

**特点：受限的线性数据结构，先进先出**

1. 接口说明：

   | 接口               | 说明                   |
   | ------------------ | ---------------------- |
   | `enqueue(element)` | 数据进入队列           |
   | `dequeue()`        | 删除并获取队列首位数据 |
   | `clearQueue()`     | 清空队列               |
   | `size()`           | 获取队列长度           |
   | `front()`          | 获取队列首位数据不删除 |
   | `isEmpty()`        | 判断队列是否为空       |

2. 封装

   ```javascript
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
   ```

### 优先级队列

优先级队列比队列多一个参数用来排序数据的优先级，其他特点跟队列是一样的

#### 使用`javascript`封装优先级队列

```javascript
/**
* 队列元素类
*/
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
```