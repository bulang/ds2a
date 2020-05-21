### 集合
> 源码目录：/src/structures/Set

**ES6中有提供Set对象类型，基础的接口不做演示，演示一下集合的相关计算**
> 代码清单：`isSuperset(set, subset)`方法实现

功能：判断subset是否为set的子集；  
子集：subset集合里面有的元素，set集合全都有；
```javascript
 // 判断是否为子集
isSuperset(set, subset){
    for(let element of subset){
        if(!set.has(element)){
            return false;
        }
    }
    return true;
}
```
> 代码清单：`union(setA, setB)`方法实现

功能：求`setA、setB`集合的并集；  
并集：把两个集合合并为一个集合，数学上记作`setA ∪ setB`；
```javascript
// 并集；
union(setA, setB){
    let _union = new Set(setA);
    for(let element of setB){
        _union.add(element);
    }
    return _union;
}
```
> 代码清单：`intersection(setA, setB)`方法实现

功能：求`setA、setB`集合的交集；
交集：由`setA、setB`两个集合共有的元素组成的集合为这两个集合的交集，数学上记作`setA ∩ setB`；
```javascript
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
```
> 代码清单：`difference(setA, setB)`方法实现

功能：求`setA、setB`集合的差集；  
差集：`setB`在`setA`中的差集为属于`setA`但是不属于`setB`的所有元素的集合，在数学上记作：`setA\setB` 或 `setA-setB`
```javascript
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
```
> 代码清单：`symmetricDifference(setA, setB)`方法实现

功能：求`setA、setB`集合的对称差集
对称差集：`setA、setB`两个集合中不属于`setA ∩ setB`的所有元素的集合，数学上记作`setA ∆ setB`
```javascript
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
```