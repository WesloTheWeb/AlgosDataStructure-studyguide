3/*

 A       B       C        D
(29) -> (33) -> (103) -> (7) -> null


 B       A       D      C
(33) -> (29) -> (7) -> (103) -> null


head: >A


*/

function swapPairs(head) {
    function swapNextTwo(previous) {
      // (previous) -> (first) -> (second) -> (next) -> ...
      // (previous) -> (second) -> (first) -> (next) -> ...
  
      if (!previous) return null;
      if (!previous.next) return null;
      if (!previous.next.next) return null;
  
      let first = previous.next;
      let second = first.next;
      let next = second.next;
  
      previous.next = second;
      second.next = first;
      first.next = next;
  
      return first; // new "previous" for next iteration
    }
  
    let dummy = new Node(null, head);
    let current = dummy;
    while (current) {
      current = swapNextTwo(current);
    }
  
    return dummy.next;
  }
  
  
  
  
  function outer(outerArg1, outerArg2, ...) /* outerReturn */ {
    var results, innerVar1, innerVar2, ...;
  
    function inner(solution, innerArg1, innerArg2, ...) /* innerReturn */ {
      if (isGood(solution)) {
        results.push(solution);
        return;
      }
  
      if (isBad(solution)) return;
  
      // inner(firstHalf)
      // inner(secondHalf)
  
      for (let doMutate of ALL_CHANGE_FUNCS) {
        doMutate(solution); // modified currentSolution in place
        inner(nextSolution);
        doMutate(solution, undo = true); // backtrack
      }
    }
  
    let outerReturn = transform(inner(...));
    return outerReturn;
  }