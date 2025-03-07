class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        merged_array = nums1 + nums2
        merged_array.sort()
        merged_array_length = len(merged_array)
        merged_array_divided_by_two = merged_array_length / 2

        if merged_array_length == 1:
            median = merged_array[0]

        elif merged_array_length % 2 == 0:
            middle_elem_2_index = int(merged_array_divided_by_two)
            middle_elem_1_index = int (merged_array_divided_by_two)- 1

            median = (merged_array[middle_elem_1_index] + merged_array[middle_elem_2_index]) / 2

        else:
            median = merged_array[merged_array_length // 2]
        

        return median