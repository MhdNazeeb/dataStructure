// // class node {
// //   constructor(val) {
// //     this.value = val;
// //     this.right = null;
// //     this.left = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //     isEmpty() {
// //       return this.root === null;
// //     }
// //     insert(val) {
// //       const newnode = new node(val);
// //       if (this.isEmpty()) {
// //         this.root = newnode;
// //       } else {
// //         this.insertnode(this.root, newnode);
// //       }
// //     }
// //     insertnode(root, newnode) {
// //       if (newnode.value < root.value) {
// //         if (root.left === null) {
// //           root.left = newnode;
// //         } else {
// //           this.insertnode(root.left, newnode);
// //         }
// //       } else {
// //         if (root.right === null) {
// //           root.right = newnode;
// //         } else {
// //           this.insertnode(root.right, newnode);
// //         }
// //       }
// //     }
// //     search(root, value) {
// //       if (!root) {
// //         console.log("ffffffff");
// //         return false;
// //       } else {
// //         if (root.value === value) {
// //           return true;
// //         } else if (value < root.value) {
// //           return this.search(this.left, value);
// //         } else {
// //           return this.search(this.right, value);
// //         }
// //       }
// //     }
// //   isEmpty() {
// //     return this.root === null;
// //   }
// //   insert(value) {
// //     const newnode = new node(value);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.insertnode(this.root, newnode);
// //     }
// //   }
// //   insertnode(root, newnode) {

// //     if (newnode.value < root.value) {
// //       if (root.left === null) {
// //         root.left = newnode;
// //       } else {
// //         this.insertnode(root.left, newnode);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = newnode;
// //       } else {
// //         this.insertnode(root.right, newnode);
// //       }
// //     }
// //   }
// //   search(root,value){
// //       if(!root){
// //         return false

// //       }else{
// //         if (root.value===value) {
// //           return true
// //         }
// //         if(value < root.value){
// //           return this.search(root.left,value)
// //         }else{
// //           return this.search(root.right,value)
// //         }
// //       }

// //   }
// //   preOder(root){
// //     if (root) {
// //       console.log(root.value);
// //       this.preOder(root.left)
// //       this.preOder(root.right)
// //     }
// //   }
// //   inOder(root){
// //     if (root) {
// //       this.inOder(root.left)
// //       console.log(root.value);
// //       this.inOder(root.right)
// //     }
// //   }
// //   postOder(root){
// //     if(root){
// //     this.postOder(root.left)
// //     this.postOder(root.right)
// //     console.log(root.value)
// //     }
// //   }
// //   levelOrder(){
// //     let queue=[]
// //     queue.push(this.root)
// //     while (queue.length) {
// //       let curr=queue.shift()
// //       console.log(curr.value);
// //       if (curr.left) {
// //         queue.push(curr.left)
// //       }
// //       if(curr.right){
// //         queue.push(curr.right)
// //       }
// //     }
// //   }
// //   min(root){
// //     if(!root.left){
// //       return root.value
// //     }else{
// //       return this.min(root.left)
// //     }
// //   }
// //   max(root){
// //     if(!root.right){
// //       return root.value
// //     }else{
// //       return this.min(root.right)
// //     }
// //   }

// // }
// // const bst = new binarySearchTree();
// // bst.insert(40);
// // bst.insert(70);
// // bst.insert(30);
// // bst.insert(20);
// // console.log(bst.search(bst.root,30));
// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));

// // class node {
// //   constructor(val) {
// //     this.value = val;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //     return this.root === null;
// //   }
// //   insert(value) {
// //     const newnode = new node(value);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.insertednode(this.root, newnode);
// //     }
// //   }
// //   insertednode(root, newnode) {
// //     if (newnode < root.value) {
// //       if (root.left === null) {
// //         root.left = newnode;
// //       } else {
// //         this.insertednode(root.left, newnode);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = newnode;
// //       } else {
// //         this.insertednode(root.right, newnode);
// //       }
// //     }
// //   }
// //   search(root, val) {
// //     if (!root) {
// //       return false;
// //     }
// //     if (root.value === val) {
// //       return true;
// //     }
// //     if (val < root.left) {
// //       return this.search(root.left, val);
// //     } else {
// //       return this.search(root.right, val);
// //     }
// //   }
// //   preOder(root) {
// //     if (root) {
// //       console.log(root.value);
// //       this.preOder(root.left);
// //       this.preOder(root.right);
// //     }
// //   }
// //   inOder(root) {
// //     if (root) {
// //       this.inOder(root.left);
// //       console.log(root.value);
// //       this.inOder(root.right);
// //     }
// //   }
// //   postOder(root) {
// //     this.preOder(root.left);
// //     this.preOder(root.right);
// //     console.log(root.value);
// //   }
// //   levelOder() {
// //     let queue=[];
// //     queue.push(this.root)
// //     while (queue.length) {
// //       let curr=queue.shift()
// //       console.log(curr.value);
// //       if (curr.left) {
// //         queue.push(curr.left)
// //       }
// //       if(curr.right){
// //         queue.push(curr.right)
// //       }
// //     }
// //   }
// // }
// // const bst = new binarySearchTree();
// // bst.insert(40);
// // bst.insert(70);
// // bst.insert(30);
// // bst.insert(20);
// // bst.levelOder()

// // class node {
// //   constructor(val) {
// //     this.value = val;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //     return this.root === null;
// //   }
// //   insert(val) {
// //     const newnode = new node(val);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.insertnode(this.root, newnode);
// //     }
// //   }
// //   insertnode(root, newnode) {
// //     if (newnode.value < root.value) {
// //       if (root.left === null) {
// //         root.left = newnode;
// //       } else {
// //         this.insertnode(root.left, newnode);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = newnode;
// //       } else {
// //         this.insertnode(root.right, newnode);
// //       }
// //     }
// //   }
// //   search(root, val) {
// //     if (!root) {
// //       return false;
// //     }
// //     if (root.value === val) {
// //       return true;
// //     }
// //     if (val < root.left) {
// //       return this.search(root.left, val);
// //     } else {
// //       return this.search(root.right, val);
// //     }
// //   }
// //   preOder(root) {
// //     if (root) {
// //       console.log(root.value);
// //       this.preOder(root.left);
// //       this.preOder(root.right);
// //     }
// //   }
// //   inOder(root) {
// //     if (root) {
// //       this.preOder(root.left);
// //       console.log(root.value);
// //       this.preOder(root.right);
// //     }
// //   }
// //   PostOder(root) {
// //     if (root) {
// //       this.preOder(root.left);
// //       this.preOder(root.right);
// //       console.log(root.value);
// //     }
// //   }
// //   LevelOder(root){
// //     if (root) {
// //       let queue=[]
// //       queue.push(this.root)
// //       while (queue.length) {
// //         let curr=queue.shift()
// //         console.log(curr.value);
// //         if (curr.left) {
// //           queue.push(curr.left)
// //         }
// //         if (curr.right) {
// //           queue.push(curr.right)
// //         }
// //       }
// //     }
// //   }

// // }
// // const bst = new binarySearchTree();
// // bst.insert(10);
// // bst.insert(15);
// // bst.insert(100);
// // bst.insert(40);
// // bst.insert(90);
// // bst.insert(22);
// // bst.inOder(bst.root);
// // bst.preOder(bst.root);
// // bst.preOder(bst.root)
// // console.log(bst.search(bst.root,15));

// // const matrix=[
// //   [0,10,1],
// //   [0,10,1],
// //   [0,10,1]
// // ]
// // console.log(matrix[0][2]);

// // const adjencylist={
// //   'A':['naseeb','riyas'],
// //   'B':['kiran','sinan']
// // }

// // console.log(adjencylist['A']);
// // class graph{
// //   constructor(){
// //     this.adjancylist={}
// //   }
// //   addVertex(vertex){
// //    if (!this.adjancylist[vertex]) {
// //      this.adjancylist[vertex]=new Set()
// //    }
// //   }
// //   addEdge(vertex1,vertex2){
// //     if (!this.adjancylist[vertex1]) {
// //       this.addVertex(vertex1)
// //     }
// //     if(!this.adjancylist[vertex2]){
// //       this.addVertex(vertex2)
// //     }
// //     this.adjancylist[vertex1].add(vertex2)
// //     this.adjancylist[vertex2].add(vertex1)
// //   }
// //   display(){
// //     for(let vertex in this.adjancylist){
// //       console.log(vertex,'>',[...this.adjancylist[vertex]]);
// //     }
// //   }
// //   hasEdge(vertex1,vertex2){
// //       return(
// //         this.adjancylist[vertex1].has(vertex2)&&
// //         this.adjancylist[vertex2].has(vertex1)
// //       )
// //   }

// // }

// // const grp=new graph()
// // grp.addVertex('a')
// // grp.addVertex('b')
// // grp.addVertex('c')
// // grp.addEdge('a','c')
// // grp.addEdge('a','b')
// // grp.display()
// // console.log(grp.hasEdge('a','b'));

// // class node {
// //   constructor(val) {
// //     this.value = val;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //     return this.root === null;
// //   }
// //   insert(val) {
// //     const newnode = new node(val);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.insertednode(this.root, newnode);
// //     }
// //   }
// //   insertednode(root, node) {
// //     if (node < root.value) {
// //       if (root.left === null) {
// //         root.left = node;
// //       } else {
// //         this.insertednode(root.left, node);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = node;
// //       } else {
// //         this.insertednode(root.right, node);
// //       }
// //     }
// //   }
// //   search(root,val) {

// //     if (!root) {

// //       return false;
// //     }
// //     if (root.value === val) {

// //       return true;
// //     }
// //     if (val < root.value) {
// //       return this.search(root.left,val)
// //     }else{
// //     return this.search(root.right,val)
// //     }
// //   }
// //   preOder(root){
// //     if (root) {
// //       console.log(root.value);
// //       this.preOder(root.left)
// //       this.preOder(root.right)
// //     }
// //   }
// //   inOder(root){
// //     if (root) {

// //       this.preOder(root.left)
// //       console.log(root.value);
// //       this.preOder(root.right)
// //     }
// //   }
// //   postOder(root){
// //     if (root) {

// //       this.preOder(root.left)
// //       this.preOder(root.right)
// //       console.log(root.value);
// //     }
// //   }
// //   LevelOder(root){
// //    let queue=[]
// //    queue.push(this.root)
// //    while (queue.length) {
// //     let curr=queue.shift()
// //     console.log(curr.value);
// //     if (curr.left) {
// //       queue.push(curr.left)
// //     }
// //     if (curr.right) {
// //       queue.push(curr.right)
// //     }

// //    }
// //   }
// // }
// // const bst=new binarySearchTree()
// // bst.insert(40)
// // bst.insert(50)
// // bst.insert(60)
// // bst.insert(20)
// // bst.insert(407)
// // console.log(bst.search(bst.root,407));
// // // bst.postOder(bst.root)
// // bst.LevelOder()

// // class graph {
// //   constructor() {
// //     this.adjancy = {};
// //   }
// //   advertex(vertex) {
// //     if (!this.adjancy[vertex]) {
// //       this.adjancy[vertex] = new Set();
// //     }
// //   }
// //   adedjes(vertex1, vertex2) {
// //     if (!this.adjancy[vertex1]) {
// //       this.advertex(vertex1);
// //     }
// //     if (!this.adjancy[vertex2]) {
// //       this.advertex(vertex2);
// //     }

// //     this.adjancy[vertex2].add(vertex1);
// //     this.adjancy[vertex1].add(vertex2);
// //   }
// //   display() {
// //     for (let vertex in this.adjancy) {
// //       console.log(vertex, "-->", [...this.adjancy[vertex]]);
// //     }
// //   }
// //   hasEdge(vertex1, vertex2) {
// //     return (
// //       this.adjancy[vertex1].has(vertex2) && this.adjancy[vertex2].has(vertex1)
// //     );
// //   }
// //   removeEdge(vertex1, vertex2) {
// //     this.adjancy[vertex1].delete(vertex2);
// //     this.adjancy[vertex2].delete(vertex1);
// //   }
// //   removeVertex(vertex) {
// //     if (!this.adjancy[vertex]) {
// //       console.log(["ll"]);
// //       return;
// //     }
// //     for (let adgasentvertex of this.adjancy[vertex]) {
// //       this.removeEdge(vertex, adgasentvertex);
// //     }
// //     delete this.adjancy[vertex];
// //   }
// // }

// // const grp = new graph();

// // grp.adedjes("A", "f");
// // grp.display();

// // class graph {
// //   constructor() {
// //     this.adjacentList = {};
// //   }
// //   addVertex(vertex) {
// //     if (!this.adjacentList[vertex]) {
// //       this.adjacentList[vertex] = new Set();
// //     }
// //   }
// //   addEdges(vertex1, vertex2) {
// //     if (!this.adjacentList[vertex1]) {
// //       this.addVertex(vertex1);
// //     }
// //     if (!this.adjacentList[vertex2]) {
// //       this.addVertex(vertex2);
// //     }
// //     this.adjacentList[vertex1].add(vertex2);
// //     this.adjacentList[vertex2].add(vertex1);
// //   }
// //   display() {
// //     for (let vertex in this.adjacentList) {
// //       console.log(vertex,'-->',[...this.adjacentList[vertex]]);
// //     }
// //   }
// //   search(vertex1,vertex2){
// //     return(
// //       this.adjacentList[vertex1].has(vertex2)&&
// //       this.adjacentList[vertex2].has(vertex1)
// //     )
// //   }
// //   removeEdges(vertex1,vertex2){
// //     this.adjacentList[vertex1].delete(vertex2)
// //     this.adjacentList[vertex2].delete(vertex1)
// //   }
// //   removeVertex(vertex){
// //    if (!this.adjacentList[vertex]) {
// //     return null
// //    }
// //    for(let adjacent of this.adjacentList[vertex]){
// //       this.removeEdges(adjacent,vertex)
// //    }
// //    delete this.adjacentList[vertex]
// //   }
// // }
// // const grp=new graph()
// // grp.addEdges('n','v')
// // grp.addEdges('a','b')
// // grp.removeEdges('n','v')
// // grp.display()
// // console.log(grp.search('n','v'));

// // class MaxBinaryHeap {
// //   constructor() {
// //     this.arr = [];
// //   }

// //   heapify(arr, n, i) {
// //     let largest = i;
// //     const left = 2 * i + 1;
// //     const right = 2 * i + 2;

// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }

// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }

// //     if (largest !== i) {
// //       let temp = arr[i];
// //       arr[i] = arr[largest];
// //       arr[largest] = temp;
// //       this.heapify(arr, n, largest);
// //     }
// //   }

// //   insert(data) {
// //     this.arr.push(data);
// //     let i = this.arr.length - 1;
// //     while (i > 0) {
// //       const parent = Math.floor((i - 1) / 2);
// //       if (this.arr[i] <= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;

// //       i = parent;
// //     }
// //   }

// //   remove() {
// //     const n = this.arr.length;
// //     if (n === 0) {
// //       return null;
// //     }
// //     let max = this.arr[0];
// //     this.arr[0] = this.arr[n - 1];
// //     console.log(this.arr[0],'bbbbbbbbb');
// //     this.arr.pop();
// //     this.heapify(this.arr, n - 1, 0);
// //     return max;
// //   }

// //   heapSort() {
// //     const n = this.arr.length;

// //     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
// //       this.heapify(this.arr, n, i);
// //     }

// //     for (let i = n - 1; i > 0; i--) {
// //       let temp = this.arr[0];
// //       this.arr[0] = this.arr[i];
// //       this.arr[i] = temp;
// //       this.heapify(this.arr, i, 0);
// //     }
// //     return this.arr;
// //   }
// //   display(){
// //     console.log(this.arr);
// //   }
// // }

// // const h = new MaxBinaryHeap();
// // h.insert(20);
// // h.insert(34);
// // h.insert(56);
// // h.insert(76);
// // h.insert(95);
// // h.display()
// // h.remove();

// // class graph {
// //   constructor() {
// //     this.adjacentlist = {};
// //   }
// //   advertx(vertx) {
// //     if (!this.adjacentlist[vertx]) {
// //       this.adjacentlist[vertx] = new Set();
// //     }
// //   }
// //   addEdjes(vertex1, vertex2) {
// //     if (!this.adjacentlist[vertex1]) {
// //       this.advertx(vertex1);
// //     }
// //     if (!this.adjacentlist[vertex2]) {
// //       this.advertx(vertex2);
// //     }
// //     this.adjacentlist[vertex1].add(vertex2);
// //     this.adjacentlist[vertex2].add(vertex1);
// //   }
// //   removevertx(vertex1){
// //     for(let vertex of this.adjacentlist[vertex1]){
// //       this.removeEdjes(vertex,vertex1)
// //     }
// //      delete this.adjacentlist[vertex1]

// //   }
// //   removeEdjes(vertex1,vertex2){
// //     this.adjacentlist[vertex1].delete(vertex2)
// //     this.adjacentlist[vertex2].delete(vertex1)
// //   }
// //   display(){
// //     for(let vertex in this.adjacentlist){
// //       console.log(vertex+'-->',[...this.adjacentlist[vertex]]);
// //     }
// //   }
// // }

// // const grp=new  graph()
// // grp.addEdjes('A','M')
// // grp.display()
// // [1, 1, 2, 4, 5, 7, 10, 100]

// //  class MaxBinaryHeap {
// //   constructor() {
// //     this.arr = [];
// //   }

// //   heapify(arr, n, i) {
// //     let largest = i;
// //     const left = 2 * i + 1;
// //     const right = 2 * i + 2;

// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }

// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }

// //     if (largest !== i) {
// //       let temp = arr[i];
// //       arr[i] = arr[largest];
// //       arr[largest] = temp;
// //       this.heapify(arr, n, largest);
// //     }
// //   }

// //   insert(data) {
// //     this.arr.push(data);
// //     let i = this.arr.length - 1;

// //     while (i > 0) {
// //       const parent = Math.floor((i - 1) / 2);
// //       if (this.arr[i] <= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;

// //       i = parent;
// //     }
// //   }

// //   remove() {
// //     const n = this.arr.length;
// //     if (n === 0) {
// //       return null;
// //     }
// //     let max = this.arr[0];
// //     this.arr[0] = this.arr[n - 1];
// //     this.arr.pop();
// //     this.heapify(this.arr, n - 1, 0);
// //     return max;
// //   }

// //   heapSort() {
// //     const n = this.arr.length;

// //     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
// //       this.heapify(this.arr, n, i);
// //     }

// //     for (let i = n - 1; i > 0; i--) {
// //       let temp = this.arr[0];
// //       this.arr[0] = this.arr[i];
// //       this.arr[i] = temp;
// //       this.heapify(this.arr, i, 0);
// //     }
// //     return this.arr
// //   }
// // }

// // const h = new MaxBinaryHeap();
// // h.insert(20);
// // h.insert(34);
// // h.insert(56);
// // h.insert(76);
// // h.insert(95);
// // h.remove();
// // console.log(h.arr);
// // console.log(h.heapSort());

// // class binaryMax {
// //   constructor() {
// //     this.arr = [];
// //   }
// //   heapify(arr, n, i) {
// //     let largest = i;
// //     let left = 2 * i + 1;
// //     let right = 2 * i + 2;
// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }
// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }
// //     if (!largest == i) {
// //       let temp = arr[i];
// //       arr[i] = arr[largest];
// //       arr[largest] = temp;
// //       this.heapify(arr, n, largest);
// //     }
// //   }
// //   insert(data) {
// //     this.arr.push(data);
// //     let i = this.arr.length - 1;
// //     while (i > 0) {
// //       let parent = Math.floor((i - 1) / 2);
// //       if (this.arr[i] <= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;
// //       i = parent;
// //     }
// //   }

// //   remove() {
// //     const n = this.arr.length;
// //     if (n === 0) {
// //       return null;
// //     }
// //     let max = this.arr[0];
// //     this.arr[0] = this.arr[n - 1];
// //     this.arr.pop();
// //     this.heapify(this.arr, n - 1, 0);
// //     return max;
// //   }
// //   heapSort() {
// //     const n = this.arr.length;
// //     for (let i = Math.floor(n / 2); i >= 0; i--) {
// //       this.heapify(this.arr,n,i)
// //     }
// //     for(let i=n-1;i>0;i--){
// //      let temp=this.arr[0]
// //      this.arr[0]=this.arr[i]
// //      this.arr[i]=temp
// //      this.heapify(this.arr,i,0)
// //     }
// //   }
// // }
// // const max = new binaryMax();
// // max.insert(49);
// // max.insert(69);
// // max.insert(19);
// // max.insert(59);
// // console.log(max.arr);

// // class node {
// //   constructor(val) {
// //     this.value = val;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //     return this.root === null;
// //   }

// //   insert(value) {
// //     const newnode = new node(value);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.insertedNode(this.root, newnode);
// //     }
// //   }
// //   insertedNode(root, newnode) {
// //     if (newnode.value < root.value) {
// //       if (root.left === null) {
// //         root.left = newnode;
// //       } else {
// //         this.insertedNode(root.left, newnode);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = newnode;
// //       } else {
// //         this.insertedNode(root.right, newnode);
// //       }
// //     }
// //   }
// //   search(root,value){
// //    if(!root){
// //     return false
// //    }
// //    if (root.value===value) {
// //     return true
// //    }
// //    if (value<root.value) {
// //     return this.search(root.left,value)
// //    }else{
// //     return this.search(root.right,value)
// //    }
// //   }
// //   preOder(root) {
// //     if (root) {
// //       console.log(root.value);
// //       this.preOder(root.left);
// //       this.preOder(root.right);
// //     }
// //   }
// //   postOder(root){
// //     if (root) {
// //       this.postOder(root.left)
// //       this.postOder(root.right)
// //       console.log(root.value);
// //     }
// //   }
// //   inOder(root){
// //     if (root) {
// //       this.postOder(root.left)
// //       console.log(root.value);
// //       this.postOder(root.right)

// //     }
// //   }
// //   levelOder(root){
// //     if (root) {
// //       let queue=[]
// //       queue.push(this.root)
// //       while (queue.length) {
// //         let curr=queue.shift()
// //         console.log(curr.value);
// //         if (curr.left) {
// //           queue.push(curr.left)
// //         }
// //         if (curr.right) {
// //           queue.push(curr.right)
// //         }
// //       }
// //     }
// //   }
// //   max(root){
// //     if(!root.right){
// //         return root.value
// //     }else{
// //         this.max(root.right)
// //     }
// //   }
// // remove()
// // }
// // const bst = new binarySearchTree();
// // bst.insert(30);
// // bst.insert(20);
// // bst.insert(50);
// // bst.insert(60);
// // bst.insert(37);
// // bst.levelOder(bst.root)

// // class Node {
// //   constructor() {
// //     this.children = {};
// //     this.isWord = false;
// //   }
// // }

// // class Trie {
// //   constructor() {
// //     this.root = new Node();
// //   }

// //   insert(word) {
// //     let current = this.root;
// //     for (let i = 0; i < word.length; i++) {
// //       const char = word[i];
// //       if (!current.children[char]) {
// //         current.children[char] = new Node();
// //       }
// //       current = current.children[char];
// //     }
// //     current.isWord = true;
// //   }

// //   search(word) {
// //     let current = this.root;
// //     for (let i = 0; i < word.length; i++) {
// //       const char = word[i];
// //       if (!current.children[char]) {
// //         return false;
// //       }
// //       current = current.children[char];
// //     }
// //     return current.isWord;
// //   }

// //   startsWith(prefix) {
// //     let current = this.root;
// //     for (let i = 0; i < prefix.length; i++) {
// //       const char = prefix[i];
// //       if (!current.children[char]) {
// //         return false;
// //       }

// //       current = current.children[char];
// //     }

// //     return true;
// //   }
// // }
// // const trie = new Trie();
// // trie.insert("s");
// // trie.insert("a");
// // trie.insert("j");
// // console.log(trie.search("s"));
// // console.log(trie.startsWith("s"));
// // class Node {
// //   constructor() {
// //     this.children = {};
// //     this.isWord = false;
// //   }
// // }
// // class trie {
// //   constructor() {
// //     this.root = new Node();
// //   }
// //   insert(word) {
// //     let curr = this.root;
// //     for (let i = 0; i < word.length; i++) {
// //       let char = word[i];

// //       if (!curr.children[char]) {
// //         curr.children[char] = new Node();
// //       }

// //       curr = curr.children[char];
// //     }
// //     curr.isWord = true;
// //   }
// //   search(word) {
// //     let curr = this.root;
// //     for (let i = 0; i < word.length; i++) {
// //       let char = word[i];
// //       if (!curr.children[char]) {
// //         return false;
// //       }
// //       curr = curr.children[char];
// //     }
// //     return curr.isWord;
// //   }
// //   startWith(prefix) {
// //     let curr = this.root;
// //     for (let i = 0; i < prefix.length; i++) {
// //       let char = prefix[i];
// //       if (!curr.children[char]) {
// //         return false;
// //       }
// //       curr = curr.children[char];
// //     }
// //     return true;
// //   }
// // }
// // const t = new trie();
// // t.insert("n");
// // t.startWith("n");
// // console.log(t.search("n"));
// // class graph {
// //   constructor() {
// //     this.adjacentList = {};
// //   }
// //   addVertx(vertex) {
// //     if (!this.adjacentList[vertex]) {
// //       this.adjacentList[vertex] = new Set();
// //     }
// //   }
// //   addEdjes(vertex1, vertex2) {
// //     if (!this.adjacentList[vertex1]) {
// //       this.addVertx(vertex1);
// //     }
// //     if (!this.adjacentList[vertex2]) {
// //       this.addVertx(vertex2);
// //     }
// //     this.adjacentList[vertex1].add(vertex2);
// //     this.adjacentList[vertex2].add(vertex1);
// //   }
// //   display() {
// //     for (let vertex in this.adjacentList) {
// //       console.log(vertex, "-->",[...this.adjacentList[vertex]]);
// //     }
// //   }
// //   remove(vertex){
// //     if (!this.adjacentList[vertex]) {
// //         return false
// //     }else{
// //         for(let vertex1 of this.adjacentList[vertex]){
// //             this.removeVertex(vertex,vertex1)
// //         }

// //     }
// //   }
// //   removeVertex(vertex1,vertex2){
// //     this.adjacentList[vertex1].delete(vertex2)
// //     this.adjacentList[vertex2].delete(vertex1)

// //   }
// //   search(vertex1,vertex2){
// //     return(
// //         this.adjacentList[vertex1].has(vertex2)&&
// //         this.adjacentList[vertex2].has(vertex1)
// //     )
// //   }
// // }
// // const grp = new graph();
// // grp.addVertx("a");
// // grp.addEdjes("s", "f");
// // grp.display()
// // console.log(grp.search('s','f'));

// // class MaxBinaryHeap {
// //   constructor() {
// //     this.arr = [];
// //   }
// //   insert(data) {
// //     this.arr.push(data);
// //     let i = this.arr.length - 1;
// //     while (i > 0) {
// //       let parent = Math.floor((i - 1) / 2);
// //       if (this.arr[i] <= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;
// //       i = parent;
// //     }
// //   }
// //   removeNode() {
// //     let n = this.arr.length;
// //     if (n === 0) {
// //       return -1;
// //     }
// //     this.arr[0] = this.arr[n - 1];
// //     this.arr.pop();
// //     this.heapify(this.arr, n, 0);
// //   }
// //   heapify(arr, n, i) {
// //     let largest = i;
// //     let left = 2 * i + 1;
// //     let right = 2 * i + 2;
// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }
// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }
// //     if (largest !== i) {
// //       let temp = arr[i];
// //       arr[i] = arr[largest];
// //       arr[largest] = temp;
// //       this.heapify(arr, n, largest);
// //     }
// //   }
// //   heapSort() {
// //     let n = this.arr.length;
// //     for (let i = Math.floor(n / 2); i >= 0; i--) {
// //       this.heapify(this.arr, n, i);
// //     }
// //     for (let i = n - 1; i > 0; i--) {
// //       let temp = this.arr[0];
// //       this.arr[0] = this.arr[i];
// //       this.arr[i] = temp
// //       this.heapify(this.arr, i, 0);
// //     }
// //   }
// // }
// // const h = new MaxBinaryHeap();
// // h.insert(30);
// // h.insert(50);
// // h.insert(80);
// // h.insert(10);
// // h.insert(8110);
// // h.removeNode();
// // h.heapSort();
// // console.log(h.arr);

// // class node {
// //   constructor() {
// //     this.children = {};
// //     this.isWord = false;
// //   }
// // }
// // class trie {
// //   constructor() {
// //     this.root = new node();
// //   }
// //   insert(word){
// //     let curr=this.root
// //     for(let i=0;i<word.length;i++){
// //         let char=word[i]
// //         if (!curr.children[char]) {
// //             curr.children[char]=new node()
// //         }
// //         curr=curr.children[char]
// //     }
// //     curr.root=true
// //   }
// //   search(word){
// //     let curr=this.root
// //     for(let i=0;i<word.length;i++){
// //         let  char=word[i]
// //         if (!curr.children[char]) {
// //             return false
// //         }
// //         curr=curr.children[char]
// //     }
// //     return curr.isWord
// //   }
// //   startWith(prefix){
// //     let char =this.root
// //     for(let i=0;i<prefix.length;i++){
// //         let char=prefix[i]
// //         if (!curr.children[char]) {
// //             return false
// //         }
// //         curr=curr.children[char]
// //     }
// //     return true
// //   }
// // }
// // class MaxBinaryHeap {
// //   constructor() {
// //     this.arr = [];
// //   }
// //   insert(data) {
// //     this.arr.push(data);
// //     let i = this.arr.length - 1;
// //     while (i > 0) {
// //       let parent = Math.floor((i - 1) / 2);

// //       if (this.arr[i] <= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;
// //       i = parent;
// //     }
// //   }
// //   delete() {
// //     let n = this.arr.length;
// //     if (n === 0) {
// //       return null;
// //     }
// //     this.arr[0] = this.arr[n - 1];
// //      this.arr.pop();
// //     this.heapify(this.arr, n - 1, 0);
// //   }

// //   heapify(arr, n, i) {
// //     let largest = i;
// //     let left = i * 2 + 1;
// //     let right = i * 2 + 2;
// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }
// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }
// //     if (largest !== i) {
// //       let temp = arr[largest];
// //       arr[largest] = arr[i];
// //       arr[i] = temp;
// //       this.heapify(this.arr, n, largest);
// //     }
// //   }
// //   heapSort() {
// //     let n = this.arr.length;
// //     for (let i = Math.floor(n / 2); i > 0; i--) {
// //       this.heapify(this.arr, n, i);
// //     }
// //     for (let i = n - 1; i > 0; i--) {
// //       let temp = this.arr[0];
// //       this.arr[0] = this.arr[i];
// //       this.arr[i] = temp;
// //       this.heapify(this.arr, i, 0);
// //     }
// //   }

// // }

// // const max = new MaxBinaryHeap();
// // max.insert(30);
// // max.insert(20);
// // max.insert(80);
// // max.insert(10);
// // max.insert(40);
// // max.insert(70);
// // max.delete();

// // console.log(max.arr);

// //

// // class graph {
// //   constructor() {
// //     this.adjacentList = {};
// //   }
// //   addVertex(vertex) {
// //     if (!this.adjacentList[vertex]) {
// //       this.adjacentList[vertex] = new Set();
// //     }
// //   }
// //   addEdjes(vertex1,vertex2) {
// //     if (!this.adjacentList[vertex1]) {
// //       this.addVertex(vertex1);
// //     }
// //     if (!this.adjacentList[vertex2]) {
// //       this.addVertex(vertex2);
// //     }
// //     this.adjacentList[vertex1].add(vertex2);

// //     this.adjacentList[vertex2].add(vertex1);
// //   }
// //   delete(vertex1) {
// //     for (let vertex of this.adjacentList[vertex1]) {
// //       this.remove(vertex, vertex1);
// //     }
// //   }
// //   remove(vertex1,vertex2) {
// //     this.adjacentList[vertex1].delete(vertex2);
// //     this.adjacentList[vertex2].delete(vertex1);
// //   }
// //   display(){
// //   for(let vertex in this.adjacentList){
// //     console.log(vertex,'-->',[...this.adjacentList[vertex]]);
// //   }
// //   }
// //   bfs(startV) {
// //     if (!this.adjacentList[startV]) {
// //         return null
// //     }

// //     const queue = [startV]
// //     const visited = new Set()
// //     visited.add(startV)

// //     while (queue.length > 0) {
// //         const vertex = queue.shift()
// //         console.log(vertex)
// //         for (const neighbor of this.adjacentList[vertex]) {
// //             if (!visited.has(neighbor)) {
// //                 visited.add(neighbor)
// //                 queue.push(neighbor)
// //             }
// //         }
// //         console.log(visited);
// //     }
// // dfs(startVertex) {
// //   const visited = new Set();
// //   const stack = [];

// //   stack.push(startVertex);

// //   while (stack.length > 0) {
// //     const currentVertex = stack.pop();

// //     if (!visited.has(currentVertex)) {
// //       console.log(currentVertex);
// //       visited.add(currentVertex);

// //       const neighbors = this.adjList.get(currentVertex);

// //       for (const neighbor of neighbors) {
// //         if (!visited.has(neighbor)) {
// //           stack.push(neighbor);
// //         }
// //       }
// //     }
// //   }
// // }

// // bfs(startVertex) {
// //   const visited = new Set();
// //   const queue = [];

// //   queue.push(startVertex);
// //   visited.add(startVertex);

// //   while (queue.length > 0) {
// //     const currentVertex = queue.shift();
// //     console.log(currentVertex);

// //     const neighbors = this.adjList.get(currentVertex);

// //     for (const neighbor of neighbors) {
// //       if (!visited.has(neighbor)) {
// //         queue.push(neighbor);
// //         visited.add(neighbor);
// //       }
// //     }
// //   }
// // }

// // }

// //

// // }
// // const grp = new graph();
// // grp.addVertex('a')
// // grp.addVertex('v')
// // grp.addVertex('s')
// // grp.addEdjes('d','w')
// // grp.bfs('a')

// // Output: true

// // Example usage:
// // const graph = new Graph();
// // graph.addVertex("A");
// // graph.addVertex("B");
// // graph.addVertex("C");
// // graph.addVertex("D");
// // graph.addVertex("E");

// // graph.addEdge("A", "B");
// // graph.addEdge("B", "C");
// // graph.addEdge("C", "D");
// // graph.addEdge("D", "E");

// // graph.dfs("A");

// // class node {
// //   constructor(val) {
// //     this.value = val;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //    return this.root === null;
// //   }
// //   insert(val) {
// //     const newnode = new node(val);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.inserted(this.root, newnode);
// //     }
// //   }
// //   inserted(root, node) {
// //     if (node.value < root.value) {
// //       if (root.left === null) {
// //         root.left = node;
// //       } else {
// //         this.inserted(root.left, node);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = node;
// //       } else {
// //         this.inserted(root.right, node);
// //       }
// //     }
// //   }
// //   level(root) {
// //     if (root) {
// //       let queue = [];
// //       queue.push(this.root);
// //       while (queue.length > 0) {
// //         let curr = queue.shift();
// //         console.log(curr.value);
// //         if (curr.left) {
// //           queue.push(curr.left);
// //         }
// //         if (curr.right) {
// //           queue.push(curr.right);
// //         }
// //       }
// //     }
// //   }
// //   search(val,root){
// //   if (!root) {
// //     return false
// //   }
// //   if (val===root.value) {
// //     return true
// //   }
// //   if (val<root.value) {
// //    return this.search(val,root.left)
// //   }else{
// //   return  this.search(val,root.right)
// //   }
// //   }
// //   max(root){
// //     if (!root.right) {
// //       console.log(root.value);
// //     }else{
// //       this.max(root.right)
// //     }
// //   }
// //   preOder(root){
// //     if (root) {
// //       console.log(root.value);
// //       this.preOder(root.left)
// //       this.preOder(root.right)
// //     }
// //   }
// //   deleteSearch(value){
// //     this.root=this.deleteNode(this.root,value)
// //   }
// //   deleteNode(root,value){
// //     if (!root) {
// //         return null
// //     }
// //     if (value<root.value) {
// //         root.left=this.delete(root.left,value)
// //     }else if(val>root.right){
// //         root.right=this.deleteNode(root.right,value)
// //     }else{
// //         if(!root.right&&!root.left){
// //             return null
// //         }
// //         if(!root.left){
// //             return root.right
// //         }
// //         if(!root.right){
// //             return root.left
// //         }
// //     }
// //   }
// // }

// // const bst = new binarySearchTree();
// // bst.insert(30);
// // bst.insert(20);
// // bst.insert(50);
// // bst.insert(10);
// // bst.insert(45);
// // bst.insert(56);
// // bst.level(bst.root);
// // console.log(bst.search(56,bst.root));
// // bst.max(bst.root)

// // class MaxBinaryHeap {
// //   constructor() {
// //     this.arr = [];
// //   }
// //   insert(val) {
// //     this.arr.push(val);
// //     let i = this.arr.length - 1;
// //     while (i > 0) {
// //       let parent = Math.floor((i - 1) / 2);
// //       if (this.arr[i] >= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;
// //       i = parent;
// //     }
// //   }
// //   delete() {
// //     let n = this.arr.length;
// //     if (n === 0) {
// //       return null;
// //     }
// //     let max=this.arr[0]
// //     this.arr[0] = this.arr[n - 1];
// //     this.arr.pop();
// //     this.heapify(this.arr, n - 1, 0);
// //     return  max
// //   }
// //   heapify(arr, n, i) {
// //     let largest = i;
// //     let left = i * 2 + 1;
// //     let right = i * 2 + 2;
// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }
// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }
// //     if (largest !== i) {
// //       let temp = arr[i];
// //       arr[i] = arr[largest];
// //       arr[largest] = temp;
// //       this.heapify(arr, n, largest);
// //     }
// //   }
// //   sort(){
// //     let n=this.arr.length
// //     for( let i = Math.floor(n/2);i>=0;i--){
// //       this.heapify(this.arr,this.arr.length-1,i)
// //     }
// //     for (let i = this.arr.length-1; i >=0; i--) {
// //       let temp=this.arr[0]
// //       this.arr[0]=this.arr[i]
// //       this.arr[i]=temp
// //       this.heapify(this.arr,i,0)

// //     }
// //   }
// // }
// // const bh = new MaxBinaryHeap();
// // bh.insert(40);
// // bh.insert(10);
// // bh.insert(60);
// // bh.insert(11);
// // bh.insert(44);
// // bh.insert(70);
// // bh.insert(91);
// // bh.insert(24);
// // bh.delete()
// // bh.sort()
// // console.log(bh.arr);

// // class graph{
// //   constructor(){
// //     this.list=new Set()
// //   }
// //   adVertex(vertex){
// //     if (!this.list[vertex]) {
// //       this.list[vertex]=new Set()
// //     }
// //   }
// //   adEdjes(vertex1,vertex2){
// //     if (!this.list[vertex1]) {
// //       this.adVertex(vertex1)
// //     }
// //     if (!this.list[vertex2]) {
// //       this.adVertex(vertex2)
// //     }
// //     this.list[vertex1].add(vertex2)
// //     this.list[vertex2].add(vertex1)

// //   }
// //   display(){
// //     for(let vertex in this.list){
// //       console.log(vertex,'-->',[...this.list[vertex]]);
// //     }
// //   }
// //   delete(vertex){
// //     if (!this.list[vertex]) {
// //       return null
// //     }
// //     for(let vertex1 of  this.list[vertex]){
// //       this.remove(vertex1,vertex)
// //     }
// //     delete this.list[vertex]
// //   }
// //   remove(vertex1,vertex2){
// //    this.list[vertex1].delete(vertex2)
// //    this.list[vertex2].delete(vertex1)
// //   }
// //   dfs(s){
// //     let visited={}
// //     let stack=[]
// //     stack.push(s)
// //     while (stack.length>0) {
// //       let curr=stack.pop()
// //       if(!visited.has(curr)){
// //         visited.add(curr)
// //       }

// //       for(let neighbor of this.list[curr] ){
// //         if(!visited.has(neighbor)){
// //           stack.push(neighbor)
// //         }

// //       }
// //     }
// //   }
// //   bfs(a){
// //     let visited={}
// //     let queue=[]
// //     queue.push(s)
// //     while (queue.length>0) {
// //       let curr=queue.shift()
// //       for(let neighbor of this.list[curr]){
// //        if (!visited.has()) {
// //          visited.add(neighbor)
// //          queue.push(neighbor)
// //        }
// //       }
// //     }
// //   }
// // }
// // const grp=new graph()
// // grp.adEdjes('a','d')
// // grp.adEdjes('q','a')
// // grp.adEdjes('u','t')
// // grp.delete('a')
// // grp.display()

// // class node {
// //   constructor() {
// //     this.child = {};
// //     this.isWord = false;
// //   }
// // }
// // class trie {
// //   constructor() {
// //     this.root = new node();
// //   }
// //   insert(data) {
// //     let curr = this.root;
// //     for (let i = 0; i < data.length; i++) {
// //       let char = data[i];
// //       if (!curr.child[char]) {
// //         curr.child[char] = new node();
// //       }
// //       curr = curr.child[char];
// //     }
// //     curr.isWord = true;
// //   }

// // }

// // class Node {
// //   constructor() {
// //     this.children = {};
// //     this.isWord = false;
// //   }
// // }
// // class trie {
// //   constructor() {
// //     this.root = new Node();
// //   }
// //   insert(word) {
// //     let curr = this.root;
// //     for (let i = 0; i < word.length; i++) {
// //       let char = word[i];
// //       if (!curr.children[char]) {
// //         curr.children[char] = new Node();
// //       }
// //       curr = curr.children[char];
// //     }
// //     curr.isWord = true;
// //   }
// // }

// // class heaptree {
// //   constructor() {
// //     this.arr = [];
// //   }
// //   insert(data) {
// //     let i = this.arr.length;
// //     this.arr.push(data);
// //     while (i > 0) {
// //       let parent = Math.floor((i - 1) / 2);
// //       if (this.arr[i] <= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;
// //       i = parent;
// //     }
// //   }
// //   heapify(arr, n, i) {
// //     let largest = i;
// //     let left = i * 2 + 1;
// //     let right = i * 2 + 2;
// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }
// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }
// //     if (largest !== i) {
// //       let temp = arr[i];
// //       arr[i] = arr[largest];
// //       arr[largest] = temp;
// //       this.heapify(this.arr, n, largest);
// //     }
// //   }
// //   remove() {
// //     let n = this.arr.length;
// //     if (n === 0) {
// //       return null;
// //     }
// //     this.arr[0] = this.arr[n - 1];
// //     this.arr.pop();
// //     this.heapify(this.arr, n - 1, 0);
// //   }
// //   sort() {
// //     let n = this.arr.length;
// //     for (let i = Math.floor(n / 2); i > 0; i--) {
// //       this.heapify(this.arr, n - 1, i);
// //     }
// //     for (let i = n - 1; i > 0; i--) {
// //       let temp = this.arr[0];
// //       this.arr[0] = this.arr[i];
// //       this.arr[i] = temp;
// //       this.heapify(this.arr, i, 0);
// //     }
// //   }
// // }
// // const bh=new heaptree()
// // bh.insert(39)
// // bh.insert(59)
// // bh.insert(79)
// // bh.insert(99)
// // bh.insert(19)
// // bh.insert(09)
// // bh.sort()
// // console.log(bh.arr);

// // class node {
// //   constructor(value) {
// //     this.value = value;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //     return this.root === null;
// //   }
// //   insert(value) {
// //     const newnode = new node(value);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.inserted(this.root, newnode);
// //     }
// //   }
// //   inserted(root, node) {
// //     if (node.value < root.value) {
// //       if (root.left === null) {
// //         root.left = node;
// //       } else {
// //         this.inserted(root.left, node);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = node;
// //       } else {
// //         this.inserted(root.right, node);
// //       }
// //     }
// //   }
// //   levelPrint(root) {
// //     if (root) {
// //       let queue = [];
// //       queue.push(this.root);
// //       while (queue.length > 0) {
// //         let curr = queue.shift();
// //         console.log(curr.value);
// //         if (curr.left) {
// //           queue.push(curr.left);
// //         }
// //         if (curr.right) {
// //           queue.push(curr.right);
// //         }
// //       }
// //     }
// //   }
// //   preOder(root) {
// //     if (root) {
// //       console.log(root.value);
// //       this.preOder(root.left);
// //       this.preOder(root.right);
// //     }
// //   }
// //   PostOder(root) {
// //     if (root) {
// //       this.preOder(root.left);
// //       this.preOder(root.right);
// //       console.log(root.value);
// //     }
// //   }
// //   inOder(root) {
// //     if (root) {
// //       this.inOder(root.left);
// //       console.log(root.value);
// //       this.inOder(root.right);
// //     }
// //   }
// //   search(root, val) {
// //     if (!root) {
// //       return false;
// //     }
// //     if (root.value === val) {
// //       return true;
// //     }
// //     if (val < root.value) {
// //       return this.search(root.left, val);
// //     } else {
// //       return this.search(root.right, val);
// //     }
// //   }
// //   deleteNode(root, val) {
// //     if (root) {
// //       this.root = this.removeNode(root, val);
// //     }
// //   }
// //   removeNode(root, val) {
// //     if (!root) {
// //       return root;
// //     }
// //     if (val < root.value) {
// //       root.left = this.removeNode(root.left, val);
// //     } else if (val > root.value) {
// //       root.right = this.removeNode(root.right, val);
// //     } else {
// //       if (!root.right && !root.left) {
// //         return null;
// //       }
// //       if(!root.right){
// //         return  root.left
// //       }
// //       if(!root.left){
// //         return  root.right
// //       }
// //       this.value=this.min(root.right)
// //       root.right=this.removeNode(root.right,root.value)

// //     }
// //   }

// //  isValidBST(root) {
// //     let stack = [];
// //     let prev = null;

// //     while (stack.length > 0 || root) {
// //       while (root) {
// //         stack.push(root);
// //         root = root.left;
// //       }

// //       let node = stack.pop();
// //       if (prev && node.val <= prev.val) {
// //         return false;
// //       }

// //       prev = node;
// //       root = node.right;
// //     }

// //     return true;
// //   }

// // }

// // const bst = new binarySearchTree();
// // bst.insert(40);
// // bst.insert(50);
// // bst.insert(60);
// // bst.insert(70);
// // bst.insert(80);
// // bst.insert(10);
// // bst.isValidBST(bst.root)
// // console.log(bst.search(bst.root, 40));

// // class graph{
// //     constructor(){
// //         this.list={}
// //     }
// //     vertex(vertex){
// //         if (!this.list[vertex]) {
// //             this.list[vertex]=new Set()
// //         }
// //     }
// //     edjes(vertex1,vertex2){
// //         if (!this.list[vertex1]) {
// //             this.vertex(vertex1)
// //         }
// //         if (!this.list[vertex2]) {
// //             this.vertex(vertex2)
// //         }

// //         this.list[vertex1].add(vertex2)
// //         this.list[vertex2].add(vertex1)
// //     }
// //     delete(vertex1){
// //         for(let vertex of this.list[vertex1]){
// //             this.deleteVertex(vertex,vertex1)
// //         }
// //         delete this.list[vertex1]
// //     }
// //     deleteVertex(vertex1,vertex2){
// //         this.list[vertex1].delete(vertex2)
// //         this.list[vertex2].delete(vertex1)
// //     }
// //     display(){
// //         for(let vertex in this.list){
// //             console.log(vertex,'-->',[...this.list[vertex]]);
// //         }
// //     }
// // function bfsBacktracking(graph, start, target) {

// //   const visited = new Set(); // To keep track of visited nodes
// //   const queue = [[start, []]];

// //   while (queue.length > 0) {
// //     const [node, path] = queue.shift();
// //     visited.add(node);

// //     // If the target is found, return the path
// //     if (node === target) {
// //       return path.concat(node);
// //     }

// //     // Add unvisited neighbors to the queue
// //     for (const neighbor of graph[node]) {
// //       if (!visited.has(neighbor)) {
// //         queue.push([neighbor, path.concat(node)]);
// //         visited.add(neighbor);
// //       }
// //     }
// //   }
// // }
// //   // If target is not found, return null or an empty array
// //   return null;

// // }
// // const grp =new graph()
// // grp.edjes('a','f')
// // grp.edjes('r','g')
// // grp.edjes('c','y')
// // grp.delete('a')

// // class MaxBinaryHeap {
// //   constructor() {
// //     this.arr = [];
// //   }
// //   insert(data) {
// //     this.arr.push(data);
// //     let i = this.arr.length - 1;
// //     while (i > 0) {
// //       let parent = Math.floor(i / 2);
// //       if (this.arr[i] <= this.arr[parent]) {
// //         break;
// //       }
// //       let temp = this.arr[i];
// //       this.arr[i] = this.arr[parent];
// //       this.arr[parent] = temp;
// //       i = parent;
// //     }
// //   }
// //   delete() {
// //     let n = this.arr.length;
// //     if (n === 0) {
// //       return -1;
// //     }
// //     this.arr[0] = this.arr[n - 1];
// //     let a = [this.arr.pop()];
// //     console.log(a, "fffffffffffffffff");
// //     this.heapify(this.arr, n - 1, 0);
// //   }
// //   heapify(arr, n, i) {
// //     let largest = i;
// //     let left = i * 2 + 1;
// //     let right = i * 2 + 2;
// //     if (left < n && arr[left] > arr[largest]) {
// //       largest = left;
// //     }
// //     if (right < n && arr[right] > arr[largest]) {
// //       largest = right;
// //     }
// //     if (largest !== i) {
// //       let temp = arr[i];
// //       arr[i] = arr[largest];
// //       arr[largest] = temp;
// //       this.heapify(arr, n, largest);
// //     }
// //   }
// //   heapSort() {
// //     let n = this.arr.length;

// //     for (let i = Math.floor(n / 2); i >=0; i--) {
// //         console.log(i,'jjjjjjjjjjjjjjjjjjj');
// //       this.heapify(this.arr, n-1, i);
// //     }

// //     for (let i = n - 1; i > 0; i--) {
// //       let temp = this.arr[0];
// //       this.arr[0] = this.arr[i];
// //       this.arr[i] = temp;
// //       this.heapify(this.arr, i, 0);
// //     }
// //   }
// // }
// // const bh = new MaxBinaryHeap();
// // bh.insert(30);
// // bh.insert(60);
// // bh.insert(70);
// // bh.insert(1);
// // bh.insert(100);

// // bh.insert(56);
// // bh.insert(98);
// // bh.insert(98);
// // bh.delete();
// // bh.heapSort()
// // console.log(bh.arr);

// // class node{
// //     constructor(val){
// //         this.value=val
// //         this.left=null
// //         this.right=null
// //     }

// // }
// // class binarysearchtree{
// //     constructor(){
// //      this.root=null
// //     }
// //     isEmpty(){
// //         return this.root===null
// //     }
// //     insert(val){
// //         const newnode=new node(val)
// //        if (this.isEmpty()) {
// //         this.root=newnode
// //        }else{
// //         this.inserted(this.root,newnode)
// //        }
// //     }
// //     inserted(root,node){
// //         if (node.value<root.value) {
// //             if (root.left===null) {
// //                 root.left=node
// //             }else{
// //                 this.inserted(root.left,node)
// //             }
// //         }else{
// //             if (root.right===null) {
// //                 root.right=node
// //             }else{
// //                 this.inserted(root.right,node)
// //             }
// //         }
// //     }
// //     search(val,root){
// //         if(!root){
// //             return false
// //         }
// //     if (root.value===val) {
// //      return true
// //     }
// //     else if(val <root.value){
// //     return this.search(val,root.left)
// //     }
// //     else{
// //       return  this.search(val,root.right)
// //     }
// //     }
// //     min(root){
// //         if(this.isEmpty())
// //         return "no number"

// //         else{
// //             if(!root.left){
// //              return root.value
// //             }
// //             else {
// //                 return this.min(root.left)
// //             }
// //         }
// //     }
// //     delete(root,val){
// //      if(!root){
// //         return null
// //      }
// //      if (root.value>val){
// //       this.delete(root.right,val)
// //      }
// //      else if (root.value<val){
// //         this.delete(root.left,val)
// //        }
// //       else{
// //         if(!root.right&&!root.left){
// //             root=null
// //         }

// //       }
// //     }
// //     levelOder(root){
// //      if (root) {
// //         let queue=[]
// //         queue.push(this.root)
// //         while (queue.length>0) {
// //             let curr=queue.shift()
// //             console.log(curr.value);
// //             if (curr.left) {
// //                 queue.push(curr.left)
// //             }
// //             if (curr.right) {
// //                 queue.push(curr.right)
// //             }
// //         }
// //      }
// //     }
// // }

// // const  bst=new binarysearchtree()
// // bst.insert(40)
// // bst.insert(60)
// // bst.insert(46)
// // bst.insert(47)
// // bst.insert(48)
// // bst.insert(42)
// // bst.insert(445)
// // bst.levelOder(bst.root)
// // bst.delete(bst.root,40)
// // console.log("lllllllllllllllllllllllllllllll")
// // bst.levelOder(bst.root)
// // class graph {
// //   constructor() {
// //     this.list = {};
// //   }
// //   advertex(vertex) {
// //     if (!this.list[vertex]) {
// //       this.list[vertex] = new Set();
// //     }
// //   }
// //   adEdjes(vertex1, vertex2) {
// //     if (!this.list[vertex1]) {
// //       this.advertex(vertex1);
// //     }
// //     if (!this.list[vertex2]) {
// //       this.advertex(vertex2);
// //     }
// //     this.list[vertex1].add(vertex2);
// //     this.list[vertex2].add(vertex1);
// //   }
// //   display() {
// //     for (let vertex in this.list) {
// //       console.log(vertex, "-->", [...this.list[vertex]]);
// //     }
// //   }
// //   delete(vertex1) {
// //     for (let vertex of this.list[vertex1]) {
// //       this.removeEdjes(vertex, vertex1);
// //     }
// //     delete this.list[vertex1];
// //   }
// //   removeEdjes(vertex1, vertex2) {
// //     this.list[vertex1].delete(vertex2);
// //     this.list[vertex2].delete(vertex1);
// //   }
// //   dsf(s) {
// //     let stack = [];
// //     let visited=new Set()
// //     stack.push(s);
// //     while (stack.length) {
// //         let curr=stack.shift()

// //         if (!visited.has(curr)) {
// //             console.log(curr,'jjjjjjjjjjj');
// //             visited.add(curr)
// //         }
// //         for(let neighbor of this.list[curr]){
// //             if (!visited.has(neighbor)) {
// //                 visited.add(neighbor)
// //                 stack.push(neighbor)
// //             }
// //         }
// //     }
// //   }
// // }
// // const grp = new graph();
// // grp.adEdjes("a", "d");
// // grp.adEdjes("a", "k");
// // grp.adEdjes("a", "m");
// // grp.adEdjes("n", "l");
// // grp.adEdjes("t", "s");
// // grp.display();
// // grp.display();
// // grp.dsf('a')

// // class node {
// //   constructor(val) {
// //     this.value = val;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }
// // class binarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //     return this.root === null;
// //   }
// //   insert(val) {
// //     const newnode = new node(val);
// //     if (this.isEmpty()) {
// //       this.root = newnode;
// //     } else {
// //       this.inserted(this.root, newnode);
// //     }
// //   }
// //   inserted(root, node) {

// //     if (node.value < root.value) {
// //       if (root.left === null) {
// //         root.left = node;
// //       } else {
// //         this.inserted(root.left, node);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = node;
// //       } else {
// //         this.inserted(root.right, node);
// //       }
// //     }
// //   }
// //   display(root) {
// //     if (root) {
// //       let queue = [];
// //       queue.push(root);
// //       while (queue.length > 0) {
// //         let curr = queue.pop();

// //         console.log(curr.value);
// //         if (curr.left) {
// //           queue.push(curr.left);
// //         }
// //         if (curr.right) {
// //           queue.push(curr.right);
// //         }
// //       }
// //     }
// //   }
// //   min(root){
// //     if (!root.left) {
// //       return root.value
// //     }else{
// //     return  this.min(root.left)
// //     }
// //   }
// //   search(val,root){
// //     if (!root) {
// //       return false
// //     }
// //     if (root.value===val) {
// //       return true
// //     }
// //     if (val<root.value) {
// //      return this.search(val,root.left)
// //     }else{
// //       return this.search(val,root.right)
// //     }
// //   }

// // }

// // const bst = new binarySearchTree();
// // bst.insert(30);
// // bst.insert(40);
// // bst.insert(60);
// // bst.insert(80);
// // bst.insert(10);
// // console.log(bst.search(0,bst.root));
// // console.log(bst.min(bst.root));

// class binaryMin {
//   constructor() {
//     this.arr = [];
//   }
//   insert(data) {
//     this.arr.push(data);
//     let i = this.arr.length - 1;
//     while (i > 0) {
//       let parent = Math.floor(i / 2);
//       if (this.arr[i] > this.arr[parent]) {
//         break;
//       }
//       let temp = this.arr[i];
//       this.arr[i] = this.arr[parent];
//       this.arr[parent] = temp;
//       i = parent;
//     }
//   }
//   delete() {
//     let n = this.arr.length;
//     if (n === 0) {
//       return null;
//     }
//     this.arr[0] = this.arr[n - 1];

//     this.arr.pop();
//     this.heapify(this.arr, n - 1, 0);
//   }
//   heapify(arr, n, i) {
//     let largest = i;

//     let left = i * 2 + 1;

//     let right = i * 2 + 2;

//     if (left < n && arr[left] < arr[largest]) {
//       largest = left;
//     }
//     if (right < n && arr[right] < arr[largest]) {
//       largest = right;
//     }
//     if (largest !== i) {
//       let temp = arr[i];
//       arr[i] = arr[largest];
//       arr[largest] = temp;
//       this.heapify(arr, n, largest);
//     }
//   }
//   sort() {
//     let n = this.arr.length;
//     for (let i = Math.floor(n / 2); i > 0; i--) {
//       this.heapify(this.arr, n, i);
//     }
//     for (let i = n - 1; i >  0; i--) {
//       let temp = this.arr[0];
//       this.arr[0] = this.arr[i];
//       this.arr[i] = temp;
//       this.heapify(this.arr, i, 0);
//     }
//   }
// }
// const h = new binaryMin();
// h.insert(199);
// h.insert(99);
// h.insert(19);
// h.insert(9);
// h.insert(1);
// h.insert(91);
// h.insert(2);
// h.sort();
// console.log(h.arr);

// class node {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// class binarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }

//   insert(val) {
//     const newnode = new node(val);
//     if (this.isEmpty()) {
//       this.root = newnode;
//     } else {
//       this.inserted(this.root, newnode);
//     }
//   }
//   inserted(root,node) {
//     if (node.value<root.value) {
//       if (root.left===null) {
//         root.left=node
//       }else{
//         this.inserted(root.left,node)
//       }
//     }else{
//       if (root.right===null) {
//         root.right=node
//       }else{
//         this.inserted(root.right,node)
//       }
//     }
//   }
//   levelOder(root){
//     if (root) {
//       let queue=[]
//       queue.push(root)
//       while (queue.length) {
//         let curr=queue.shift()
//         console.log(curr.value);
//         if (curr.left) {
//           queue.push(curr.left)
//         }
//         if (curr.right) {
//           queue.push(curr.right)
//         }
//       }
//     }
//   }
//    preOder(root){
//     if (root) {
//       console.log(root.value);
//      this.preOder(root.left)
//      this.preOder(root.right)
//     }
//    }
//    min(root){
//     if (!root.left) {
//       return root.value
//     }else{
//      return this.min(root.left)
//     }
//    }
//    search(root,val){
//     if (!root) {
//       return -1
//     }
//     if (root.value===val) {
//       return true
//     }
//     if (val<root.left) {
//       return this.search(root.left,val)
//     }else{
//      return this.search(root.left,val)
//     }
//    }
// }

// const bst=new binarySearchTree()
// bst.insert(30)
// bst.insert(40)
// bst.insert(50)
// bst.insert(3)
// console.log(bst.search(bst.root,4));

// class node {
//   constructor() {
//     this.child = {};
//     this.isWord = false;
//   }
// }
// class trie {
//   constructor() {
//     this.root = new node();
//   }
//   insert(word) {
//     let curr = this.root;
//     for (let i = 0; i < word.length; i++) {
//       let char = word[i];
//       if (!curr.child[char]) {
//         curr.child[char] = new node();
//         console.log( curr.child[char])
//         console.log(curr)
//       }
//       curr = curr.child[char];
     
//     }
//     curr.isWord=true
//   }
//   startWith(prifix){
//     let curr=this.root
//     for(let i=0;i<prifix.length;i++){
//       let char=prifix[i]
//       if (!curr.child[char]) {
//         return false
//       }
//       curr=curr.child[char]
//     }

//   }
// }
// const t=new trie()
// t.insert('naseeb')

// class graph {
//   constructor() {
//     this.list = {};
//   }
//   adVertex(vertex) {
//     if (!this.list[vertex]) {
//       this.list[vertex] = new Set();
//     }
//   }
//   adEdges(vertex1, vertex2) {
//     if (!this.list[vertex1]) {
//       this.adVertex(vertex1);
//     }
//     if (!this.list[vertex2]) {
//       this.adVertex(vertex2);
//     }
//     this.list[vertex1].add(vertex2);
//     this.list[vertex2].add(vertex1);
//   }
//   display(){
//     for(let vertex in this.list){
//       console.log(vertex,'-->',[...this.list[vertex]]);
//     }
//   }
//   delete(vertex1){
//    for(let vertex of this.list[vertex1]){
//     this.remove(vertex,vertex1)
//    }
//    delete this.list[vertex1]
//   }
//   remove(vertex,vertex1){
//    this.list[vertex].delete(vertex1)
//    this.list[vertex1].delete(vertex)
//   }
// }
// const grp=new graph()
// grp.adEdges('a','q')
// grp.adEdges('h','q')
// grp.adEdges('f','e')
// grp.adEdges('s','q')
// grp.adEdges('t','a')
// grp.delete('')
// grp.display()

// class maxHeap {
//   constructor() {
//     this.arr = [];
//   }
//   insert(val) {
//     this.arr.push(val);
//     let i = this.arr.length - 1;
//     while (i > 0) {
//       let parent = Math.floor(i / 2);
//       if (this.arr[i] < this.arr[parent]) {
//         break;
//       }
//       let temp = this.arr[i];
//       this.arr[i] = this.arr[parent];
//       this.arr[parent] = temp;
//       i = parent;
//     }
//   }
//   delete() {
//     let n = this.arr.length;
//     if (n === 0) {
//       return n;
//     }
//     this.arr[0] = this.arr[n - 1];
//     this.arr.pop();
//     this.heapify(this.arr, n - 1, 0);
//   }
//   heapify(arr, n, i) {
//     let largest = i;
//     let left = i * 2 + 1;
//     let right = i * 2 + 2;
//     if (left < n && arr[left] > arr[largest]) {
//       largest = left;
//     }
//     if (right < n && arr[right] > arr[largest]) {
//       largest = right;
//     }
//     if (largest !== i) {
//       let temp = arr[i];
//       arr[i] = arr[largest];
//       arr[largest] = temp;
//       this.heapify(arr, n, largest);
//     }
//   }
//   sort() {
//     let n = this.arr.length;
//     for (let i = Math.floor(n / 2); i > 0; i--) {
//       this.heapify(this.arr, n, i);
//     }
//     for (let i = n - 1; i > 0; i--) {
//       let temp=this.arr[0]
//       this.arr[0]=this.arr[i]
//       this.arr[i]=temp
//       this.heapify(this.arr,i,0)
//     }
//   }
// }

// const h = new maxHeap();
// h.insert(40);
// h.insert(4);
// h.insert(4);
// h.insert(1);
// h.insert(43);
// h.insert(12);
// h.sort()
// console.log(h.arr);
// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//  isBinary(){
//   return this.isCheck(this.root,-Infinity,Infinity)

//  }
//  isCheck(node,min,max){
//  if (node===null) {
//   return true

//  }
//  if (node.value<=min||node.value>=max) {
//   return false
//  }
//  return(
//   this.isCheck(node.left,min,node.value)&&
//   this.isCheck(node.right,node.value,max)
//  )
//  }
// }
// class graph{
//   constructor(){
//     this.list={}
//   }
//   advertex(vertex){
//     if (!this.list[vertex]) {
//       this.list[vertex]=new Set()
//     }

//   }
//   adEdges(vertex1,vertex2){
//     if (!this.list[vertex1]) {
//       this.advertex(vertex1)
//     }
//     if (!this.list[vertex2]) {
//       this.advertex(vertex2)
//     }
//     this.list[vertex1].add(vertex2)
//     this.list[vertex2].add(vertex1)
//   }
//   display(){
//     for(let vertex in this.list){
//       console.log(vertex,'-->',[...this.list[vertex]]);
//     }

//   }
//   bfs(start){
//     let visited={}
//    let stack=[]
//     visited[start]=true
//     stack.push(start)
//    while (stack.length) {
//     let curr=stack.pop()
//     console.log(curr,'fffffffffff');
//     this.list[curr].forEach(element => {
//       if (!visited[element]) {
//           visited[element]=true
//           stack.push(element)
//       }
//     });

//    }
//   }
// }
// const grp=new graph()
// grp.adEdges('a','d')
// grp.adEdges('d','q')
// grp.adEdges('a','l')
// grp.adEdges('l','u')
// grp.bfs('u')

// class BinaryHeap {
//   constructor() {
//     this.arr = [];
//   }
//   insert(val) {
//     this.arr.push(val);
//     let i = this.arr.length - 1;
//     while (i > 0) {
//       let parent = Math.floor(i / 2);
//       if (this.arr[i] > this.arr[parent]) {
//         break;
//       }
//       let temp = this.arr[i];
//       this.arr[i] = this.arr[parent];
//       this.arr[parent] = temp;
//       i = parent;
//     }
//   }
//   heapify(arr, n, i) {
//     let largest = i;
//     let left = i * 2 + 1;
//     let right = i * 2 + 2;
//     if (left < n && arr[left] < arr[largest]) {
//       largest = left;
//     }
//     if (right < n && arr[right]< arr[largest]) {
//       largest = right;
//     }
//     if (largest !== i) {
//       let temp = arr[i];
//       arr[i] = arr[largest];
//       arr[largest] = temp;
//       this.heapify(arr, n, largest);
//     }
//   }
//   sort() {
//     let n = this.arr.length-1;
//     for (let i = n ; i > 0; i--) {
//       let temp = this.arr[0];
//       this.arr[0] = this.arr[i];
//       this.arr[i] = temp;
//       this.heapify(this.arr, i, 0);
//     }
//   }
//   delete(){
//     let n=this.arr.length
//     if (n===0) {
//       return false
//     }
//     this.arr[0]=this.arr[n-1]
//     this.arr.pop()
//     this.heapify(this.arr,n,0)
//   }
// }
// const bst = new BinaryHeap();
// bst.insert(20);
// bst.insert(2);
// bst.insert(30);
// bst.insert(5);
// bst.insert(65);
// bst.insert(1);
// bst.insert(550);
// bst.delete()
// class node{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
//   }
// }
// class binarySearchTree{
//   constructor(){
//      this.root=null
//   }
//   isEmpty(){
//     return this.root===null
//   }
//   insert(val){
//     const newnode=new node(val)
//      if (this.isEmpty()) {
//       this.root=newnode
//      }else{
//       this.inserted(this.root,newnode)
//      }
//   }
//   inserted(root,node){
//     if (node.value<root.value) {
//       if (root.left===null) {
//         root.left=node
//       }else{
//         this.inserted(root.left,node)
//       }
//     }else{
//       if (root.right===null) {
//         root.right=node
//       }else{
//         this.inserted(root.right,node)
//       }
//     }
//   }
//   LevelOder(root){
//     if (root) {
//       let queue=[]
//       queue.push(this.root)
//       while (queue.length>0) {
//         let curr=queue.shift()
//         console.log(curr.value);
//         if (curr.left) {
//           queue.push(curr.left)
//         }
//         if (curr.right) {
//           queue.push(curr.right)
//         }
//       }
//     }
//   }
//   search(root,val){
//     if (!root) {
//       return  false
//     }
//   if (root.value===val) {
//     return true
//   }
//   if (val<root.value) {
//    return this.search(root.left,val)
//   }else{
//    return this.search(root.right,val)
//   }
//   }
//   delete(val){
//     this.root=this.remove(this.root,val)
//   }
//   remove(root,val){
//     if (!root) {
//       return null
//     }
//     if (val<root.value) {
//       root.left=this.remove(root.left,val)
//     }else if(val>root.value){
//       root.right=this.remove(root.right,val)
//     }else{

//       if (!root.left&&!root.right) {

//         return null
//       }
//       if (!root.left) {
//         console.log("object")
//         return root.right
//       }
//       if (!root.right) {
//         return root.left
//       }
//       root.value=this.min(root.right)
//       console.log(root.value,"kkk")
//       root.right= this.remove(root.right,root.value)
//     }
//     return root
//   }
//   min(root){
//     if (!root.left) {
//       return root.value
//     }else{
//       this.min(root.left)
//     }
//   }
//   isBinary(){
//     return this.isCheck(this.root,-Infinity,Infinity)
//   }
//   isCheck(root,min,max){
//     if (root===null) {
//      return  true
//     }
//      if (root.value<=min||root.value>=max) {
//       return false
//      }
//      return(
//       this.isCheck(root.left,min,root.value)&&
//       this.isCheck(root.right,root.value,max)
//      )
//   }
// }
// const bst=new binarySearchTree()
// bst.insert(24)
// bst.insert(94)
// bst.insert(44)
// bst.insert(29)
// bst.insert(99)
// bst.insert(54)
// bst.delete(94)
// console.log(bst.isBinary());
// class node{
//   constructor(){
//     this.child={}
//     this.isWord=false
//   }
// }
// class trie{
//   constructor(){
//     this.root=new node()
//   }
  // insert(word){
  //   let curr=this.root
  //   for(let i=0;i<word.length;i++){
  //     let char=word[i]
  //     if (!curr.child[char]) {
  //         curr.child[char]=new node()
  //     }
  //     curr=curr.child[char]
  //   }
  //   curr.isWord=true
  // }
  
// }
