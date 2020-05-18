/*
 * @Author: liu wang wang
 * @Date: 2020-05-13 11:36:26
 * @LastEditTime: 2020-05-18 16:34:45
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
        this.head = new Node(null,null);
    }
    // 插入元素
    insert(position,element){
        if(position<0 || position>this.length){
            return false;
        }
        let current = this.head;
        while(position>0){
            current = current.getNext();
            position--;
        }
        const node = new Node(element, current.getNext());
        current.setNext(node);
        this.length += 1;
        return true;
    }
    // 获取指定位置的元素
    get(position){
        if(position<0 || position>=this.length){
            return null;
        }
        let current = this.head;
        while(position>=0){
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
        while(position>=0){
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
        let current = this.head;
        let prev = null;
        while(position>=0){
            prev = current;
            current = current.getNext();
            position--;
        }
        prev.setNext(current.getNext());
        this.length -= 1;
        return current.getEle();
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
        let res = [];
        let current = this.head;
        while(current.getNext()){
            res.push(current.getNext().getEle().toString());
            current = current.getNext();
        }
        return res.toString();
    }
    // 判断链表是否包含元素
    contains(element){
        return this.indexOf(element) >= 0;
    }
    // 连接两个链表
    concat(linkedList){
        let current = this.head;
        while(current.getNext()){
            current = current.getNext();
        }
        current.setNext(linkedList.head.getNext());
        this.length += linkedList.size();
        return this.length
    }
    // 向链表头添加新元素
    addFirst(element){
        const node = new Node(element,null);
        const current = this.head.getNext();
        node.setNext(current);
        this.head.setNext(node);
        this.length += 1;
        return true;
    }
    // 向链表尾添加新元素
    addLast(element){
        let current = this.head;
        let index = 0;
        const node = new Node(element, null);
        while(current.getNext()){
            current = current.getNext();
            index++;
        }
        current.setNext(node);
        this.length += 1;
        return index;
    }
    // 移除链表头一个元素
    removeFirst(){
        if(this.length===0){
            return null;
        }
        const current = this.head.getNext();
        this.head.setNext(current.getNext());
        this.length -= 1;
        return current.getEle();
    }
    // 移除链表尾一个元素
    removeLast(){
        if(this.length===0){
            return null;
        }
        let current = this.head;
        let prev = null;
        while(current.getNext()){
            prev = current;
            current = current.getNext();
        }
        prev.setNext(null);
        this.length -= 1;
        return current.getEle();
    }
    // 获取链表头部一个元素
    getFirst(){
        if(this.head.getNext()){
            return this.head.getNext().getEle();
        }
        return null;
    }
    // 获取链表尾部一个元素
    getLast(){
        let current = this.head;
        while(current.getNext()){
            current = current.getNext();
        }
        return current.getEle();
    }
}

export default SingleLinkedList;