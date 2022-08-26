// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//迭代
//如果有就指向隔一节点
var removeElements = function (head, val) {
    const ret = new ListNode(0, head);//设置一个虚拟头节点
    let cur = ret;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
};

//递归
//为什么
var removeElements2 = function (head, val) {
    if (head === null) {
        return head;
    }
    head.next = removeElements2(head.next, val);
    //这里的return返回给递归函数的上一个调用 removeElements的返回值（head.next = removeElements）
    return head.val === val ? head.next : head;
};

