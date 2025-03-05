/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const checkedNumbers = {};

    for (const [index, number] of nums.entries()) {
        let difference = target - number;

        if (checkedNumbers.hasOwnProperty(difference)) return [checkedNumbers[difference], index];

        checkedNumbers[number] = index;
    }

    return [];
};