class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

const mergeLists = (head1, head2) => {
    // dummyHead strategy
    const dummyHead = new Node(null);

    let current1 = head1;
    let current2 = head2;

    // traversal
    while (current1 && current2) {
        if (current1.val < current2.val) {
            tail.next = current1;
            // make node and move current1 pointer
            
        } else {

        };
    };

    return dummyHead.next;
};