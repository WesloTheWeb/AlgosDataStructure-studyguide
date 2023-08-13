// Backtracking problem
/*
Assumptions
- Many answers,
- depends on path and order. 


Findings:
A decision tree...
- Beginning, we have 4 options,
- 1 level down we have 3 options
- 2 levels down we have 2 options
- 3 levels down we have 1 option

Example Seating Charts:
["A","B","C","D"]
*/

function seatingCharts(students) {
    const set = new Set(students);
    const stack = [];
    const results = [];
  
    // anonymous helper function.
    const helper = () => {
      // base case - tells us we completed a path if length is equal.
      if (students.length === stack.length) {
        results.push([...stack]);
        return;
      };
  
      // for loop of going down the set we created:
      for (const s of students) {
        if (set.has(s)) {
          // try adding s as the next person
          stack.push(s);
          set.delete(s); // so we don't get duplicate we delete
  
          // recursive call
          helper();
  
          // pop & add
          stack.pop();
          set.add(s);
        };
      };
    };
  
    helper(); // call our function
    return results;
  };
  
  // Test case
  const example = ["A", "B", "C"];
  console.log(seatingCharts(example));

  /*#######################################
  ALTERNATE APPROACH
  #########################################*/