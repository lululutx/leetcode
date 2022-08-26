// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

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
var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
        //记录下一个节点，这一步得早记录
        const next = curr.next;
        //反转next指向
        curr.next = prev;
        //把更新好的暂存在prev里
        prev = curr;
        //更新下一个节点
        curr = next;
    }
    return prev;
};