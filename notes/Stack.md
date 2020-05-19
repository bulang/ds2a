### 栈结构

**特点：受限的线性结构，先进后出；**
> 源码目录：/src/structures/Stack
#### 使用`javascript`封装栈结构

1. 使用数组或者链表实现，也可以使用对象实现；

2. 接口说明

   | 接口            | 说明                   |
   | --------------- | ---------------------- |
   | `push(element)` | 数据入栈               |
   | `pop()`         | 数据出栈并删除         |
   | `peek()`        | 查询栈顶元素不删除数据 |
   | `isEmpty()`     | 判断栈是否为空         |
   | `size()`        | 获取栈的大小           |
   | `clear()`       | 清空栈内数据           |

3. 封装

   ```javascript
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
   ```