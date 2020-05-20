/*
 * @Author: liu wang wang
 * @Date: 2020-05-20 17:23:55
 * @LastEditTime: 2020-05-20 17:51:42
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
    toString(){
        const itemArrs = [];
        for(let item of this.items){
            itemArrs.push(item);
        }
        return JSON.stringify(itemArrs);
    }
}

export default SetO;