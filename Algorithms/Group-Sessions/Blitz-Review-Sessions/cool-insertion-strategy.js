// Very good insertion sort with a helper function. Try to incorporate that more into algos.

/*
* 1. Find the max element in an unsorted linked list (recursive) - 1m
2. Sum two linked lists of equal length - 2m
3. Insert an element into a sorted linked list (iterative) - 1m
***4. Insertion Sort - 3m
5. Number of duplicated elements in an array - 1m
*6. Binary Search - 3m
7. Find the max element in a binary tree - 2m
8. Find an element in a binary tree using DFS - 2m
*** 9. Insert an element into a binary search tree - 1m  
** 10. Validate BST - 6m
*/

function insert(array, val) {
    // find location
    // 1  5  7 [ 8 ] 9  10
    let j;
    for (j = 0; j < array.length; j++) {
        if (val < array[j]) {
            break;
        }
    }

    while (j < array.length) {
        const temp = array[j];
        array[j] = val;
        val = temp;
        j++;
    }
    //array[j] = val;
    array.push(val);

    // make space after j

    // place value
}

function insertionSort(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const val = array[i];
        insert(result, val);
    }

    return result;
}

const a = [1, 5, 7, 9, 10];
insert(a, 0);
console.log(a);