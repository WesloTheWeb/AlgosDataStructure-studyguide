/*############################
SESSION 10 | March 5
############################
You have been tasked with building an AB testing library. 
You are currently working on the logic to determine which group a user should be put in.

Assuming each user has a hash value and 0 <= hash < 1, bucket each user into groups according to the designated weights for each group.

getGroup(
  hash,
  [
    { name: 'A', weight: 1 },
    { name: 'B', weight: 1 }
  ]
)
getGroup returns A for 50% of users and B for 50% of users.
0 - 50
 A
50 - 100
 B
hash (0.4) -> A

getGroup(
  hash,
  [
    { name: 'A', weight: 6 },
    { name: 'B', weight: 4 }
  ]
)
hash = 0.2

0 - 60
A: 60%
B: 40%

hash = 0.2

getGroup(
  hash,
  [
    { name: 'A', weight: 4 },
    { name: 'B', weight: 6 }
  ]
)
hash = 0.2

===

getGroup(
  hash,
  [
    { name: 'A', weight: 3 },
    { name: 'B', weight: 2 }
    { name: 'C', weight: 5 }
  ]
)
hash = 0.31

A: 0 -> 30 
B: 31 -> 50
C: 51 -> 100


- can do the calculation at the time of comparison (optimization!)
- choosing the group that falls in between the range that the hash falls
- hash value determine what group
- The weights will always be whole positive integers and not always equal to 1
- the [group name] that we choose given these weights and the hash is returned
- the hash values from 0 to 1 are exclusinve, so we'll never have a hash value of 1

prevRelativeWeight += currentRelativeWeight
cumulativeWeight = 0.5 ???

    { name: 'A', weight: 3, relativeWeight: cumulativeWeight + 0.3 },
    { name: 'B', weight: 2, relativeWeight: cumulativeWeight = relativeWeight + 0.2 -> 0.5 }
    { name: 'C', weight: 5, relativeWeight: cumulativeWeight = relativeWeight + 0.5 -> 1  }


hash = 0.61
1. Get total weights -- relative weights of each groups
2. Mutate the object with a new key:value pair
3. What each groups weight is relative to the total
4. Iterate over object again to determine where the hash value falls (which group)
5. If hash value is less than or equal to relativeWeight, return group
   
   
Apporach v2: cumulative weight, no mutation

*/
function getGroup(hash, groups) {
    // console.log("groups before iteration", groups);
    let totalWeights = 0
    for (let group of groups) {
        totalWeights += group.weight
    };

    // console.log("before modification", groups)
    // console.log("total", totalWeights)
    groups.forEach(g => { g.groupMaxRange = g.weight / totalWeights });

    // console.log("after modification", groups)
    let accumWeight = 0
    // groups.forEach(g => {
    //   // console.log('in the loop', g)
    //   accumWeight += g.groupMaxRange
    //   console.log("accumWeight", hash, accumWeight)
    // if(hash <= accumWeight){
    //   return g.name
    // }
    // })
    for (let group of groups) {
        accumWeight += group.groupMaxRange
        if (hash <= accumWeight) {
            return group.name;
        };
    };
};

console.log(getGroup(
    0.7,
    [
        { name: 'A', weight: 1 },
        { name: 'B', weight: 1 }
    ]
), "B");

console.log(getGroup(
    0.1,
    [
        { name: 'A', weight: 1 },
        { name: 'B', weight: 1 }
    ]
), "A");

console.log(getGroup(
    0.1,
    [
        { name: 'A', weight: 3 },
        { name: 'B', weight: 2 },
        { name: 'C', weight: 5 }
    ]
), "A");

console.log(getGroup(
    0.45,
    [
        { name: 'A', weight: 3 },
        { name: 'B', weight: 2 },
        { name: 'C', weight: 5 }
    ]
), "B");


console.log(getGroup(
    0.99,
    [
        { name: 'A', weight: 3 },
    ]
), "A");
