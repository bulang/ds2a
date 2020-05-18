### 链表

问题：

1. 链表优缺点？（与数组做对比）

   - 优点：
     - 插入删除节点时只需要改变相关节点的指针域即可，无需改变节点内存地址；数组在插入和删除节点时需要后移或前移插入位置后面所有的节点；
     - 节点在内存中不连续，可自由扩展；数组在内存中是一段连续的空间，在一些语言中数组在定义时需要声明数组长度，超出长度需要先扩展数组长度；
   - 缺点：
     - 不能随机查找节点，只能通过指针顺次查找；数组可以通过下标随机获取想要的节点；
     - 增大了内存开销，每个节点增加了一个或两个指针域；

2. 链表结构是什么样的？

   1. 单向链表

      ![单向链表](E:\myOftenUse\DataStructuresAndAlgorithms\static\singleLinkedList.png)

   2. 双向链表

      ![双向链表](E:\myOftenUse\DataStructuresAndAlgorithms\static\doubleLinkedList.png)

#### 单向链表

单向链表由一个`head`指针指向数据域为空的头节点，头节点的`next`指针域指向下一个节点，以此类推，最后一个节点的`next`指针域指向`null`表明链表结束；

| 接口                       | 说明                          |
| -------------------------- | ----------------------------- |
| `insert(position,element)` | 在指定位置插入元素            |
| `get(position)`            | 获取指定位置的元素            |
| `set(position, element)`   | 设置指定位置的元素            |
| `remove(element)`          | 删除指定元素                  |
| `removeAt(position)`       | 删除指定位置的元素            |
| `indexOf(element)`         | 返回元素在链表中的索引位置    |
| `size()`                   | 返回链表的长度                |
| `isEmpty()`                | 判断链表是否为空              |
| `clear()`                  | 清空链表                      |
| `toString()`               | 链表数据转化为字符串          |
| `contains(element)`        | 判断链表是否包含`element`元素 |
| `concat(linkedList)`       | 合并两个链表                  |
| `addFirst(element)`        | 向链表头添加新元素            |
| `addLast(element)`         | 向链表尾添加新元素            |
| `removeFirst()`            | 移除链表头一个元素            |
| `removeLast()`             | 移除链表尾一个元素            |
| `getFirst()`               | 获取链表头部一个元素          |
| `getLast()`                | 获取链表尾部一个元素          |

> 代码清单：单向链表节点（Node）

定义两个属性分别为节点的数据域（`element`）与指针域（`next`），并定义两个属性的 `getter` 与 `setter`；

```javascript
class Node{
    //通过构造函数定义属性；
    constructor(element,next){
        this.element = element;
        this.next = next;
    }
    //定义getter、setter；
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
```

> 代码清单：单向链表结构（`SingleLinkedList`）

给`SingleLinkedList`类的`head`构造一个**数据域为空，指针域也为空的节点，此节点为头节点不存储数据，用于指向真实的节点**，并定义一个`length`属性用来记录链表的长度；

```javascript
class SingleLinkedList {
    constructor(){
        this.length = 0;
        this.head = new Node(null,null);
    }
}
```

> 代码清单：`insert(position, element)` 方法实现

**功能：在链表的指定位置插入指定的元素**

**思路：找到要插入位置的上一个节点（`current`），构造一个指针域指向`current`的下一个节点的新节点，然后把current的指针域指向这个新的节点，最后把链表长度加一**

实现步骤如下：

1. 做边界判断，越界直接返回`false`;
2. 循环找到`position`位置的原节点的上一个节点定义为`current`；
3. 申明一个新的节点`node`，并把指针域指向`current`的下一个节点；
4. 设置`current`的指针域为`node`;
5. `length`加1；

```javascript
...

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

...
```

> 代码清单：`get(position)` 方法实现

**功能：获取链表指定位置的元素；**

**思路：通过`position`循环递减，依次获取到下一个节点，当`position`为0时，当前节点的下一个节点就是我们要找的节点**

实现步骤如下：

1. 边界判断，越界直接返回`null`;
2. 以`head`为起点，循环递减`position`，并依次获取下一个节点，当`position===0`时，下一个节点及为我们要的节点
3. 返回找到的节点数据；

```javascript
...

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

...
```

> 代码清单：`set(position, element)` 方法实现

**功能：设置链表指定位置的元素；**

实现步骤如下：

1. 边界判断，越界直接返回`false`;
2. 以`head`为起点，循环递减`position`，并依次获取下一个节点，当`position===0`时，下一个节点及为我们要的节点
3. 给找到的节点设置数据；

```javascript
...

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

...
```

> 代码清单：`indexOf(element)` 方法实现

**功能：返回元素在链表中的索引位置**

**思路：声明索引值为0，以节点的指针域是否为空为条件循环链表，使用 `lodash`的 `isEqual(from, to)` 方法判断数据是否相等，并递增申明的索引，如果找到返回索引值，否则返回-1；**

实现步骤如下：

1. 通过头节点获取第一个真实节点，声明一个变量保存索引值；
2. 循环判断节点的指针域是否存在，如果存在，判断当前节点的数据是否与传进来的`element`相等，如果不相等则索引值+1，否则返回索引值；
3. 遍历完没有找见则返回-1；

```javascript
...

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

...
```

> 代码清单：`removeAt(position)` 方法实现

**功能：删除链表中指定位置的元素**

**思路：通过`position`循环递减，找到要删除的节点，然后把当前节点的上一个节点的指针域指向当前节点的下一个节点；**

实现步骤如下：

1. 边界判断，越界直接返回`null`;
2. 获取到`head`指针，声明一个变量保存上一个节点；
3. 循环递减`position`，并赋值上一个节点与当前节点，当`position`小于0时终止循环；
4. 设置上一个节点的指针域指向当前节点的下一个节点；
5. 返回删除的数据；

```javascript
...

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

...
```

> 代码清单：`remove(element)`方法实现

**功能：删除链表中指定元素的节点**

**思路：通过`indexOf()`方法获取元素的索引，再使用`removeAt()`方法删除元素**

实现步骤如下：

1. 获取元素的索引位置；
2. 删除指定位置的元素；

```javascript
...

// 删除指定元素
remove(element){
    const _index = this.indexOf(element);
    if(_index>=0 && _.isEqual(this.removeAt(_index), element)){
        return true;
    }else{
        return false;
    }
}

...
```

> 代码清单：`size()`方法实现

```
...

// 返回链表的长度
size(){
	return this.length
}

...
```

> 代码清单：`isEmpty()` 方法实现

```javascript
...

// 判断链表是否为空
isEmpty(){
    return this.length === 0;
}

...
```

> 代码清单：`clear()` 方法实现

```javascript
...

// 清空链表
clear(){
    this.head = null;
    this.length = 0;
}

...
```

> 代码清单：`contains(element)` 方法实现

```javascript
...

// 判断链表是否包含元素
contains(element){
    return this.indexOf(element) >= 0;
}

...
```

> 代码清单：`toString()`方法实现

**功能：链表数据转换成字符串，便于查看**

**思路：以节点的指针域是否为空为条件循环链表拿到每个节点的数据拼接成字符串**

```javascript
...

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

...
```

> 代码清单：`concat(linkedList)` 方法实现

**功能：连接两个链表数据，返回新的链表长度**

**思路：把原链表的最后一个节点的指针域指向传入链表的第一个真实数据节点**

实现步骤如下：

1. 获取到原链表的`head`指针；
2. 以节点的指针域是否为空为条件，循环链表获取链表的最后一个节点；
3. 把最后一个节点的指针域指向传入链表的第一个真实数据节点；
4. 原链表的长度增加传入链表的长度，并返回新的链表长度；

```javascript
...

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

...
```

> 代码清单：`addFirst(element)`方法实现

**功能：向链表头部追加一个元素**

实现步骤如下：

1. 构造一个数据域为`element`指针域为空的新节点`node`;
2. 声明一个变量`current`指向链表第一个数据节点；
3. 给`node`节点设置指针域指向`current`节点；
4. 给头部节点设置指针域指向`node`节点；
5. 链表长度+1；

```javascript
...

// 向链表头添加新元素
addFirst(element){
    const node = new Node(element,null);
    const current = this.head.getNext();
    node.setNext(current);
    this.head.setNext(node);
    this.length += 1;
    return true;
}

...
```

> 代码清单：`addLast(element)`方法实现

**功能：向链表尾部追加一个元素**

实现步骤如下：

1. 构造一个数据域为`element`指针域为空的新节点`node`;
2. 以节点的指针域是否为空为条件，循环链表获取链表的最后一个节点；
3. 给最后一个节点设置指针域指向`node`节点；
4. 链表长度+1；

```javascript
...

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

...
```

> 代码清单：`removeFirst()`方法实现

**功能：移除链表头部一个元素**

**思路：把头部节点的指针域指向第二个数据节点，返回第一个数据节点的数据**

实现步骤如下：

1. 判断如果链表长度为0，则返回`null`;
2. 获取第一个数据节点；
3. 设置头部节点的指针域指向第一个数据节点的下一个节点；
4. 链表长度-1，返回第一个节点的数据；

```javascript
...

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

...
```

> 代码清单：`removeLast()` 方法实现

**功能：移除链表尾部一个节点**

**思路：获取链表尾部节点的上一个节点，把他的指针域指向`null`**

实现步骤如下：

1. 判断如果链表长度为0，则返回`null`;
2. 声明`current`为头部节点，`prev`为上一个节点，初识值为`null`;
3. 以节点的指针域是否为空为条件，循环链表获取链表的最后一个节点的前一个节点；
4. 设置`prev`节点的指针域为`null`;
5. 链表长度-1，返回最后一个节点的数据；

```javascript
...

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

...
```

> 代码清单：`getFirst()` 方法实现

**功能：获取链表头部一个元素**

```javascript
...

// 获取链表头部一个元素
getFirst(){
    if(this.head.getNext()){
        return this.head.getNext().getEle();
    }
    return null;
}

...
```

> 代码清单：`getLast()`方法实现

**功能：获取链表尾部一个元素**

**思路：以节点的指针域是否为空为条件拿到最后一个元素，返回他的数据**

```javascript
...

// 获取链表尾部一个元素
getLast(){
    let current = this.head;
    while(current.getNext()){
        current = current.getNext();
    }
    return current.getEle();
}

...
```

#### 双向链表

双向链表有两个指针，一个在头部（`head`），一个在尾部（`tail`） ；双向链表的节点有两个指针域（前驱与后继）分别指向上一个节点与下一个节点；