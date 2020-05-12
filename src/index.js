import Stack from './structures/Stack'
import Queue from './structures/Queue'
import PriorityQueue from './structures/PriorityQueue'
//栈实现十进制转二进制
const dec2bin = (num)=>{
    const s = new Stack();
    while(num>0){
        s.push(num%2);
        num = Math.floor(num/2);
    }
    let bin = '';
    while(!s.isEmpty()){
        bin += s.pop()
    }
    return bin;
}
// console.log(dec2bin(100));
//队列
const queue = new Queue()
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
const pq = new PriorityQueue();
pq.enqueue({name:'bulang'},1);
pq.enqueue({name:'liu'},5);
pq.enqueue({name:'wang'},3);
pq.enqueue({name:'ww'},2);
console.log(pq);