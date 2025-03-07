/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let left = 0;
    let right = 0;
    let longestString = 0;

    while (right < s.length) {
        let letter = s[right];

        if (!charSet.has(letter)) {
            charSet.add(letter);
            longestString = Math.max(longestString, charSet.size);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }

    return longestString;
};