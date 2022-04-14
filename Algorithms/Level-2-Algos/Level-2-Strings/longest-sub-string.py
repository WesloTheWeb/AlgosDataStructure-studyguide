class Test:
    def __init__(self, test_name = ""):
        self.total_count = 0
        self.problem_count = 0
        self.total_score = 0
        self.problem_score = 0
        self.current_problem = ""
        self.failed_problems = []
        print(f"Beginning Test: {test_name}")
        
    # Test Helpers
    def test(self, expected_outcome, outcome, case_num = 0):
        if expected_outcome == outcome:
            return self.passed(case_num)
        return self.failed(case_num)  

    def testMultipleCases(self, possible_outcomes, outcome, case_num = 0):
        for possible_outcome in possible_outcomes:
            if possible_outcome == outcome:
                return self.passed(case_num)
        return self.failed(case_num)

    def testMatchAny(self, expected_outcome, outcome, case_num = 0):
        if self.isEqual(expected_outcome, outcome):
            return self.passed(case_num)
        return self.failed(case_num)        

    def isEqual(self, array1, array2) -> bool:
        for a1 in array1:
            a1.sort()
        sortedArray1 = sorted(array1)
        for a2 in array2:
            a2.sort()
        sortedArray2 = sorted(array2)
        return sortedArray1 == sortedArray2 
    
    # Test Logistics
    def startProblem(self, problemName):
        self.current_problem = problemName
        self.problem_score = 0
        self.problem_count = 0
        self.failed_problems = []
    def passed(self, case_num):
        self.total_score += 1
        self.problem_score += 1
        self.problem_count += 1
        self.total_count += 1
    def failed(self, case_num): 
        self.problem_count += 1
        self.total_count += 1
        self.failed_problems.append(case_num)

    def endProblem(self):
        print(f"\n   {self.current_problem} Score: {self.problem_score} / {self.problem_count}")
        if len(self.failed_problems) > 0:
            print(f"   ** Failed Test Cases: {self.failed_problems}")
    def printFinal(self):
        print(f"\nTotal Score: {self.total_score} / {self.total_count}")

test = Test("")

class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def arrayify(head) -> [int]:
    array = []
    ptr = head
    while ptr != None:
        array.append(ptr.value)
        ptr = ptr.next
    return array

class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right
        
def arrayifyTree(root: TreeNode):
    if root is None:
        return []
    queue = []
    array = []
    queue.append(root)
    while (len(queue) != 0):
        node = queue.pop(0)
        array.append(node.value)
        if (node.left):
            queue.append(node.left)
        if (node.right):
            queue.append(node.right)
    return array

from typing import List
# ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
# ✏️ Description
# ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
# Q. Given a string, return the longest substring witout repeating characters.

# Examples:
# • Given a string: "abcbde" // returns "cbde"
# • Given a string: "abc" // returns "abc"

# sliding window algo (base pattern)
# (look for possible patterns)
#

def longestSubstringNoDupes(string: str) -> str:
    window_start = 0 
    max_length_substring = ""

    visited = set()

    # iterate over the array to get window_end
    for window_end in range(len(string)):
        # when there are dupes (i.e. when string[window_end] is in the visited set)
        while string[window_end] in visited:
            visited.remove(string[window_start])
            window_start += 1

        # when there are not duplicates
        visited.add(string[window_end])
        # compare the length of the longest substring so far, if the current substring is longer, replace that
        curr_substring = string[window_start: window_end + 1]
        if len(max_length_substring) < len(curr_substring):
            max_length_substring = curr_substring
        
    return max_length_substring

# Test Cases
test.startProblem("Longest Substring without Repeats")
test.test("a", longestSubstringNoDupes("a"), 1)
test.test("abc", longestSubstringNoDupes("abc"), 2)
test.test("cdea", longestSubstringNoDupes("abccdeaabbcddef"), 3)
test.test("cbde", longestSubstringNoDupes("abcbde"), 4)
test.test("bac", longestSubstringNoDupes("abacacacaaabacaaaeaaafa"), 5)
test.endProblem()


