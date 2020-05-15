/*
 * @Author: liu wang wang
 * @Date: 2020-05-13 11:30:26
 * @LastEditTime: 2020-05-15 13:25:48
 * @LastEditors: liu wang wang
 * @Description: 数据结构测试
 * @FilePath: \DataStructuresAndAlgorithms\src\index.js
 */
// import Stack from './structures/Stack/Stack'
// import Queue from './structures/Queue/Queue'
// import PriorityQueue from './structures/Queue/PriorityQueue'
import SingleLinkedList from './structures/LinkedList/SingleLinkedList'
import DoubleLinkedList from './structures/LinkedList/DoubleLinkedList'
//栈实现十进制转二进制
// const dec2bin = (num)=>{
//     const s = new Stack();
//     while(num>0){
//         s.push(num%2);
//         num = Math.floor(num/2);
//     }
//     let bin = '';
//     while(!s.isEmpty()){
//         bin += s.pop()
//     }
//     return bin;
// }
// console.log(dec2bin(100));
//队列
// const queue = new Queue()
// queue.enqueue('1');
// queue.enqueue('2');
// queue.enqueue('3');
// queue.enqueue('4');
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.front());
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.clearQueue();
// console.log(queue.isEmpty());
// 优先级队列
// const pq = new PriorityQueue();
// pq.enqueue({name:'bulang'},1);
// pq.enqueue({name:'liu'},5);
// pq.enqueue({name:'wang'},3);
// pq.enqueue({name:'ww'},2);
// console.log(pq);
// 单向链表
const singleLinkedList = new SingleLinkedList()
// const singleLinkedList2 = new SingleLinkedList()
// singleLinkedList.addFirst('a');
// singleLinkedList.addFirst('b');
// singleLinkedList.addFirst('c');
// singleLinkedList.addFirst('d');
// singleLinkedList2.addLast(1);
// singleLinkedList2.addLast(2);
// singleLinkedList2.addLast(3);
// singleLinkedList2.addLast(4);
// singleLinkedList.concat(singleLinkedList2);
// console.log(singleLinkedList.removeFirst());
// console.log(singleLinkedList.removeFirst());
// console.log(singleLinkedList.removeLast());
// console.log(singleLinkedList.removeLast());
// singleLinkedList.insert(0,1);
// singleLinkedList.insert(1,2);
// singleLinkedList.insert(2,'c');
// singleLinkedList.insert(3,'d');
// singleLinkedList.insert(2,'e');//abecd
// singleLinkedList.insert(1,'f');//afbecd
// console.log(singleLinkedList.toString());
// console.log(singleLinkedList.get(1));
// singleLinkedList.set(0,1);
// singleLinkedList.set(1,2);
// console.log(singleLinkedList.toString());
// console.log(singleLinkedList.removeAt(0));
// console.log(singleLinkedList.removeAt(3));
// console.log(singleLinkedList.toString());
// console.log(singleLinkedList.size());
// console.log(singleLinkedList.indexOf(2));
// console.log(singleLinkedList.remove(1));
// console.log(singleLinkedList.contains(1));
// console.log(singleLinkedList.getFirst());
// console.log(singleLinkedList.getLast());
// console.log(singleLinkedList.toString());
// console.log(singleLinkedList);
const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.insert(0, 'a');
console.log(doubleLinkedList.toString());
