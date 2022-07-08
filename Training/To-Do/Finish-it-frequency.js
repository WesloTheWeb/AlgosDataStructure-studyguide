/*############################
QUESTION: 2: frequency of the least occurring.
###############################
Given a binary tree with node values represented as integers, find and return the least occurring  tree node value.
Input:
       1
    2    2
  3 3    3 3
 
{1: 1, 2: 2, 3: 4}
               ^
min: 1
Output: 1
Input:
    1
 1 2  2
Output: return any valid answer at random (1 or 2)
 
Algorithm:
Have a map of count of values. Iterate through every node in the tree, adding its count to the map. Iterate through your map again, and find the minimum value.
 
Should we use DFS or BFS to solve this problem?
1. DFS x
2. BFS
3. Does not matter xxxxxx
 
[1, 1, 1, 1, 1] => 5
Should we traverse L -> R? or R -> L?
 
[1, 2, 2, 1, 2]
 
NOTE: Problem below solution is pseudocoded. Reattempt it with fixing:
*/

function leastOccurring(node) {
    let nodes = [node]
    let counts = {}

    while (nodes.length > 0) {
        let currNode = nodes.pop()
        counts[currNode.value] = (counts[currNode.value] || 0) + 1
    }
    let minKey = null

    for (let key in counts) {
        if (!minKey) {
            minKey = key;
        }
        if (counts[key] < counts[minKey]) {
            minKey = key;
        };
    };
    return minKey;
};