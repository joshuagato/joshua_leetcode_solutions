class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        checkedNumbers = {}  # number -> index

        for index, number in enumerate(nums):
            difference = target - number

            if difference in checkedNumbers:
                return [checkedNumbers[difference], index]

            checkedNumbers[number] = index
        
        return []