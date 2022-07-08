/* Office Hour - Algo Marathon
Date: 07/08/2022
PARTNERS: William Saffron

Engineering Method:
    Step 1. Thoroughly Understand the Problem.
    Step 2. Identify and explore possible solutions.
    Step 3. Choose a solution.
    Step 4. Build it.
    Step 5. Test it.

QUESTION:
Print the value of each node in a level, followed by a new line character at the end of each level

EXAMPLES:
  Target runtime and space complexity:
     Runtime: O(n)
  
         3
      2     4
    1         5
  
    output:
    3
    24
    15
  
   [[1, node], [2, node]]
  
   [
   [3],
   [2, 4],
   [1, 5],
   ]
  
  Approach:
  - BFS? 
  - as it leaves the queue, print out each value
 


PSEUDO CODE:




Time Complexity:
Space Complexity:
#########################################*/

// Our attempt:

class TreeNode {
    constructor(value, left = null, right = null) {
        this.val = value;
        this.left = left;
        this.right = right;
    };
};

const printByLevel = (root) => {
    const queue = root ? [[root, 0]] : []; // [  ];
    let level = 0; // 1;
    let output = []; // [ [3] ];

    while (queue.length) { // 1
        const current = queue.shift(); // [(3), 0];

        console.log({ currentNodeValue: current[0].val, currentNodeLevel: current[1], output, level })
        if (output.length === level) {
            output.push([]);
        };

        output[current[1]].push(current[0].val);
        level += 1;
        if (current[0].left) queue.push([current[0].left, level]);
        if (current[0].right) queue.push([current[0].right, level]);
    };

    return output;
};

const TREE1 = new TreeNode(
    3,
    new TreeNode(
        2,
        new TreeNode(1),
    ),
    new TreeNode(
        4,
        null,
        new TreeNode(5),
    );
);

// Test Cases:
console.log(printByLevel(TREE1))
  /**
* 3
* 24
* 15


// Solution: 



// Solution Test Cases:
