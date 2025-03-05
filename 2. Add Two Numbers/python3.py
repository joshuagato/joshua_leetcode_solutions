# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        current = ListNode()
        head = current

        ceilingValue = 10
        remainder = 0
        while l1 or l2 or remainder:
            value1 = l1.val if l1 else 0
            value2 = l2.val if l2 else 0

            # new node value
            value = value1 + value2 + remainder
            remainder = value // ceilingValue
            value = value % ceilingValue
            current.next = ListNode(value)

            # update pointer
            current = current.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return head.next