/* PROBLEM:
Track the trails of user actions. A user encounters a bug if the actions of the user is 'A','B','C' in any order.
Return an array of users that encountered the bug.

*/

// []
const logs_single_user1 = [
    { userId: '1', action: 'A' },
  ];
  
  // ['1']
  const logs_single_user2 = [
    { userId: '1', action: 'A' },
    { userId: '1', action: 'B' },
    { userId: '1', action: 'C' },
  ];
  
  
  // ['1']
  const logs_single_user3 = [
    { userId: '1', action: 'A' },
    { userId: '1', action: 'A' },
    { userId: '1', action: 'B' },
    { userId: '1', action: 'C' },
  ];
  
  /*
  
  {
      '1': ['A', 'B', 'C'],
      '2': ['T'],
  }
  
  */
  
  
  // []
  const anothertest = [
    { userId: '1', action: 'A' },
    { userId: '1', action: 'B' },
    { userId: '1', action: 'A' },
    { userId: '1', action: 'C' },
  ];
  
  
  // ['1']
  const logs_multiuser = [
    { userId: '1', action: 'A' },
    { userId: '2', action: 'B' },
    { userId: '1', action: 'B' },
    { userId: '1', action: 'C' },
  ];
  
  
  // // ['1', '2']
  // const logs_multiuser = [
  //   { userId: '1', action: 'A' },
  //   { userId: '2', action: 'A' },
  //   { userId: '1', action: 'B' },
  //   { userId: '1', action: 'C' },
  //   { userId: '2', action: 'B' },
  //   { userId: '2', action: 'C' },
  // ];
  
  /* APPROACH
  - use a hashmap to keep track of the key - value pairs
      - key can be the user, if it hits "a" -> 'b' -> 'c' if has a count of 1 
      then we can return the bug which will return user id's
  - 
  
  PSUDO CODE
  - create result array variable
  - create hashmap
      - iterate through the array, add to hashmap
  - evaluate hashmap, if user hits a, b, c, add to result array
  - return result array
  */
  
  function detectBug(arr) {
      const usersEncounteredBug = [];
      const userTrail = new Map();  
      let userActions = [];
      // [['A','B','C'], ['A','B']]
  
      for (let user of (arr)) {
          if (!userTrail.has(user.userId)) {
              userTrail.set(user.userId, [user.action])
              // userTrail.set(userId, [user.action])
          } else {
              
              userTrail.get(user.userId).push(user.action)
              // userTrail.set(userId, userTrail.get(user.userId).push(user.action))
          }
      }
  
      // console.log(userTrail)
  
      // Finding the user with the bug
      for (let [key, value] of userTrail.entries()) {
          console.log('key', key);
          console.log(value)
          // value.join('') === 'ABC'
          if (value.join('').includes('ABC')) {
              usersEncounteredBug.push(key);
          }
      }
  
      return usersEncounteredBug;
  };
  
  // this logs out the result of your function
  const testArray = logs_single_user3;
  console.log(detectBug(testArray));