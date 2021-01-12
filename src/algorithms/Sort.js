/*
 * @Author: liu wang wang
 * @Date: 2020-06-28 13:56:41
 * @LastEditTime: 2021-01-12 20:42:21
 * @LastEditors: liu wang wang
 * @Description: 排序算法大合集
 * @FilePath: \DataStructuresAndAlgorithms\src\algorithms\Sort.js
 */ 
class Sort {
    constructor(){
        
    }
    swap(arr,firstIndex,secondIndex){
        arr[firstIndex] ^= arr[secondIndex];
        arr[secondIndex] ^= arr[firstIndex];
        arr[firstIndex] ^= arr[secondIndex];
    }
    /**
     * 冒泡排序
     * @param {Array} arr 
     */
    bubbleSort(arr){
        //倒数第二位跟最后一位进行比较，所以只需要遍历到倒数第二位
        const arrCopy = [...arr];
        const len = arrCopy.length-1;
        for(let i=0; i<len; i++){
            for(let j=0; j<len-i;j++){
                if(arrCopy[j]>arrCopy[j+1]){
                    // 交换数据
                    this.swap(arrCopy, j , j+1);
                }
            }
        }
        return arrCopy;
    }
    /**
     * 选择排序
     * @param {Array} arr 
     */
    selectSort(arr){
        let minIndex = null;
        const arrCopy = [...arr];
        const len = arrCopy.length;
        for(let i=0; i<len-1; i++){
            minIndex = i;
            for(let j=i+1; j<len; j++){
                if(arrCopy[minIndex]>arrCopy[j]){
                    minIndex = j
                }
            }
            if(minIndex != i){
                this.swap(arrCopy, minIndex , i);
            }
        }
        return arrCopy;
    }
    /**
     * 插入排序
     * @param {Array} arr 
     */
    insertionSort(arr){
        const arrCopy = [...arr];
        const len = arrCopy.length;
        for(var i = 1; i<len; i++){
            let sortMaxIndex = i-1;
            let current = arrCopy[i];
            while(sortMaxIndex>=0 && arrCopy[sortMaxIndex]>current){
                arrCopy[sortMaxIndex+1] = arrCopy[sortMaxIndex];
                sortMaxIndex--;
            }
            arrCopy[sortMaxIndex+1] = current;
        }
        return arrCopy;
    }
    /**
     * 希尔排序
     * @param {Array} arr 
     */
    shellSort(arr){
        const arrCopy = [...arr];
        const len = arrCopy.length;
        let gap = Math.floor(len/2);
        while(gap>=1) {
            for(let i=gap; i<len; i++) {
                let sortMaxIndex = i-gap;
                let current = arrCopy[i];
                while(sortMaxIndex>=0 && arrCopy[sortMaxIndex]>current) {
                    arrCopy[sortMaxIndex+gap] = arrCopy[sortMaxIndex];
                    sortMaxIndex-=gap;
                }
                arrCopy[sortMaxIndex+1] = current;
            }
            gap = Math.floor(gap/2);
        }
        return arrCopy;
    }
}

export default Sort;