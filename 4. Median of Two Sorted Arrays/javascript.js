/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => a - b);

    let median;
    const mergedArrayLength = mergedArray.length;
    const mergedArrayDividedByTwo = mergedArrayLength / 2;

    if (mergedArrayLength === 1) median = mergedArray[0];

    if (mergedArrayLength % 2 === 0) {
        const medianElement2Index = parseInt(mergedArrayDividedByTwo);
        const medianElement1Index = parseInt(mergedArrayDividedByTwo) - 1;

        median = (mergedArray[medianElement1Index] + mergedArray[medianElement2Index]) / 2;
    } else {
        const medianElementIndex = parseInt(mergedArrayDividedByTwo);
        median = mergedArray[medianElementIndex];
    }

    return median;
};