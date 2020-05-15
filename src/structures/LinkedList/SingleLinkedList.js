/*
 * @Author: liu wang wang
 * @Date: 2020-05-13 11:36:26
 * @LastEditTime: 2020-05-15 10:14:37
 * @LastEditors: liu wang wang
 * @Description: 单向链表封装
 * @FilePath: \DataStructuresAndAlgorithms\src\structures\LinkedList\SingleLinkedList.js
 */
import _ from 'lodash';
/**
 * 节点类
 */
class Node{
    constructor(element,next){
        this.element = element;
        this.next = next;
    }
    setEle(element){
        this.element = element;
    }
    getEle(){
        return this.element;
    }
    setNext(next){
        this.next = next;
    }
    getNext(){
        return this.next;
    }
}
/**
 * 单向链表
 */
class SingleLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
    }
    // 插入元素
    insert(position,element){
        if(position<0 || position>this.length){
            return false;
        }
        if(position===0 && this.length===0){
            this.head = new Node(element,null)
        }else{
            position--;
            let prev = this.head;
            while(position>0){
                prev = prev.getNext();
                position--;
            }
            const current = prev.getNext();
            const node = new Node(element,current);
            prev.setNext(node);
        }
        this.length += 1;
        return true;
    }
    // 获取指定位置的元素
    get(position){
        if(position<0 || position>=this.length){
            return null;
        }
        let current = this.head;
        while(position>0){
            current = current.getNext();
            position--;
        }
        return current.getEle();
    }
    // 设置指定位置的元素
    set(position, element){
        if(position<0 || position>=this.length){
            return false;
        }
        let current = this.head;
        while(position>0){
            current = current.getNext();
            position--;
        }
        current.setEle(element);
        return true
    }
    // 删除指定元素
    remove(element){
        const _index = this.indexOf(element);
        if(_index>=0 && _.isEqual(this.removeAt(_index), element)){
            this.length -= 1;
            return true;
        }else{
            return false;
        }
    }
    // 删除指定位置的元素
    removeAt(position){
        if(position<0 || position>=this.length){
            return null
        }
        let removedElement = null;
        if(position===0){
            removedElement = this.head.getEle();
            this.head = this.head.getNext();
        }else{
            let prev = this.head;
            position--;
            while(position>0){
                prev = prev.getNext();
                position--;
            }
            const current = prev.getNext();
            prev.setNext(current.getNext());
            removedElement = current.getEle();
        }
        this.length -= 1;
        return removedElement;
    }
    // 返回元素在链表中的索引位置
    indexOf(element){
        let index = 0;
        let current = this.head;
        while(current){
            if(_.isEqual(element,current.getEle())){
                return index;
            }
            current = current.getNext();
            index++;
        }
        return -1;
    }
    // 返回链表的长度
    size(){
        return this.length
    }
    // 判断链表是否为空
    isEmpty(){
        return this.length === 0;
    }
    // 清空链表
    clear(){
        this.head = null;
        this.length = 0;
    }
    // 内容转化为字符串
    toString(){
        let res = '';
        let current = this.head;
        do {
            res += current && current.getEle().toString()+' ';
            current = current && current.getNext();
        }while(current!==null)
        return res;
    }
    // 判断链表是否包含元素
    contains(element){
        return this.indexOf(element) >= 0;
    }
    // 连接两个链表
    concat(linkedList){
        let current = this.head;
        if(!current){
            this.head = linkedList;
        }
        while(current.getNext()){
            current = current.getNext();
        }
        current.setNext(linkedList.head);
        this.length += linkedList.size();
        return this.length
    }
    // 向链表头添加新元素
    addFirst(element){
        const current = this.head;
        const node = new Node(element,null);
        if(current){
            node.setNext(current);
        }
        this.head = node;
        this.length += 1;
        return true;
    }
    // 向链表尾添加新元素
    addLast(element){
        let current = this.head;
        const node = new Node(element, null);
        let index = 0;
        if(!current){
            this.head = node;
            this.length += 1;
            return index;
        }
        index++;
        while(current.getNext()!==null){
            current = current.getNext();
            index++;
        }
        current.setNext(node);
        this.length += 1;
        return index;
    }
    // 移除链表头一个元素
    removeFirst(){
        const current = this.head;
        if(!current){
            return null;
        }
        this.head = current.getNext();
        this.length -= 1;
        return current.getEle();
    }
    // 移除链表尾一个元素
    removeLast(){
        let current = this.head;
        if(!current){
            return null;
        }
        if(!current.getNext()){
            this.head = null;
        }else{
            let prev = current;
            while(current.getNext()){
                prev = current;
                current = current.getNext();
            }
            prev.setNext(null);
        }
        this.length -= 1;
        return current.getEle();
    }
    // 获取链表头部一个元素
    getFirst(){
        if(this.head){
            return this.head.getEle();
        }
        return null;
    }
    // 获取链表尾部一个元素
    getLast(){
        let current = this.head;
        if(!current){
            return null;
        }
        while(current.getNext()){
            current = current.getNext();
        }
        return current.getEle();
    }
}

export default SingleLinkedList;