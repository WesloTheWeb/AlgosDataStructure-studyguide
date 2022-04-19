// 1. Q. Given an unsorted linked list, count the number of elements iteratively.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(arg1) {
    let count = 0;
    let node = arg1;
    
    while(node) {
        count += 1;
        node = node.next;
    }
    
    return count;
    
   }

   
// 2. Q. Given a sorted linked list of unique integers, remove a target node from the list recursively. If the list does not contain the target element, do nothing.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, target) {
    if (!list) { 
        return null;
    } else if (list.value === target) {
        return solution(list.next, target);
    } else {
        list.next = solution(list.next, target);
        return list;
    };
}

// 3. Q. Reverse a given linked list.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list) {
    let prev = null;
    let curr = list;
    
    while (curr) {
        [curr.next, curr, prev] = [prev, curr.next, curr]
    };
    
    return prev;
}

// 4 Q. Given an unsorted array, perform insertion sort in ascending order.

function solution(array) {
    const length = array.length;

//   return array;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]]
      } else {
          break;
      };
    };
  };

  return array;
};

 
// 5 Q. Given an unsorted array, perform merge sort in ascending order.

function solution(array) {
    if (array.length <= 1) {
        return array;
    };
    
    let left = array.slice(0, array.length / 2);
    let right = array.slice(array.length / 2);
    let sortedLeft = solution(left);
    let sortedRight = solution(right);

    return sortArrayHandler(sortedLeft, sortedRight);
}

function sortArrayHandler(input1, input2) {
    let res = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < input1.length && i2 < input2.length) {
        if (input1[i1] < input2[i2]) {
            res.push(input1[i1])
            i1 += 1;
        } else {
            res.push(input2[i2])
            i2 += 1;
        };
    };

    return [...res, ...input1.slice(i1), ...input2.slice(i2)];
};

// ***6 Q. Given an unsorted array, return the number of unique values. For example, given [1, 1], there are two elements but only one unique value: 1.

function solution(array) {
    const counts = new Map();

  array.forEach(el => {
      counts.set(el, (counts.get(el) || 0) + 1);
  });

  return Array.from(counts.values())
      .filter(count => count >= 1) // greater than or equal to 1 to fix.
      .length;
}

// 7 