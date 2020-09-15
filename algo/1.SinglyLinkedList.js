/**
 * 单链表的插入、删除、查找操作
 */

 class Node {
   constructor(element) {
     this.element = element;
     this.next = null;
   }
 }

 class LinkedList {
   constructor() {
     this.head = new Node('head');
   }

   // 向链表末尾追加节点
   append(newElement) {
     const newNode = new Node(newElement);
     let currentNode = this.head;
     while(currentNode.next) {
       currentNode = currentNode.next;
     }
     currentNode.next = newNode;
   }
   // 根据value查找节点
   findByValue(item) {
     let currentNode = this.head.next;
     while(currentNode !== null && currentNode.element !== item) {
       currentNode = currentNode.next;
     }
     console.log(currentNode);
     return currentNode === null ? -1 : currentNode;
   }
   // 根据index查找节点，下标从0开始
   findByIndex(index) {
     let currentNode = this.head.next;
     let pos = 0;
     while(currentNode !== null && pos !== index) {
       currentNode = currentNode.next;
       pos++;
     }
     console.log(currentNode);
     return currentNode === null ? -1 : currentNode
   }
   // 指定元素向后插入
   insert(newElement, element) {
     const currentNode = this.findByValue(element);
     if(currentNode === -1) {
       console.log('未找到插入位置')
       return;
     }
     const newNode = new Node(newElement);
     newNode.next = currentNode.next;
     currentNode.next = newNode;
     
   }
 }