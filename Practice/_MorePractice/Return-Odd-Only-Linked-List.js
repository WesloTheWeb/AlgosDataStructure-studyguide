class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

function arrayify(head) {
    let ptr = head;
    var array = [];
    while (ptr != null) {
        array.push(ptr.value);
        ptr = ptr.next;
    }
    
    return array;
};

function oddOnlyLL(head) {
    if (!head) return null;

    let sentinel = new ListNode(0, head);
    let curr = sentinel;

    while (curr && curr.next) {
        if (curr.next.value % 2 == 0) {
            curr.next = curr.next.next;
        };
        curr = curr.next;
    };

    return sentinel.next;
};

// Test Cases
var LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10))))))))))

// console.log(arrayify(LL1)) // [1, 2, 3, 4, 5, 6, 7, 8. 9. 10]
console.log(arrayify(oddOnlyLL(LL1))) // [1, 3, 5, 7, 9]