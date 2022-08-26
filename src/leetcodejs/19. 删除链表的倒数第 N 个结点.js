// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//计算链表长度，暴力法
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head)
    let listNodeLength = getListNodeLength(dummy)
    let cur = dummy
    //for循环从1开始，这里跳过哑节点
    for (let i = 1; i < listNodeLength - n + 1; ++i) {
        cur = dummy.next
    }
    cur.next = cur.next.next
    return dummy.next//返回不包括哑节点
};
function getListNodeLength(head) {
    let length = 0;
    //这里JavaScript无法计算
    while (head) {
        ++length
        head = head.next
    }
    return length
}

//这个绕过了ListNode函数求长度
var removeNthFromEnd = function(head, n) {
    let node = head
    let count = 0
    while(node) {
        node = node.next
        count++
    }
    count = count - n - 1
    if(count == -1) return head.next
    node = head
    while(count>0) {
        node = node.next
        count--
    } 
    node.next = node.next.next
    return head
};
