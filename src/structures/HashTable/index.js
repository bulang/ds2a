/*
 * @Author: liu wang wang
 * @Date: 2020-05-25 15:48:19
 * @LastEditTime: 2020-05-26 14:02:38
 * @LastEditors: liu wang wang
 * @Description: 哈希表（javascript描述）
 * @FilePath: \DataStructuresAndAlgorithms\src\structures\HashTable\index.js
 */ 
const DEFAULT_LIMIT = 7;
class HashTable{
    constructor(limit){
        this.table = [];
        this.limit = limit || DEFAULT_LIMIT;
        this.count = 0;
    }
    // hash函数
    getHashCode(key){
        let hashcode = 0;
        key += '';
        for(let i=0,j=key.length; i<j; i++){
            hashcode = 37 * hashcode + key.charCodeAt(i);
        }
        hashcode = hashcode % this.limit;
        return hashcode;
    }
    // 新增、修改数据
    put(key, value){
        const hashcode = this.getHashCode(key);
        const bucket = this.table[hashcode] || [];
        const tuple = [key, value];
        let isOverWrite = false;
        this.table[hashcode] = bucket;
        bucket.forEach((item, index)=>{
            if(item[0] === key){
                item[1] = value;
                isOverWrite = true;
            }
        });
        if(!isOverWrite){
            bucket.push(tuple);
            this.count += 1;
            if(this.count > this.limit * 0.8){
                this.resize(this.getPrime(this.limit*2));
            }
        }      
        return true;
    }
    // 根据关键字获取数据
    get(key){
        const hashcode = this.getHashCode(key);
        const bucket = this.table[hashcode];
        if(!bucket){
            return null;
        }
        for(let i=0, j=bucket.length; i<j; i++){
            let [fkey, fvalue] = bucket[i];
            if(fkey === key){
                return fvalue;
            }
        }
        return null;
    }
    // 删除数据
    delete(key){
        const hashcode = this.getHashCode(key);
        const bucket = this.table[hashcode];
        if(!bucket){
            return null;
        }
        for(let i=0, j=bucket.length; i<j; i++){
            let [fkey, fvalue] = bucket[i];
            if(fkey === key){
                bucket.splice(i, 1);
                this.count -= 1;
                if(this.limit > DEFAULT_LIMIT && this.count < this.limit * 0.2){
                    this.resize(this.getPrime(~~this.limit/2));
                }
                return fvalue;
            }
        }
        return null;
    }
    // 判断是不是质数
    isPrime(num){
        let sqrt = ~~Math.sqrt(num);
        for(let i=0;i<=sqrt;i++){
            if(num%sqrt === 0){
                return false;
            }
        }
        return true;
    }
    // 获取最近的质数
    getPrime(num){
        while(!this.isPrime(num)){
            num++;
        }
        return num;
    }
    // 扩容、缩容
    resize(limit){
        const oldTableData = this.table;
        this.limit = limit;
        this.count = 0;
        this.table = [];
        oldTableData.forEach((bucket)=>{
            if(bucket){
                for(let i=0, j=bucket.length; i<j; i++){
                    let [key, value] = bucket[i];
                    this.put(key,value);
                }
            }
        });
    }
    // 获取hash表的大小
    size(){
        return this.count;  
    }
    // 判断hash表是否为空
    isEmpty(){
        return this.count === 0;
    }
}

export default HashTable