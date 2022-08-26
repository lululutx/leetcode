// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//迭代
var swapPairs = function (head) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;//这两行并不能交换顺序。。
        node2.next = node1;//这两行并不能交换顺序。。
        temp = node1;
    }
    return dummyHead.next;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//递归
var swapPairs = function (head) {
    //终止条件：链表只剩一个节点或者没节点了，没得交换了。返回的是已经处理好的链表
    if (head === null || head.next === null) {
        return head;
    }
    //一共三个节点:head, next, swapPairs(next.next)
    //下面的任务便是交换这3个节点中的前两个节点
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    //根据第二步：返回给上一级的是当前已经完成交换后，即处理好了的链表部分
    return newHead;
};

