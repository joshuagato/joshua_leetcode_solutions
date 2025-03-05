/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let current = new ListNode();
    let head = current;

    let ceilingValue = 10;
    let remainder = 0;
    while (l1 || l2 || remainder) {
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;

        // New Node Value
        let value = value1 + value2 + remainder;
        remainder = Math.floor(value / ceilingValue);
        value = value % ceilingValue;
        current.next = new ListNode(value);

        // Update Pointers
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return head.next
};