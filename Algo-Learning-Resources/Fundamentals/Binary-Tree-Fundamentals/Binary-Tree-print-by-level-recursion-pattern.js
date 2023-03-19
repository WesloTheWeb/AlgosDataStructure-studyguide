class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    };
  };
  
  const levelAverages = (root) => {
    const levels = [];
    fillLevels(root, levels, 0);
    console.log(levels);
  };
  
  const fillLevels = (root, levels, levelNum) => {
    // base case
    if (!root) return;
  
    // conditional and actions
    if (levels.length === levelNum) {
      levels.push([root.val]);
    } else {
      levels[levelNum].push(root.val);
    };
  
    // recursive case
    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
  };
  
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  
  c.right = f;
  
  levelAverages(a); // --> [3, 7.5, 1]