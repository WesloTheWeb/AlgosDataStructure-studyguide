class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

const mergeLists = (head1, head2) => {
    // dummyHead strategy
    let dummyHead = new Node(null);
    let tail = dummyHead; // allows creation of second list
    let current1 = head1;
    let current2 = head2;

    // traversal
    while (current1 && current2) {
        if (current1.val < current2.val) {
            tail.next = current1;       // make node value current2's current value
            current1 = current1.next;   // moves the current1 pointer
        } else {
            tail.next = current2;     // make node value current2's current value
            current2 = current2.next; // moves the current2 pointer
        }
        tail = tail.next;
    };

    // checks if current list is not null
    if (current1) tail.next = current1;
    if (current2) tail.next = current2;

    return dummyHead.next;
};

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25
