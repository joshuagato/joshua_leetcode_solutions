/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    let longestPalindromicSubstring = "";

    for (let index = 0; index < s.length; index++) {
        let evenLengthPalindromes = getAndReturnPalindromes(index, index + 1, s);
        let oddLengthPalindromes = getAndReturnPalindromes(index, index, s);

        const tempLongestSubstring = getMaxOfTwoStrings(evenLengthPalindromes, oddLengthPalindromes);

        if (tempLongestSubstring.length > longestPalindromicSubstring.length)
            longestPalindromicSubstring = tempLongestSubstring
        
    }

    return longestPalindromicSubstring
};

const getAndReturnPalindromes = (leftPointer, rightPointer, sampleString) => {
    while (leftPointer >=0 && rightPointer < sampleString.length && sampleString[leftPointer] === sampleString[rightPointer]) {
        leftPointer--;
        rightPointer++;
    }

    return sampleString.slice(leftPointer + 1, rightPointer)
}

const getMaxOfTwoStrings = (firstString, secondString) => {
    return firstString.length > secondString.length ? firstString : secondString;
}