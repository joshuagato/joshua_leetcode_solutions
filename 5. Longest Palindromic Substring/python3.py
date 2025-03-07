class Solution:
    def longestPalindrome(self, s: str) -> str:
        if not s or len(s) < 1:
            return ""

        longest_palindromic_substring = ""
        
        for index in range(len(s)):
            even_length_palindromes = self.get_and_return_palindromes(s, index, index + 1)
            odd_length_palindromes = self.get_and_return_palindromes(s, index, index)

            longest_palindromic_substring = max(longest_palindromic_substring, even_length_palindromes, odd_length_palindromes, key=len)
        
    
        return longest_palindromic_substring

    
    def get_and_return_palindromes(self, s, left_pointer, right_pointer):
        while left_pointer >= 0 and right_pointer < len(s) and s[left_pointer] == s[right_pointer]:
            left_pointer -= 1
            right_pointer += 1

        return s[left_pointer + 1:right_pointer]