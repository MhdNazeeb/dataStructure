// let a=[1,2,-1,32,42,12,35,67,54]

// for( let i=1;i<a.length;i++){
//     let j=i-1
//     let curr=a[i]
//     while (j>=0&&a[j]<curr) {
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=curr
// }
// console.log(a);

// let s;
// do{
//      s=false
//     for(let i=0;i<a.length-1;i++){
//       if (a[i]>a[i+1]) {
//             let temp=a[i]
//             a[i]=a[i+1]
//             a[i+1]=temp
//             s=true
//         }

//     }

// }while(s)
// console.log(a);
// let s;
// do{
//    s=false
//     for(let i=0;i<a.length-1;i++){
//         if (a[i]<a[i+1]) {
//             let temp=a[i]
//             a[i]=a[i+1]
//             a[i+1]=temp
//             s=true
//         }
//     }
// }while(s)
// console.log(a);
// // console.log(a);
// // let a=[30,43,21,45,64,-4,56]
// // for(let i=1;i<a.length;i++){
// //     let curr=a[i]
// //     let j=i-1
// //     while (j>=0&&a[j]<nit) {
// //         a[j+1]=a[j]
// //         j--
// //     }
// //     a[j+1]=curr
// // }
// // console.log(a);

// let a=[10,2,34,56,76,54,34]

// for(let i=1;i<a.length;i++){
//    let curr=a[i]
//    let j=i-1
//    while (j>=0&&a[j]>curr) {
//        a[j+1]=a[j]
//        j--
//    }
//    a[j+1]=curr
// }
// console.log(a,'dddd');
// function  spliting(a) {
//     if (a.length<2) {
//         return a
//     }
//     let mid=Math.floor((a.length)/2)
//     let startArr=a.slice(0,mid)
//     console.log(startArr,'dddddd');
//     let endArr=a.slice(mid)
//     console.log(endArr,'ssdsdsdsd');
//     return mergesort(spliting(startArr),spliting(endArr))
// }
// function mergesort(startArr,endArr) {
//     const sortedArr=[]
//     while (startArr.length&&endArr.length) {
//         if(startArr[0]>endArr[0]){
//             sortedArr.push(startArr.shift())
//         }else{
//             sortedArr.push(endArr.shift())
//         }
//         console.log(sortedArr,"sort")

//     }

//     return [...sortedArr,...endArr,...startArr]
// }
// console.log(spliting([5,1,6,99,43,67]));
// let b=[]
// let k;

// function mergsort(a,start,end) {

//     console.log(start,end,'hhhhhhhhhhh');
//   if (start < end) {
//     let mid = Math.floor((start + end) / 2);
//     mergsort(a, start, mid);
//     mergsort(a, mid + 1, end);
//     merge1(a, start, mid, end);
//   }
// }
//
// function split(a) {
//     if (a.length<2) {
//         return a
//     }
//   let mid = Math.floor((a.length )/2);
//   let startArr = a.slice(0, mid);
//   let endArr = a.slice(mid);
//   return mergesort(split(startArr),split(endArr))
// }
// function mergesort(startArr,endArr) {
//     let sortedarr=[]
//     while (startArr.length&&endArr.length) {
//         if (startArr[0]<=endArr[0]) {
//             sortedarr.push(startArr.shift())
//         }else{
//             sortedarr.push(endArr.shift())
//         }
//     }
//     return [...sortedarr,...startArr,...endArr]
// }

// console.log(split([1,2,-1,3,45,43,21,23,45,67]));

// function insertion(a) {
//     for (let i = 0;i< a.length; i++) {
//         let curr=a[i]
//         let j=i-1
//         while (j>=0&&a[j]>curr) {
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=curr
//     }
//     return  a
// }

// console.log(insertion([1,4,55,6,77,65,-1,23,45]));

// function spliting(a) {
//     if (a.length<2) {
//         return a
//     }
//     let mid = Math.floor((a.length)/2)
//     let startArr=a.slice(0,mid)
//     let endArr=a.slice(mid)
//     return mergesort(spliting(startArr),spliting(endArr))

// }
// function mergesort(startArr,endArr) {
//     console.log(startArr,'first');
//     console.log(endArr,'second');
//     let sortedArr=[]
//     while (startArr.length&&endArr.length) {
//         if (startArr[0]<=endArr[0]) {
//             sortedArr.push(startArr.shift())
//         }else{
//             sortedArr.push(endArr.shift())
//         }

//     }

//     return [...sortedArr,...startArr,...endArr]

// }

// console.log(spliting([5,-5,20]));

// function spliting(a, start, end) {
//   if (start < end) {
//     let mid=Math.floor((start+end)/2)
//     spliting(a,start,mid)
//     spliting(a,mid+1,end)
//     mergesort(a,start,mid,end)
//   }
// }

// function mergesort(a,start,mid,end,) {
//     let i=start
//     let j=mid+1
//      end=start
//      let k=0
//      let b=[]
//     while (i<=mid&&j<=end) {
//         if (a[i]<=a[j]) {
//             b[k]=a[i]
//             i++
//             k++
//         }else{
//             b[k]=a[j]
//             j++
//             k++
//         }
//     }
//     if (i>mid) {
//         while (j<=end) {
//             b[k]=a[j]
//             k++
//             j++
//         }
//     }else{
//         while (i<=mid) {
//             b[k]=a[i]
//             i++
//             k++
//         }

//     }

// }
// let a=[1,2,3,4,5-3]
// let b=a.length-1
// spliting(a,0,b)
// console.log(a);

// function mergeSort(arr) {
//     if (arr.length > 1) {
//       const mid = Math.floor(arr.length / 2);
//       const leftArr = arr.slice(0, mid);
//       const rightArr = arr.slice(mid);

//       // Recursively sort the left and right subarrays
//       mergeSort(leftArr);
//       mergeSort(rightArr);

//       // Merge the sorted subarrays
//       let i = j = k = 0;
//       while (i < leftArr.length && j < rightArr.length) {
//         if (leftArr[i] < rightArr[j]) {
//           arr[k] = leftArr[i];
//           i++;
//         } else {
//           arr[k] = rightArr[j];
//           j++;
//         }
//         k++;
//       }

//       while (i < leftArr.length) {
//         arr[k] = leftArr[i];
//         i++;
//         k++;
//       }

//       while (j < rightArr.length) {
//         arr[k] = rightArr[j];
//         j++;
//         k++;
//       }
//     }
//     console.log(arr,'kkkkkkkkk')

//   }

//   mergeSort([1,23,3,4,5,6,-9,5])

// class Stack {
// constructor(){
//     this.items=[]
// }
// push(e){
//     this.items.push(e)
// }
// pop(){
//     this.items.pop()
// }
// peek(){
//     this.items[this.items.length-1]
// }
// size(){
//     return this.items.length
// }

// print(){
//     console.log(this.items.toString());
// }
// reverse(){
//     for (let i = 0; i < this.items.length/2; i++) {
//            let temp=this.items[i]
//            this.items[i]=this.items[this.length-1-i]
//            this.items[this.length-1-i]=temp
//     }
// }
// }

// const stack = new Stack();
// stack.push(12);
// stack.push(22);
// stack.push(32);
// stack.push(42);
// stack.reverse()
// stack.print();

// class queue{
//     constructor(){

//         this.items=[]
//     }
//     push(e){
//         this.items.push(e)
//     }
//     delete(){
//         this.items.shift()
//     }

// }

// let a=[1,2,3,-3,45,33,4,5]
// let s;
// do{
//     s=false
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]<a[i+1]){
//             let temp=a[i]
//             a[i]=a[i+1]
//             a[i+1]=temp
//             s=true
//         }
//     }
// }while(s)
// console.log(a);

// let b=[20,34,22,34,54,-3,45]

// for (let i = 1; i< b.length; i++) {
//      let curr=b[i]
//      let j=i-1
//      while (j>=0&&b[j]<curr) {
//         b[j+1]=b[j]
//         j--
//      }
//      b[j+1]=curr
// }
// console.log(b);

// function spliting(a) {
//     if(a.length<2){
//         return a
//     }
//     let mid=Math.floor((a.length)/2)
//     let startArr=a.slice(0,mid)
//     let endArr=a.slice(mid)
//     return mergesorte(spliting(startArr),spliting(endArr))
// }
// function mergesorte(startArr,endArr) {
//     console.log(startArr,'first');
//     console.log(endArr,'second');
//     let sortedArr=[]
//     if (startArr[0]>endArr[0]) {
//         sortedArr.push(endArr.shift())
//     }else{
//         sortedArr.push(startArr.shift())
// }
//  return [...sortedArr,...startArr,...endArr]
// }

// console.log(spliting([12,3,23,21,34,-2,34,54]));

// function sort(a) {
//     if (a.length<2) {
//         return a
//     }
//    let pivot=a[a.length-1]
//    let leftarr=[]
//    let rightArr=[]
//    for (let i = 0; i < a.length-1; i++) {
//       if (a[i]<pivot) {
//        leftarr.push(a[i])
//       }else{
//         rightArr.push(a[i])
//       }
//    }
//    return [...sort(leftarr),pivot,...sort(rightArr)]
// }
// console.log(sort([1,22,33,22,34,56,-2,32]));

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   enque(val) {
//     this.items.push(val);
//   }
//   print(){
//     console.log(this.items.toString());
//   }
//   deque(){
//     this.items.shift()
//   }
//   peek(){
//    return this.items[this.items.length-1]
//   }

// }

// const queue=new Queue()
// queue.enque(30)
// queue.enque(40)
// queue.enque(60)
// queue.enque(40)
// queue.deque()
// queue.print()
// console.log(queue.peek());

// let a = [12, 33, 45, 32, 55, 44, 3, 6];
// let s;
// do{
//     s=false
//     for(let i=0;i<a.length-1;i++){
//         if (a[i]<a[i+1]) {
//          let temp=a[i]
//          a[i]=a[i+1]
//          a[i+1]=temp
//          s=true
//         }
//      }
// }while(s)
// console.log(a);
// for(let i=1;i<a.length;i++){
//     let curr=a[i]
//     let j=i-1
//     while (j>=0&&a[j]>curr) {
//         a[j+1]=a[j]
//         j--
//     }

//     a[j+1]=curr

// }
// for(let i=0;i<a.length-1;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]<a[j]){
//             let temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }

// console.log(a);

// function spliting(a) {
//   if (a.length < 2) {
//     return a;
//   }
//   let mid = Math.floor(a.length / 2);
//   let startArr = a.slice(0, mid);
//   let endArr = a.slice(mid);
//   return mergesort(spliting(startArr), spliting(endArr));
// }
// function mergesort(startArr, endArr) {
//   let sortedarr = [];
//   while (startArr.length && endArr.length) {
//     if (startArr[0] < endArr[0]) {
//       sortedarr.push(startArr.shift());
//     } else {
//       sortedarr.push(endArr.shift());
//     }
//   }
//   return [...sortedarr, ...startArr, ...endArr];
// }
// console.log(spliting([12, 34, -2, 34, 23, 56, 76]));

// class HashTable {
//   constructor(size) {
//     this.table = new Array(size)
//     this.size = size;
//   }
//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += (key.charCodeAt(i) * i)
//     }
//     return total
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     this.table[index] = value;
//   }
//   get(key) {
//     const index = this.hash(key)
//     return this.table[index]
//   }
//   remove(key){
//     const index=this.hash(key)
//     this.table[index]=undefined
//   }
//   display(){
//     for(let i=0;i<this.table.length;i++){
//         if (this.table[i]) {
//             console.log(i,this.table[i]);
//         }
//     }

//   }

// }

// const hash = new HashTable(50);
// hash.set("name", "naseeb");
// hash.set("age", 24);
// hash.set("age", 54);
// hash.display()

// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }
//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }

//     return total % this.size;
//   }
//   set(key, value) {
//     const index = this.hash(key);
//     console.log(index, "kkkkkkkkk");
//     let bucket = this.table[index];
//     if (!bucket) {
//       bucket = [[key, value]];
//     } else {
//       const samekey = bucket.find((item) => item[0] === key);
//       if (samekey) {
//         samekey[1] = value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }

//   }
//   get(key) {
//     const index = this.hash(key);
//     console.log(index, "klllllllllll");
//     const bucket = this.table[index];

//     if (bucket) {
//       const samekey = bucket.find((item) => item[0] === key);
//       if (samekey) {
//         return samekey[1];
//       }
//     }
//     return -1;
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {

//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }
// const hash = new HashTable(40);
// hash.set("name", "seeb");
// hash.set("name", "nkkkkk");
// hash.set("name", "nasseb");
// hash.set("name", "nddkkk");
// hash.set("name", "naseeb");
// hash.set("name", "nkkkkk");
// console.log(hash.get("name"));
// hash.display()
// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }
//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }
//   set(key, value) {
//     const index = this.hash(key);
//     let bucket=this.table[index]
//     if(!bucket){
//         this.table[index]=[[key,value]]
//     }else{
//         const samekey=bucket.find(item=>item[0]===key)
//         if (samekey) {
//             samekey[1]=value
//         }else{
//           bucket.push([key,value])
//         }
//     }
//   }
//   display(){
//     for (let i = 0; i < this.table.length; i++) {
//        if (this.table[i]) {
//         console.log(i,  this.table[i]);
//        }

//     }
//   }
//   get(key){
//   const index=this.hash(key)
//   let bucket=this.table[index]
//   if (bucket) {
//     const samekey=bucket.find(item=>item[0]===key)
//     if (samekey) {
//         return samekey[1]
//     }
//   }
//   }
//   remove(key){
//     const index=this.hash(key)
//     const bucket=this.table[index]
//     if (bucket) {
//         const samekey=bucket.find(item=>item[0]===key)
//         if (samekey) {
//             return bucket.splice(bucket.indexOf(samekey),1)
//         }
//     }else{
//         return -1
//     }
//   }
// }
// const hash = new HashTable(50);
// hash.set("name", "naseeb");
// hash.set("mane", "riyas");
// console.log(hash.get('mane'));
// console.log(hash.remove('name'));
// hash.remove("name");
// console.log(hash.get('name'));
// hash.display();

// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(val){
//         this.items.push(val)
//     }
//     pop(){
//         this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//        return this.items.length===0
//     }
//     length(){
//         return this.items.length
//     }

// }
// class Queue{
//  constructor(){
//     this.items=[]
//  }
//  enque(val){
//     this.items.push()
//  }
//  deque(){
//   this.items.shift()
//  }
//  peek(){
//     return this.items[0]
//  }
// }

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return this.size % total;
  }
  set(key, value) {
    const index = this.hash(key);
    let bucket=this.table[index]
    if (!bucket) {
        this.table[index]=[[key,value]]
    }else{
        const samekey=bucket.find(item=>item[0]===key)
        if (samekey) {
            samekey[1]=value
        }else{
            bucket.push([key,value])
        }
    }
   
  }
  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    let bucket=this.table[index]
    if (bucket) {
        const samekey=bucket.find(item=>item[0]===key)
        if (samekey) {
           return samekey[1]
        }
    }
  }
  remove(key) {
    const index = this.hash(key);
    let bucket=this.table[index] 
    if (bucket) {
        const samekey=bucket.find(item=>item[0]===key)
        if (samekey) {
            return bucket.splice(bucket.indexOf(samekey),1)
         }
    }
  }
}
const hash = new HashTable(50);
hash.set("name", "naseeb");
hash.set('mane', "riyas");
hash.set('amne','athul')
// console.log(hash.get("name"));
console.log(hash.remove('name'))


hash.print();
