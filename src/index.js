/*
 * @Author: liu wang wang
 * @Date: 2020-05-13 11:30:26
 * @LastEditTime: 2020-05-27 15:59:37
 * @LastEditors: liu wang wang
 * @Description: 数据结构测试
 * @FilePath: \DataStructuresAndAlgorithms\src\index.js
 */
import Stack from './structures/Stack/Stack'
import Queue from './structures/Queue/Queue'
import PriorityQueue from './structures/Queue/PriorityQueue'
import SingleLinkedList from './structures/LinkedList/SingleLinkedList'
import DoubleLinkedList from './structures/LinkedList/DoubleLinkedList'
import SetO from './structures/Set'
import HashTable from './structures/HashTable'
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
// const singleLinkedList = new SingleLinkedList()
// const singleLinkedList2 = new SingleLinkedList()
// singleLinkedList.addFirst('a');
// singleLinkedList.addFirst('b');
// singleLinkedList.addFirst('c');
// singleLinkedList.addFirst('d');
// singleLinkedList.addLast(1);
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
// console.log(singleLinkedList.get(0));
// singleLinkedList.set(0,1);
// singleLinkedList.set(1,2);
// console.log(singleLinkedList.toString());
// console.log(singleLinkedList.removeAt(2));
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
// singleLinkedList.clear();
// console.log(singleLinkedList);
// 测试双向链表
// const doubleLinkedList = new DoubleLinkedList();
// const doubleLinkedList2 = new DoubleLinkedList();
// doubleLinkedList.insert(0, 'a');
// doubleLinkedList.insert(1, 'b');
// doubleLinkedList.insert(2, 'c');
// doubleLinkedList.insert(3, 'd');
// doubleLinkedList.insert(4, 'e');
// doubleLinkedList.insert(5, 'f');
// doubleLinkedList2.addLast('1');
// doubleLinkedList2.addLast('2');
// doubleLinkedList2.addLast('3');
// doubleLinkedList2.addLast('4');
// doubleLinkedList2.addLast('5');
// doubleLinkedList.insert(2, 1);
// doubleLinkedList.insert(6, 2)
// console.log(doubleLinkedList.get(7));
// doubleLinkedList.set(0, 'z');
// doubleLinkedList.set(7, 'y');
// console.log(doubleLinkedList.indexOf('y'));
// console.log(doubleLinkedList.indexOf('b'));
// console.log(doubleLinkedList.toString());
// console.log(doubleLinkedList.removeAt(6));
// console.log(doubleLinkedList.toString());
// // console.log(doubleLinkedList.clear());
// doubleLinkedList.addFirst('w');
// doubleLinkedList.addLast('w');
// console.log(doubleLinkedList.removeFirst());
// doubleLinkedList.removeLast();
// doubleLinkedList.concat(doubleLinkedList2);
// console.log(doubleLinkedList.toString());
// console.log(doubleLinkedList.backString());
// 测试集合
// const mSet = new SetO();
// const set = new Set();
// const set2 = new Set();
// set.add({'a':'b'});
// set.add(1);
// set.add([1,2,3]);
// set2.add(1);
// set2.add(2);
// console.log(set.keys());
// console.log(set.values());
// console.log(set)
// console.log(set2)
// console.log(mSet.isSuperset(set, set2))
// console.log(set.toString());
// 测试哈希表
const hashTable = new HashTable();
hashTable.put('name','bulang');
hashTable.put(5,18);
hashTable.put(60,18);
hashTable.put(90,18);
hashTable.put('height',180);
hashTable.put('abc','1');
// hashTable.put('cba','12');
// hashTable.put('bcd','123');
// hashTable.put('dba','1234');
// hashTable.put('name','lalala')
// console.log(hashTable.get('name'));
// console.log(hashTable.get('age'));
// console.log(hashTable.get('height'));
// console.log(hashTable.get('abc'));
// console.log(hashTable.delete('age'))
// console.log(hashTable.delete('name'))
// console.log(hashTable.delete('dba'))
// console.log(hashTable.delete('bcd'))
// console.log(hashTable.delete('cba'))
// console.log(hashTable.size());
// console.log(hashTable.isEmpty());
// console.log(hashTable.delete('height'))
// console.log(hashTable.delete('abc'))
// console.log(hashTable.delete('height'))
// console.log(hashTable.size());
// console.log(hashTable.isEmpty());
console.log(hashTable);
