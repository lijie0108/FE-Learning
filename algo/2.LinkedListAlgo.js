/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  // 根据value查找节点
  findByValue(item) {
    let currentNode = this.head.next;
    while(currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 根据index查找节点
  findByIndex(index) {
    let currentNode = this.head;
    let pos = 0;
    while(currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode
  }

  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if(currentNode === -1) return ;
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  // 查找前一个
  findPrev(item) {
    let currentNode = this.head;
    while(currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
  }
}

