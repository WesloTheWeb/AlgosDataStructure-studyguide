function solution(l1, l2) {
  
};

const swapPairs = (head) => {
    // create dummy node to deal with null head
    const dummy = new Node();
    dummy.next = head; // makes the next pointer point to head

    let temp = dummy;

    while (temp.next && temp.next.next) { // while there is a next val and next next val
        let node1 = temp.next;
        let node2 = temp.next.next;

        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    };

    return dummy.next;
}; 