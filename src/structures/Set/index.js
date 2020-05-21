/*
 * @Author: liu wang wang
 * @Date: 2020-05-20 17:23:55
 * @LastEditTime: 2020-05-21 11:27:50
 * @LastEditors: liu wang wang
 * @Description: 数据结构集合
 * @FilePath: \DataStructuresAndAlgorithms\src\structures\Set\index.js
 */ 
class SetO {
    constructor(){
        this.items = new Set();
    }
    add(value){
        this.items.add(value);
    }
    delete(value){
        return this.items.delete(value);
    }
    has(value){
        return this.items.has(value);
    }
    keys(){
        return this.items.keys();
    }
    values(){
        return this.items.values();
    }
    size(){
        return this.items.size();
    }
    // 判断是否为子集
    isSuperset(set, subset){
        for(let element of subset){
            if(!set.has(element)){
                return false;
            }
        }
        return true;
    }
    // 并集；
    union(setA, setB){
        let _union = new Set(setA);
        for(let element of setB){
            _union.add(element);
        }
        return _union;
    }
    // 交集
    intersection(setA, setB){
        let _intersection = new Set();
        for(let element of setB){
            if(setA.has(element)){
                _intersection.add(element);
            }
        }
        return _intersection;
    }
    // 差集
    difference(setA, setB){
        let _difference = new Set(setA);
        for(let element of setA){
            if(setB.has(element)){
                _difference.delete(element);
            }
        }
        return _difference;
    }
    // 对称差
    symmetricDifference(setA, setB){
        let _symmetric = new Set(setA);
        for(let element of setB){
            if(_symmetric.has(element)){
                _symmetric.delete(element);
            }else{
                _symmetric.add(element);
            }
        }
        return _symmetric;
    }
    // 转成字符串查看
    toString(){
        const itemArrs = [];
        for(let item of this.items){
            itemArrs.push(item);
        }
        return JSON.stringify(itemArrs);
    }
}

export default SetO;