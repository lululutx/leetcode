//141. 环形链表
// 给定一个链表，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 如果链表中存在环，则返回 true 。 否则，返回 false 。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//CV 利用数组判断
// 初始化一个空数组，用于存放节点。遍历链表，如果当前节点已经在数组中，则该链表为环形链表。否则把节点存入数组。
// 可能会有人想借助 Map 数据结构来减少内存消耗。但实际上，Map中每个键值对相对于数组本身就会额外占用一部分内存，所以实际上还不如用数组。且数组本身存放的也是指向节点的指针。
var hasCycle = function (head) {
    const res = [];
    while (head) {
        if (res.includes(head)) {
            return true;
        }
        res.push(head);
        head = head.next;
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//CV 快慢指针
var hasCycle2 = function (head) {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow) {
        if (slow === fast) {
            return true
        }
        slow = slow?.next || null;
        fast = fast?.next?.next || null;
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//CV 污链表法
// 众所周知，Javascript 里面，你定义的任何数据结构，其类型都是object 这意味着，你可以给一个对象设定任何的属性
// 我们为每次遍历的节点设定一个标记，如果存在环，那么一定存在某个节点已经设定过标记。否则链表遍历结束其不为环
var hasCycle3 = function (head) {
    while (head) {
        if (head.flag) {
            return true;
        }
        head.flag = true;
        head = head.next;
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//CV 利用JS语言特性
// JSON.stringify方法会自动检测传入的对象是否为环，如果JSON.stringify成功执行，那说明传入的对象一定不是环
var hasCycle4 = function (head) {
    try {
        JSON.stringify(head);
        return false;
    } catch {
        return true;
    }
};