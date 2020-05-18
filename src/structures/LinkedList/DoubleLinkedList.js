/*
 * @Author: liu wang wang
 * @Date: 2020-05-13 11:36:44
 * @LastEditTime: 2020-05-15 13:29:42
 * @LastEditors: liu wang wang
 * @Description: 双向链表的封装
 * @FilePath: \DataStructuresAndAlgorithms\src\structures\LinkedList\DoubleLinkedList.js
 */
import _ from 'lodash';

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
    // 给指定位置插入元素
    insert(position, element){
        if(position<0 || position>this.length){
            return false;
        }
        if(position <= this.length/2){
            let current = this.head;
            while(position>0){
                current = current.getNext();
                position--;
            }
            const node = new Node(element, current, current.getNext());
            current.getNext().setPrev(node);
            current.setNext(node);
        }else{
            let current = this.tail;
            let descPosition = this.length - position;
            while(descPosition>0){
                current = current.getPrev();
                descPosition--;
            }
            const node = new Node(element, current.getPrev(), current);
            current.getPrev().setNext(node);
            current.setPrev(node);
        }
        this.length += 1;
        return true;
    }
    // 获取指定位置的元素
    get(position){
        if(position<0 || position>=this.length){
            return null;
        }
        let current = null;
        if(position < this.length/2){
            current = this.head;
            while(position>=0){
                current = current.getNext();
                position--;
            }
        }else{
            current = this.tail;
            let descPosition = this.length - position;
            while(descPosition>0){
                current = current.getPrev();
                descPosition--;
            }
        }
        return current.getEle();
    }
    // 设置指定位置的元素
    set(position,element){
        if(position<0 || position>=this.length){
            return false;
        }
        let current = null;
        if(position < this.length/2){
            current = this.head;
            while(position>=0){
                current = current.getNext();
                position--;
            }
        }else{
            current = this.tail;
            let descPosition = this.length - position;
            while(descPosition>0){
                current = current.getPrev();
                descPosition--;
            }
        }
        current.setEle(element);
        return true;
    }
    // 返回元素在链表中的索引位置
    indexOf(element){
        let index = 0;
        let current = this.head.getNext();
        while(current){
            if(_.isEqual(element,current.getEle())){
                return index;
            }
            current = current.getNext();
            index++;
        }
        return -1;
    }
    // 删除指定位置的元素
    removeAt(position){
        if(position<0 || position>=this.length){
            return null;
        }
        let current = null;
        if(position < this.length/2){
            current = this.head;
            while(position >= 0){
                current = current.getNext();
                position--;
            }
        }else{
            current = this.tail;
            let descPosition = this.length - position;
            while(descPosition > 0){
                current = current.getPrev();
                descPosition--;
            }
        }
        current.getPrev().setNext(current.getNext());
        current.getNext().setPrev(current.getPrev());
        this.length -= 1;
        return current.getEle();
    }
    // 删除指定元素
    remove(element){
        const _index = this.indexOf(element);
        if(_index>0 && _.isEqual(this.removeAt(_index),element)){
            return true;
        }else{
            return false;
        }
    }
    // 返回链表长度
    size(){
        return this.length;
    }
    // 判断链表是否为空
    isEmpty(){
        return this.length === 0;
    }
    // 清空链表
    clear(){
        this.head.setNext(this.tail);
        this.tail.setPrev(this.head);
        this.length = 0;
        return true;
    }
    // 判断链表是否包含元素
    contains(element){
        return this.indexOf(element) >= 0;
    }
    // 给链表头追加元素
    addFirst(element){
        const node = new Node(element,this.head,this.head.getNext());
        this.head.getNext().setPrev(node);
        this.head.setNext(node);
        this.length += 1;
        return true;
    }
    // 给链表尾部追加元素
    addLast(element){
        const node = new Node(element,this.tail.getPrev(),this.tail);
        this.tail.getPrev().setNext(node);
        this.tail.setPrev(node);
        this.length += 1;
        return true;
    }
    // 移除链表头部一个元素
    removeFirst(){
        if(this.length==0){
            return false;
        }
        const firstNode = this.head.getNext();
        this.head.setNext(firstNode.getNext());
        firstNode.getNext().setPrev(this.head);
        this.length -= 1;
        return true;
    }
    // 移除链表尾部一个元素
    removeLast(){
        if(this.length==0){
            return false;
        }
        const lastNode = this.tail.getPrev();
        this.tail.setPrev(lastNode.getPrev());
        lastNode.getPrev().setNext(this.tail);
        this.length -= 1;
        return true;
    }
    // 获取链表头部第一个元素
    getFist(){
        return this.head.getNext().getEle();
    }
    // 获取链表尾部第一个元素
    getLast(){
        return this.tail.getPrev().getEle();
    }
    // 连接两个双向链表
    concat(LinkedList){
        const toLastNode = this.tail.getPrev();
        const fromFirstNode = LinkedList.head.getNext();
        toLastNode.setNext(fromFirstNode);
        fromFirstNode.setPrev(toLastNode);
        this.length += LinkedList.size();
        return this.length;
    }
    // 链表转成字符串
    toString(){
        let res = [];
        let current = this.head.getNext();
        while(current.getNext()){
            res.push(current.getEle().toString());
            current = current.getNext();
        }
        return res.toString();
    }
}


export default DoubleLinkedList;
