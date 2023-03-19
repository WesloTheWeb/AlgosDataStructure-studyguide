// TODO: Solve this problem
/*
❓ PROMPT
Given a vertex and edge list of users of a social network and two user IDs, return whether 
they are friends of friends (mutuals).

EXAMPLE(S)
users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
friends = [("Jeff", "Susan"), ("Jeff", "Fred"), ("Susan", "Ed"), ("Ed", "Fred"), ("Jason", "Zach")]

Jeff---|
 |     |
Susan  |   Jason - Zach
 |     |
 Ed - Fred

isFOF(users, friends, "Jeff", "Ed") -> True
isFOF(users, friends, "Jeff", "Susan") -> False
isFOF(users, friends, "Jeff", "Jeff") -> False

🔎 EXPLORE
State your assumptions & discoveries:
- We want to know if they have mutual friends for each other.  

Create examples & test cases:
 isFOF(users, friends, "Jeff", "Ed") -> True
 This is true because Jeff's friends are [Susan, Fred] and Ed's friends [Susan, Fred].
 - Jeff is not a direct friend of Ed, so they have mutuals.

 isFOF(users, friends, "Jeff", "Susan") -> False
- Jeff and Susan are direct friends so they are not friends of friend (mutuals
  )

  isFOF(users, friends, "Jeff", "Jeff") -> False
- Nobody named Jeff to friend with Jeff so its false

Basically have 2 key value pairs and check if they have same friends

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1:
Time: O()
Space: O()
 

📆 PLAN
High-level outline of approach #: 
 

🛠️ IMPLEMENT
function isFOF(vertex_list, edge_list, user1, user2) {
def isFOF(vertex_list: list[str], edge_list: list, user1: str, user2: str) -> bool:
 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/

const users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
let friends = [["Jeff", "Susan"], ["Jeff", "Fred"], ["Susan", "Ed"], ["Ed", "Fred"], ["Jason", "Zach"]]


// Jeff---|
//  |     |
// Susan  |   Jason - Zach
//  |     |
//  Ed - Fred

// console.log(isFOF(users, friends, "Foo", "Bar") === false)

function isFOF(users, edge_list, user1, user2) {
  // make adjancency list
  const adjancencyList = new Map();
  const visited = new Set();

  const addNode = (user) => {
    adjancencyList.set(user, []);
  };

  const addEdge = (friendA, friendB) => {
    adjancencyList.get(friendA).push(friendB);
    adjancencyList.get(friendB).push(friendA);
  }

  // Create the graph
  users.forEach(addNode);

  friends.forEach(relationship => addEdge(...relationship));

  // iterate graph
  console.log(adjancencyList)

  // I'm way too under level for this question to continue.


}

isFOF(users, friends, 'Jeff', 'Ed')

// console.log(isFOF(users, friends, 'Jeff', 'Ed')) // True
// console.log(isFOF(users, friends, 'Jeff', 'Susan')); // False
// console.log(isFOF(users, friends, 'Jeff', 'Jeff')); // False