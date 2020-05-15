/*
 * @Author: liu wang wang
 * @Date: 2020-05-13 11:36:44
 * @LastEditTime: 2020-05-15 13:29:42
 * @LastEditors: liu wang wang
 * @Description: 双向链表的封装
 * @FilePath: \DataStructuresAndAlgorithms\src\structures\LinkedList\DoubleLinkedList.js
 */
/**
 * 节点类
 */
class Node{
    constructor(element, prev, next){
        this.element = element;
        this.prev = prev;
        this.next = next;
    }
    setEle(element){
        this.element = element;
    }
    getEle(){
        return this.element;
    }
    setPrev(prev){
        this.prev = prev;
    }
    getPrev(){
        return this.prev;
    }
    setNext(next){
        this.next = next;
    }
    getNext(){
        return this.next;
    }
}
/**
 * 双向链表类
 */
class DoubleLinkedList{
    constructor(){
        // 头尾节点为空节点，不存储数据
        this.head = new Node(null, null, null);
        this.tail = new Node(null, null, null);
        this.head.setNext(this.tail);
        this.tail.setPrev(this.head);
        this.length = 0;
    }
    insert(position, element){
        if(position<0 || position>this.length){
            return false;
        }
        let current = this.head;
        while(position>0){
            current = current.getNext();
            position--;
        }
        const node = new Node(element, current, current.getNext());
        current.getNext().setPrev(node);
        current.setNext(node);
        this.length += 1;
        return true;
    }
    toString(){
        let res = '';
        let current = this.head.getNext();
        while(current.getNext()){
            res += current.getEle().toString();
            current = current.getNext();
        }
        return res;
    }
}


export default DoubleLinkedList;
