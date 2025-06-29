class Solution:
    def convert(self, s: str, numRows: int) -> str:

        if (numRows == 1): 
            return s

        rows = [""] * numRows
        currentRow = 0
        goingDown = False

        for char in s:
            rows[currentRow] += char

            if (currentRow == 0 or currentRow == numRows - 1):
                goingDown = not goingDown

            if goingDown:
                currentRow += 1
            else:
                currentRow -= 1
        
        return "".join(rows)